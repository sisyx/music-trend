import { createSlice } from "@reduxjs/toolkit"
import { customAlert } from "@/functions";

const initialState = {
    hasSelectedYet: false,
    channels: [],
    prices: [],
    priceAndChannelsPair: [], // {channel, price},
}

const telegramCartSlice = createSlice({
    name: "telegramcart",
    initialState,
    reducers: {
        addPrice: (state, action) => {
            const {channel, price} = action.payload;
            if (price?.title) {
                state.hasSelectedYet = true;
                state.channels.push(channel);
                state.prices.push(price);
                
                if (!!state.priceAndChannelsPair.find(item => item.channel === channel)) {
                    state.priceAndChannelsPair.find(item => item.channel === channel).prices.push(price);
                } else {
                    state.priceAndChannelsPair.push({channel, prices: [price]});
                }
            } else {
                customAlert("مشکلی پیش آمده. لطفا صفحه را ریفرش کنید", "error")
            }
        },
        removePrice: (state, action) => {
            const {channel, price} = action.payload;
            const channels = state.channels;
            for (let i = channels.length - 1; i >=0; i--) {
                const xchannel = channels[i];
                if (channel === xchannel) {
                    state.channels.splice(i, 1);
                    state.prices.splice(i, 1);
                }
            }
            for (let i = 0; i < state.priceAndChannelsPair.length; i++) {
                const tmpPair = state.priceAndChannelsPair[i];
                if (tmpPair.channel === channel) {
                    if (tmpPair.prices.length) {
                        state.priceAndChannelsPair.splice(i, 1);
                    } else {
                        state.priceAndChannelsPair[i].prices.filter(xrpice => xrpice.title !== price.title);
                    }
                }
            }
        },
        removeChannel: (state, action) => {
            const channel = action.payload;
            const channels = state.channels;
            for (let i = channels.length - 1; i >=0; i--) {
                const xchannel = channels[i];
                if (channel === xchannel) {
                    state.channels.splice(i, 1);
                    state.prices.splice(i, 1);
                }
            }
            const priceAndChannelsPairs = state.priceAndChannelsPair;
            const priceAndChannelsPairsLength = priceAndChannelsPairs.length
            for (let i = 0; i < priceAndChannelsPairsLength; i++) {
                const tmpPair = priceAndChannelsPairs[i];
                if (tmpPair.channel === channel) {
                    state.priceAndChannelsPair.splice(i, 1);
                    break;
                }
            } 
        },
    }
})

export const { addPrice, removePrice, removeChannel } = telegramCartSlice.actions;

export default telegramCartSlice.reducer;