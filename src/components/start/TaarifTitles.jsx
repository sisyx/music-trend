import { allPriceTitles } from "../../tmp";
import { useDispatch, useSelector } from "react-redux";
import Title from "./Title";
import { changeCurrentPrice } from "../../Redux/core/cart/cartSlice";

function TaarifTitles() {
    const currentPrice = useSelector((state) => state.cart.currentPrice);
    const dispatch = useDispatch();

    function handlechangeCurrnetPrice(newPrice) {
        dispatch(changeCurrentPrice(newPrice));
    }

    return ( 
        <div className="flex w-full bg-gray-100" dir="rtl">
            {allPriceTitles.map(title => <Title value={title} onClick={handlechangeCurrnetPrice} currnetPrice={currentPrice} name={title} />)}
        </div>
     );
}

export default TaarifTitles;