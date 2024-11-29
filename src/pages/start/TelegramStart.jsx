import { useSelector } from "react-redux";
import Left from '@/components/start/Left'
import RightFilters from '@/components/start/telegram/TelegramRifghtFilters';
import TaarifTitles from "@/components/start/TaarifTitles";
import { tmpChannels, telegramPriceTitles } from "@/tmp";
import Channel from "../../components/start/telegram/Channel";

function TelegramStart() {
    const viewMode = useSelector((state) => state.start.viewMode);
    const currentPrice = useSelector((state) => state.cart.currentPrice);
    const formatedChannels = getFormatedChannels();

    function getFormatedChannels() {
        const formatedChannels = [];
        const tmpChannelsLength = tmpChannels.length;
        for (let i = 0; i < tmpChannelsLength; i++) {
            const tmpChannel = tmpChannels[i];
            if (!!tmpChannel.prices.find(price => price.title === currentPrice)) {
                formatedChannels.push(tmpChannel);
            }
        }
        return formatedChannels
    }

    return (
        <div data-aos="fade-left" data-aos-duration="200" className="flex w-full p-4 gap-4 h-full">
            <Left type="telegram" />
            <div className="flex-1 h-screen shadow-xl rounded-md">
                <TaarifTitles taarifs={telegramPriceTitles} />
                <div className={`grid ${viewMode === 'large' ? "grid-cols-7" : viewMode === "medium" ? " grid-cols-10" : "grid-cols-1" } gap-2`}>
                    {/* pages */}
                    {
                        formatedChannels.length && formatedChannels.map((site, index) => <Channel currentPrice={currentPrice} channelId={site.channelId} prices={site.prices} followers={site.followers} name={site.showName} index={index} viewMode={viewMode} key={`channel---${index}`} />)
                    }
                </div>
            </div>
            <RightFilters />
        </div>
     );
}

export default TelegramStart;