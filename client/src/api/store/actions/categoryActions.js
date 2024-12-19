import {CATEGORY} from '../types';
import {categoryServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const categoryData = createAsyncThunk(
  [CATEGORY],
  async (data, params) => {
    const response = await categoryServices.categoryData(data, params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);
