import { createSlice } from "@reduxjs/toolkit";

const startSlice = createSlice({
    name: "start",
    initialState: {
        isFiltersShowing: false,
        viewMode: "large" || "medium" || "small",
        searchPhrase: "",
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
        },
        search: (state, action) => {
            state.searchPhrase = action.payload;
        }
    }
});

export const { showFilters, hideFilters, changeViewMode, search } = startSlice.actions;

export default startSlice.reducer;