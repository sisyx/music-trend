import { configureStore } from "@reduxjs/toolkit";
import startReducer from './core/start/startSlice';
import cartReducer from "./core/cart/cartSlice";
import telegramCartReducer from "./core/cart/telegram_cart/telegramCartSlice";

export default configureStore({
    reducer: {
        start: startReducer,
        cart: cartReducer,
        telegramCart: telegramCartReducer,
    }
});