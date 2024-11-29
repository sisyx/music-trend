import { createSlice } from "@reduxjs/toolkit"
import { customAlert } from "../../../functions";
import { allPriceTitles } from "../../../tmp";

const initialState = {
    hasSelectedYet: false,
    // instagram
    pages: [],
    prices: [],
    priceAndPagesPair: [], // {page, price},

    // website
    websites: [],
    wprices: [],
    priceAndSitesPair: [],

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
        },
        addWPrice: (state, action) => {
            const {site, price} = action.payload;
            if (price?.title) {
                state.hasSelectedYet = true;
                state.websites.push(site);
                state.wprices.push(price);
                
                if (!!state.priceAndSitesPair.find(item => item.site === site)) {
                    state.priceAndSitesPair.find(item => item.site === site).prices.push(price);
                } else {
                    state.priceAndSitesPair.push({site, prices: [price]});
                }
            } else {
                customAlert("مشکلی پیش آمده. لطفا صفحه را ریفرش کنید", "error")
            }
        },
        removeWPrice: (state, action) => {
            const {site, price} = action.payload;
            const websites = state.websites;
            for (let i = websites.length - 1; i >=0; i--) {
                const xsite = websites[i];
                if (site === xsite) {
                    state.websites.splice(i, 1);
                    state.wprices.splice(i, 1);
                }
            }
            const priceAndSitesPairs = state.priceAndSitesPair;
            // const priceAndPagesPairslength = priceAndPagesPairs.length;
            for (let i = 0; i < state.priceAndSitesPair.length; i++) {
                const tmpPair = state.priceAndSitesPair[i];
                if (tmpPair.site === site) {
                    if (tmpPair.prices.length) {
                        state.priceAndSitesPair.splice(i, 1);
                    } else {
                        state.priceAndSitesPair[i].prices.filter(xrpice => xrpice.title !== price.title);
                    }
                }
            }
        },
        removeSite: (state, action) => {
            const site = action.payload;
            const sites = state.websites;
            for (let i = sites.length - 1; i >=0; i--) {
                const xsite = sites[i];
                if (site === xsite) {
                    state.websites.splice(i, 1);
                    state.wprices.splice(i, 1);
                }
            }
            const priceAndSitesPair = state.priceAndSitesPair;
            const priceAndSitesPairsLength = priceAndSitesPair.length
            for (let i = 0; i < priceAndSitesPairsLength; i++) {
                const tmpPair = priceAndSitesPair[i];
                if (tmpPair.site == site) {
                    state.priceAndSitesPair.splice(i, 1);
                    break;
                }
            } 
        }
    }
})

export const { 
    addPrice, removePrice, removePage,
    addWPrice, removeWPrice, removeSite,
    changeCurrentPrice,
} = cartSlice.actions;

export default cartSlice.reducer;