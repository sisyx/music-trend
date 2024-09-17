import { useEffect } from "react";
import { cartCookieSelectedInflus, cartCookieSelectedPrices, root } from "../../constatnts";
import { getCookie } from "../../functions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Payment() {

    // const [prices, setPrices] = useState([]);
    // const [influs, setInflus] = useState([]);

    // const priceIdsList = getCookie(cartCookieSelectedPrices).split(",");
    // const influIdsList = getCookie(cartCookieSelectedInflus).split(",");
    
    // useEffect(() => {
    //     console.log(priceIdsList)
    //     console.log(influIdsList)
    // }, []);
    const navigate = useNavigate()


    return ( 
        <div>
            <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
                <span className="text-xl text-black">PAYMENT PAGE</span>
                <Button onClick={() => navigate("/")}>بازگشت به خانه</Button>
            </div>
        </div>
     );
}

export default Payment;