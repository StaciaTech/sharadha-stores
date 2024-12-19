import {REMOVEWISHLISTDATA, WISHLIST} from '../types';
import {wishlistServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const wishlistData = createAsyncThunk([WISHLIST], async () => {
  const response = await wishlistServices.wishlistData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const removeWishlistData = createAsyncThunk(
  [REMOVEWISHLISTDATA],
  async data => {
    const response = await wishlistServices.removeWishlistData(data);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);
