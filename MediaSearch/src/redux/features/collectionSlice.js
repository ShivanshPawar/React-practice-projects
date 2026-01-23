import { createSlice } from '@reduxjs/toolkit'
import { Flip, toast } from 'react-toastify'

const initialState = {
  items: JSON.parse(localStorage.getItem('collectionItems')) || []
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        item => item.id === action.payload.id
      )
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem('collectionItems', JSON.stringify(state.items))
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
      localStorage.setItem('collectionItems', JSON.stringify(state.items))
    },

    clearCollection: (state) => {
      state.items = []
      localStorage.removeItem('collectionItems')
    },

    addedToast: () => {
      toast.success('Added to Collections', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        style: { backgroundColor: '#00B8DB' }
      });
    },

    removeToast: () => {
      toast.error('Removed from Collection', {
        position: "bottom-right",
        autoClose: 997,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }

  }
})

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removeToast
} = collectionSlice.actions;

export default collectionSlice.reducer