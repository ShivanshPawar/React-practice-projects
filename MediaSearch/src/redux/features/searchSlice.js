import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'all',
        results: [],
        loading: false,
        error: null
    },

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setResult: (state, action) => {
            state.loading = false;
            state.results = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload
            state.loading = false;
        },

        clearResults: (state) => {
            state.results = [];
        }
    }
});

export const { setQuery,
    setActiveTab,
    setResult,
    setLoading,
    setError,
    setResults
} = searchSlice.actions;

export default searchSlice.reducer;