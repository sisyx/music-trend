import { useDispatch, useSelector } from "react-redux";
import Title from "./Title";
import { changeCurrentPrice } from "../../Redux/core/cart/cartSlice";
import { useEffect } from "react";

function TaarifTitles({ taarifs = [] }) {
    const currentPrice = useSelector((state) => state.cart.currentPrice);
    const dispatch = useDispatch();

    function handlechangeCurrnetPrice(newPrice) {
        dispatch(changeCurrentPrice(newPrice));
    }

    useEffect(() => {
        // Update the current price whenever they change: when choosing (instagram/website/telegram)
        if (taarifs.length) {
            dispatch(changeCurrentPrice(taarifs[0]))
        }
    }, [taarifs])

    return ( 
        <div className="flex w-full bg-gray-100" dir="rtl">
            {taarifs.map(title => <Title value={title} onClick={handlechangeCurrnetPrice} currnetPrice={currentPrice} name={title} />)}
        </div>
     );
}

export default TaarifTitles;