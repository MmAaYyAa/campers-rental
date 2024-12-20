import { createSlice } from '@reduxjs/toolkit';
import operations from './catalogOperations';

const {getCatalog} = operations;

const initialState = {
    items: [],
    favorites: JSON.parse(localStorage.getItem("persist:favorites"))?.favorites ?? [], 
    isLoading: false,
    error: null,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const item = action.payload;
            if (!state.favorites.some(fav => fav.id === item.id)) {
                state.favorites.push(item);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
        },
    },
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
export const { addToFavorites, removeFromFavorites } = catalogSlice.actions;