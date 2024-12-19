import {CHECKOUT, PLACEORDER, REPAYMENT} from '../types';
import {checkoutServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const checkoutDetails = createAsyncThunk([CHECKOUT], async data => {
  const response = await checkoutServices.checkoutDetails(data);
  if (response.status == 200) {
    const res = {
      val: 'Success',
      data: response.data,
    };
    return res;
  } else {
    const res = {
      val: 'Error',
      data: response.data,
    };
    return res;
  }
});

export const placeOrder = createAsyncThunk([PLACEORDER], async data => {
  const response = await checkoutServices.placeOrders(data);
  if (response.status == 200) {
    const res = {
      val: 'Success',
      data: response.data,
    };
    return res;
  } else {
    const res = {
      val: 'Error',
      data: response.data,
    };
    return res;
  }
});

export const rePayment = createAsyncThunk([REPAYMENT], async data => {
  const response = await checkoutServices.rePayment(data);
  if (response.status == 200) {
    const res = {
      val: 'Success',
      data: response.data,
    };
    return res;
  } else {
    const res = {
      val: 'Error',
      data: response.data,
    };
    return res;
  }
});
