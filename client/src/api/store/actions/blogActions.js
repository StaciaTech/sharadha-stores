import {BLOGDETAILS} from '../types';
import {blogServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const blogDetails = createAsyncThunk(BLOGDETAILS, async data => {
  const response = await blogServices.blogDetails(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return response.data;
  }
});
