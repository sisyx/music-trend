import { useEffect, useState } from "react";
import StartCard from "./StartCard";

// icons
import CircleGradient from "../loadings/CircleGradient";
import { useSearchParams } from "react-router-dom";
import InfluencerInfo from "./InfluencerInfo";
import { FaChevronDown } from "react-icons/fa";
import { getFilteredPublishers } from "../../functions";

function StartCards({ influencers, setInfs }) {
    const [selectedInf, seSelectedInf] = useState({});
    const [indetails, setindetails] = useState(false);
    const [params] = useSearchParams();
    const [influsCount, setInflusCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        init();
    }, []);

    useEffect(()=> {
        applyFilters();
    }, [params.get("ptype"), params.get("pcat"), params.get("maxp"), params.get("minp"), params.get("pgender")])
    
    async function init() {
        setInflusCount(6);
        applyFilters();
    }

    async function applyFilters() {
        setIsLoading(() => true);
        const ptype = params.get("ptype");
        const pcat = params.get("pcat");
        const maxp = params.get("maxp");
        const minp = params.get("minp");
        const sex = params.get("pgender");
        const valuePTYPE = !!ptype && ptype != 0 ? ptype : undefined;
        const valuePCAT = !!pcat && pcat != 0 ? pcat : undefined;
        const valueMAXP = !!maxp ? maxp : undefined;
        const valueMINP = !!minp ? minp : undefined;
        const valueSEX = !!sex && sex != 0 ? sex : undefined
        const filteredPages = await getFilteredPublishers(valuePTYPE, valuePCAT, valueMAXP, valueMINP, valueSEX);
        if (filteredPages.length) setInfs(filteredPages);
        else setInfs([])
        setIsLoading(() => false);
    }

    function selectInf(inf) {
        seSelectedInf(() => inf);
        setindetails(() => true);
    }

    function handleShotMoreClick() {
        setInflusCount(cur => cur + 6)
    }

    return ( 
        <div>
            {
                isLoading 
                ? <div className="w-full h-full min-h-96 flex items-center justify-center pt-9">
                    <CircleGradient />
                </div> 
                : influencers?.length 
                ? <div className={`transition-500`}>
                    <div className={`grid grid-cols-3 gap-3 p-3 w-full transition-500`}>
                        { influencers.slice(0, influsCount).map((influencer, index) => <StartCard index={index} selectInf={selectInf} setindetails={setindetails} influencer={influencer} />)}
                    </div>
                    {
                        (influsCount < influencers.length && !isLoading) &&
                        <div className="flex items-center gap-2 justify-center w-full py-2 cursor-pointer text-black " onClick={handleShotMoreClick}>
                            {/* <Pagination count={10} color="secondary" /> */}
                            <span>
                                مشاهده بیشتر
                            </span>
                            <FaChevronDown />
                        </div>
                    }
                </div> 
                : <span className="text-black w-full py-24 flex items-center justify-center">هیچ انفلوینسری یافت نشد</span>
            }
                <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent z-50 duration-100 transition-all ${indetails ? "scale-y-1" : 'scale-y-0'}`} onClick={e => {
                    e.stopPropagation();
                    setindetails(false);
                }}>
                    {
                        indetails 
                        ? <InfluencerInfo setInfs={setInfs} setindetails={setindetails} selectedInf={selectedInf} />
                        : ""
                    }
                </div>
        </div>
     );
}

export default StartCards;