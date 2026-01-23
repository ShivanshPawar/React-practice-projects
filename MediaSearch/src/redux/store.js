import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice.js';
import collectionReducer from './features/collectionSlice.js';
export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
});
