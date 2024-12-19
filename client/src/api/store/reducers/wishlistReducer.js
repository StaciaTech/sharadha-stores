import {createSlice} from '@reduxjs/toolkit';
import {removeWishlistData, wishlistData} from '../actions';

const initialState = {
  loading: false,
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    updateLoading(state, action) {
      state.loading = action.payload;
    },
    updateWishlist(state, action) {
      state.wishlist = action.payload;
    },
  },
  extraReducers: builder => {
    //Wishlist Cases
    builder.addCase(wishlistData.pending, (state, action) => {});
    builder.addCase(wishlistData.fulfilled, (state, action) => {
      state.wishlist = action.payload.data;
    });
    builder.addCase(wishlistData.rejected, (state, action) => {});

    //Remove Wishlist Cases
    builder.addCase(removeWishlistData.pending, (state, action) => {});
    builder.addCase(removeWishlistData.fulfilled, (state, action) => {});
    builder.addCase(removeWishlistData.rejected, (state, action) => {});
  },
});

export const {updateLoading, updateWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
