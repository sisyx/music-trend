import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { getInstaUser, getTelegramChannel } from "../../functions";
import Loading from "../loadings/Loading";
import CircleGradient from "../loadings/CircleGradient";
import { CgProfile } from "react-icons/cg";

function TelegramTableRow({ publisher, index }) {
    const [isLoading, setIsLoading] = useState(true);
    const [xpublisher, setXpublisher] = useState({});
    const [isImageLoded, setIsImageLoded] = useState(false);

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        console.log(xpublisher);
    }, [xpublisher])

    async function init() {
        setIsLoading(() => true);
        const tmpPublisher = await getTelegramChannel(publisher.channelId);
        setXpublisher(tmpPublisher);
        setIsLoading(() => false);
    }

    return ( 
        <tr className='bg-white hover:bg-gray-300 transition-all duration-100 cursor-pointer'>
            <td className='py-2'>
                {
                    isLoading 
                    ? <CircleGradient startColor="#2da5dc" stopColor="#2da5dc" /> 
                    : !isImageLoded ? <CgProfile fontSize="2rem" /> : ""
                }
                {
                    xpublisher?.photoUrl ? 
                    <img
                        className="max-h-12 rounded-full"
                        onLoad={() => setIsImageLoded(true)}
                        src={xpublisher.photoUrl} alt="" 
                    />
                    : ""
                }
            </td>
            <td className='py-2'>{publisher.channelId}</td>
            <td className='py-2'>{xpublisher?.channelTitle ? xpublisher.channelTitle : isLoading ? <CircleGradient startColor="#2da5dc" stopColor="#2da5dc" /> : ""}</td>
            <td className='py-2'>{xpublisher?.channelMembersCount ? xpublisher.channelMembersCount : isLoading ? <CircleGradient startColor="#2da5dc" stopColor="#2da5dc" /> : ""}</td> 
            <td className='py-2'>{publisher.postViews}</td>
            <td className='py-2'>
                <a href={`${publisher.postLink}`} className="text-4xl text-telegram hover:text-black">
                    <FaTelegramPlane />
                </a>
            </td>
        </tr>
     );
}

export default TelegramTableRow;