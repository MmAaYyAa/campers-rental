import { createSlice } from '@reduxjs/toolkit';
import operations from './catalogOperations';

const {getCatalog} = operations;

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCatalog.pending, (state) => {
            state.isLoading = true;
        state.error = null;
        })
        .addCase(getCatalog.fulfilled, (state,action) => {
            state.isLoading = false;
        state.items = action.payload;
        })
        .addCase(getCatalog.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });

    },
});

export default catalogSlice.reducer;