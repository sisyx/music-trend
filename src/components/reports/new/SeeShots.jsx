import { useEffect, useState } from 'react';
// import styles from './ScreenshotsViewer.module.css';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { getShotData, getShots } from '../../../functions';
import { getFileExtension, getFileType } from '../../../utils/files';
import CircleGradient from '../../loadings/CircleGradient';
// import Loading from './Loading';

function SeeShots({ pId, campId, closeShots }) {
    const [shotsUrls, setShotsUrls] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isloadingImage, setIsLoadingImage] = useState(true);
    const [currentShotData, setCurrentShotData] = useState("");
    let type = shotsUrls?.length ? getFileType(shotsUrls[currentImage - 1].fileName) : "image";
    
    async function initShots() {
        const shots = await getShots(campId, pId);

        setShotsUrls(() => shots);
        if (shots.length) setCurrentImage(() => 1)
    }

    useEffect(() => {
        initShots();
    }, [])

    useEffect(() => {
        setIsLoadingImage(() => true)
        if (shotsUrls.length) viewShot();
    }, [currentImage]);
    
    async function viewShot() {
        const tmpShotData = await getShotData(shotsUrls[currentImage - 1].filePath, getFileExtension(shotsUrls[currentImage - 1].fileName));

        setCurrentShotData(tmpShotData);
        if (tmpShotData) {
            setIsLoadingImage(false)
        }
    }

    function increaseCurImg() {
        setCurrentImage(cur => cur < shotsUrls.length ? cur+1 : cur);
    }

    function decreaseCurImg() {
        setCurrentImage(cur => cur > 1 ? cur-1 : cur);
    }

    return ( 
        // .container {
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     height: 100vh;
        //     width: 100vw;
        //     z-index: 10000;
        
        //     background-color: #3335;
        //     backdrop-filter: blur(5px);
        // }
        // .inner_contaienr {
        //     display: flex;
        //     flex-direction: column;
        //     align-items: center;
        //     justify-content: center;
        //     height: 100%;
        //     gap: 30px;
        //     position: relative;
        // }
        // .pagination {
        //     border: 1px black solid;
        //     position: absolute;
        //     bottom: 10px;
        //     left: 50%;
        //     transform: translateX(-50%);
        
        //     backdrop-filter: blur(5px);
        // }
        // .image {
        //     max-height: 90vh;
        // }
        <div className="fixed top-0 left-0 h-screen w-screen z-[1000] bg-[#3335] backdrop-blur"
        onClick={closeShots}>
            <div className="flex flex-col items-center content-center h-full gap-8 relative">
                {
                    isloadingImage ? <div className='w-full h-full flex items-center justify-center'>
                    <CircleGradient /> 
                    </div>
                    : <>
                    <div>
                        {
                            type === "image" 
                            ? <img src={currentShotData} className="w-[90vh]" />
                            : <video src={currentShotData} className="w-[90vh]" controls="true" onClick={event => {
                                event.stopPropagation()
                            }} />
                        }
                    </div>
                    <div className="border border-black absolute bottom-2 left-1/2 -translate-x-1/2 backdrop-blur" onClick={e => e.stopPropagation()}>
                        <IconButton onClick={decreaseCurImg} disabled={currentImage <= 1 }>
                            <NavigateBeforeIcon />
                        </IconButton>
                        <IconButton sx={{aspectRatio: 1}}>
                            {currentImage}
                        </IconButton>
                        <IconButton onClick={increaseCurImg} disabled={currentImage >= shotsUrls.length }>
                            <NavigateNextIcon />
                        </IconButton>
                    </div>
                    </>
                }   
            </div>
        </div>
     );
}

export default SeeShots;
