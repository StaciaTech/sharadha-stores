import {
  DOWNLOADLICENSEORDER,
  DOWNLOADORDER,
  DOWNLOADORDERLINK,
  ORDERDETAILS,
  ORDERHISTORY,
  REFUNDORDER,
  TRACKORDER,
} from '../types';
import {orderServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const orderHistory = createAsyncThunk([ORDERHISTORY], async () => {
  const response = await orderServices.getOrderHistory();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const orderDetails = createAsyncThunk([ORDERDETAILS], async url => {
  const response = await orderServices.getOrderDetail(url);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const downloadOrder = createAsyncThunk([DOWNLOADORDER], async () => {
  const response = await orderServices.downloadOrder();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const downloadOrderLink = createAsyncThunk(
  [DOWNLOADORDERLINK],
  async data => {
    const response = await orderServices.downloadOrderLink(data);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const downloadOrderLicenseLink = createAsyncThunk(
  [DOWNLOADLICENSEORDER],
  async data => {
    const response = await orderServices.downloadLicenseOrderLink(data);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const refundOrder = createAsyncThunk([REFUNDORDER], async data => {
  const response = await orderServices.refundOrders(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const trackOrder = createAsyncThunk([TRACKORDER], async data => {
  const response = await orderServices.trackOrders(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
