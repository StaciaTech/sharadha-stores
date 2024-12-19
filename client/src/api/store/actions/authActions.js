import {
  USER_LOGIN,
  USER_REGISRATION,
  FORGOTPASSWORD,
  VERIFYOTP,
  UPDATEPASSWORD,
  SELF,
  LOGOUT,
} from '../types';
import {authServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(USER_LOGIN, async data => {
  const response = await authServices.userLogin(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});

export const userRegistration = createAsyncThunk(
  USER_REGISRATION,
  async data => {
    const response = await authServices.userRegisration(data);
    if (response.status == 200) {
      return response?.data;
    } else {
      return response.data;
    }
  },
);

export const forgotPass = createAsyncThunk(FORGOTPASSWORD, async data => {
  const response = await authServices.forgetpassword(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});

export const verifyOtp = createAsyncThunk(VERIFYOTP, async data => {
  const response = await authServices.verifyotp(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});

export const updatePassword = createAsyncThunk(UPDATEPASSWORD, async data => {
  const response = await authServices.updatePassword(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});

export const self = createAsyncThunk(SELF, async () => {
  const response = await authServices.self();
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});

export const logoutUser = createAsyncThunk(LOGOUT, async () => {
  const response = await authServices.logoutUser();
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});
