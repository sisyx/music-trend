import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeViewMode } from "../../Redux/core/start/startSlice";
import Left from '../../components/start/Left'
import RightFilters from '../../components/start/RightFilters';
import Page from "../../components/start/instagram/Page";
import { allPriceTitles, tmpPages } from "../../tmp";
import Title from "../../components/start/Title";
import TaarifTitles from "../../components/start/TaarifTitles";

function InstagramStart() {
    const viewMode = useSelector((state) => state.start.viewMode);
    const currentPrice = useSelector((state) => state.cart.currentPrice);
    const formatedPages = getFormatedPages();

    function getFormatedPages() {
        const formatedPages = [];
        const tmpPagesLength = tmpPages.length;
        for (let i = 0; i < tmpPagesLength; i++) {
            const tmpPage = tmpPages[i];
            if (!!tmpPage.prices.find(price => price.title === currentPrice)) {
                formatedPages.push(tmpPage);
            }
        }

        return formatedPages
    }

    return ( 
        <div className="flex w-full p-4 gap-4 h-full">
            <Left />
            <div className="flex-1 h-screen shadow-xl rounded-md">
                <TaarifTitles />
                <div className={`grid ${viewMode === 'large' ? "grid-cols-7" : viewMode === "medium" ? " grid-cols-10" : "grid-cols-1" } gap-2`}>
                    {/* pages */}
                    {
                        formatedPages.length && formatedPages.map((page, index) => <Page currentPrice={currentPrice} pageId={page.pageId} prices={page.prices} followers={page.followers} name={page.showName} index={index} viewMode={viewMode} key={`page---${index}`} />)
                    }
                </div>
            </div>
            <RightFilters />
        </div>
     );
}

export default InstagramStart;