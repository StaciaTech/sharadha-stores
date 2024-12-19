import {COUNTRYSTATE, CURRENCY, SETTINGS, THEMEOPTIONDATA} from '../types';
import {otherServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const countryStateData = createAsyncThunk([COUNTRYSTATE], async () => {
  const response = await otherServices.countryStateData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const settingsData = createAsyncThunk([SETTINGS], async () => {
  const response = await otherServices.settingsData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const currencyData = createAsyncThunk([CURRENCY], async () => {
  const response = await otherServices.currencyData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const themeOptionData = createAsyncThunk([THEMEOPTIONDATA], async () => {
  const response = await otherServices.themeOptionData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
