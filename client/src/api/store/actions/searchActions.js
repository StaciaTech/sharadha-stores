import {SEARCH, SEARCHEDPRODUCT} from '../types';
import {searchServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const searchData = createAsyncThunk([SEARCH], async val => {
  const response = await searchServices.searchData(val);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const searchedProduct = createAsyncThunk(
  [SEARCHEDPRODUCT],
  async val => {
    const response = await searchServices.searchedProduct(val);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);
