import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: ""
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagsSelected: (state, action) => {
            state.tags = [action.payload];
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: (state) => {
            state.search = "";
        },
    }
})

export const {tagsSelected, searched, clearSearch} = filterSlice.actions;
export default filterSlice.reducer;