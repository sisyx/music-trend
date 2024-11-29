import { createSlice } from "@reduxjs/toolkit";

const startSlice = createSlice({
    name: "start",
    initialState: {
        isFiltersShowing: false,
        viewMode: "large" || "medium" || "small",
    },
    reducers: {
        showFilters: (state) => {
            state.isFiltersShowing = true
        },
        hideFilters: (state) => {
            state.isFiltersShowing = false;
        },
        changeViewMode: (state, action) => {
            state.viewMode = action.payload
        }
    }
});

export const {showFilters, hideFilters, changeViewMode} = startSlice.actions;

export default startSlice.reducer;