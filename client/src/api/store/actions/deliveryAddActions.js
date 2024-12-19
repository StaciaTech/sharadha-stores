import {
  ADDRESSES,
  CREATEADDRESSES,
  DELETEADDRESSES,
  UPDATEADDRESSES,
} from '../types';
import {deliveryAddServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const addressData = createAsyncThunk([ADDRESSES], async () => {
  const response = await deliveryAddServices.addressData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const createAdd = createAsyncThunk([CREATEADDRESSES], async data => {
  const response = await deliveryAddServices.createAdd(data);
  if (response.status == 201) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const deleteAdd = createAsyncThunk([DELETEADDRESSES], async data => {
  const response = await deliveryAddServices.deleteAdd(data.id);
  if (response.status == 200) {
    data.dispatch(addressData());
    return response?.data;
  } else {
    return 'Error';
  }
});

export const updateAdd = createAsyncThunk([UPDATEADDRESSES], async data => {
  const response = await deliveryAddServices.updateAdd(data.id, data.data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
