import { configureStore } from "@reduxjs/toolkit";
import startReducer from './core/start/startSlice';
import cartReducer from "./core/cart/cartSlice";

export default configureStore({
    reducer: {
        start: startReducer,
        cart: cartReducer
    }
});