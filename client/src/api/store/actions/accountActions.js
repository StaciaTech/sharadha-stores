import {
  ADDPAYMENTACC,
  GETPAYMENTACC,
  MYPOINTS,
  MYWALLET,
  REFUNDHISTORY,
  SELF,
  UPDATEPROFILE,
} from '../types';
import {accountServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const selfData = createAsyncThunk(SELF, async () => {
  const response = await accountServices.selfData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const updateProfile = createAsyncThunk(UPDATEPROFILE, async data => {
  const response = await accountServices.updateProfile(data.data);
  if (response.status == 200) {
    data.dispatch(selfData());
    return response?.data;
  } else {
    return 'Error';
  }
});

export const myWallet = createAsyncThunk(MYWALLET, async () => {
  const response = await accountServices.getWallet();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const myPoints = createAsyncThunk(MYPOINTS, async () => {
  const response = await accountServices.getPoints();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const refundHistory = createAsyncThunk(REFUNDHISTORY, async () => {
  const response = await accountServices.getRefundHistory();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const addPaymentAccount = createAsyncThunk(ADDPAYMENTACC, async data => {
  const response = await accountServices.addPaymentAccount(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const getPaymentAccount = createAsyncThunk(GETPAYMENTACC, async () => {
  const response = await accountServices.getPaymentAccount();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
