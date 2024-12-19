import {CART, CLEARCARTDATA, REMOVECARTDATA, UPDATECARTDATA} from '../types';
import {cartServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const cartData = createAsyncThunk([CART], async () => {
  const response = await cartServices.cartData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const updateCartData = createAsyncThunk([UPDATECARTDATA], async data => {
  const response = await cartServices.updateCartData(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const removeCartData = createAsyncThunk([REMOVECARTDATA], async data => {
  const response = await cartServices.removeCartData(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const clearCartData = createAsyncThunk([CLEARCARTDATA], async () => {
  const response = await cartServices.clearCartData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
