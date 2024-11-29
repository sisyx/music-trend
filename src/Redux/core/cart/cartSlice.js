import { createSlice } from "@reduxjs/toolkit"
import { customAlert } from "../../../functions";
import { allPriceTitles } from "../../../tmp";

const initialState = {
    hasSelectedYet: false,
    pages: [],
    prices: [],
    priceAndPagesPair: [], // {page, price},
    currentPrice: allPriceTitles[0],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPrice: (state, action) => {
            const {page, price} = action.payload;
            if (price?.title) {
                state.hasSelectedYet = true;
                state.pages.push(page);
                state.prices.push(price);
                
                if (!!state.priceAndPagesPair.find(item => item.page === page)) {
                    state.priceAndPagesPair.find(item => item.page === page).prices.push(price);
                } else {
                    state.priceAndPagesPair.push({page, prices: [price]});
                }
            } else {
                customAlert("مشکلی پیش آمده. لطفا صفحه را ریفرش کنید", "error")
            }
        },
        removePrice: (state, action) => {
            const {page, price} = action.payload;
            const pages = state.pages;
            for (let i = pages.length - 1; i >=0; i--) {
                const xpage = pages[i];
                if (page === xpage) {
                    state.pages.splice(i, 1);
                    state.prices.splice(i, 1);
                }
            }
            const priceAndPagesPairs = state.priceAndPagesPair;
            // const priceAndPagesPairslength = priceAndPagesPairs.length;
            for (let i = 0; i < state.priceAndPagesPair.length; i++) {
                const tmpPair = state.priceAndPagesPair[i];
                if (tmpPair.page === page) {
                    if (tmpPair.prices.length) {
                        state.priceAndPagesPair.splice(i, 1);
                    } else {
                        state.priceAndPagesPair[i].prices.filter(xrpice => xrpice.title !== price.title);
                    }
                }
            }

        },
        removePage: (state, action) => {
            const page = action.payload;
            const pages = state.pages;
            for (let i = pages.length - 1; i >=0; i--) {
                const xpage = pages[i];
                if (page === xpage) {
                    state.pages.splice(i, 1);
                    state.prices.splice(i, 1);
                }
            }
            const priceAndPagesPairs = state.priceAndPagesPair;
            const priceAndPagesPairsLength = priceAndPagesPairs.length
            for (let i = 0; i < priceAndPagesPairsLength; i++) {
                const tmpPair = priceAndPagesPairs[i];
                if (tmpPair.page === page) {
                    state.priceAndPagesPair.splice(i, 1);
                    break;
                }
            } 
        },
        changeCurrentPrice: (state, action) => {
            state.currentPrice = action.payload;
        }
    }
})

export const { addPrice, removePrice, removePage, changeCurrentPrice } = cartSlice.actions;

export default cartSlice.reducer;