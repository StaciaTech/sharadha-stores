import {COUPONS} from '../types';
import {couponsServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const couponsData = createAsyncThunk([COUPONS], async (data, params) => {
  const response = await couponsServices.couponsData(data, params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
