import { useSelector } from "react-redux";
import Left from '../../components/start/Left'
import RightFilters from '../../components/start/website/WebstiteRifghtFilters';
import TaarifTitles from "../../components/start/TaarifTitles";
import { tmpSites, websitePriceTitles } from "../../tmp";
import Website from "../../components/start/website/Website";

function WebsiteStart() {
    const viewMode = useSelector((state) => state.start.viewMode);
    const currentPrice = useSelector((state) => state.cart.currentPrice);
    const formatedSites = getFormatedSites();

    function getFormatedSites() {
        const formatedSites = [];
        const tmpSitesLength = tmpSites.length;
        for (let i = 0; i < tmpSitesLength; i++) {
            const tmpSite = tmpSites[i];
            if (!!tmpSite.prices.find(price => price.title === currentPrice)) {
                formatedSites.push(tmpSite);
            }
        }
        return formatedSites
    }

    return (
        <div data-aos="fade-right" data-aos-duration="200" className="flex w-full p-4 gap-4 h-full">
            <Left type="website" />
            <div className="flex-1 h-screen shadow-xl rounded-md">
                <TaarifTitles taarifs={websitePriceTitles} />
                <div className={`grid ${viewMode === 'large' ? "grid-cols-7" : viewMode === "medium" ? " grid-cols-10" : "grid-cols-1" } gap-2`}>
                    {/* pages */}
                    {
                        formatedSites.length && formatedSites.map((site, index) => <Website currentPrice={currentPrice} siteUrl={site.siteUrl} prices={site.prices} followers={site.followers} name={site.showName} index={index} viewMode={viewMode} key={`site---${index}`} />)
                    }
                </div>
            </div>
            <RightFilters />
        </div>
     );
}

export default WebsiteStart;