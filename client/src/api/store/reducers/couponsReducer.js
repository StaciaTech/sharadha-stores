import {createSlice} from '@reduxjs/toolkit';
import {couponsData} from '../actions';

const initialState = {
  loading: false,
  coupons: [],
};

const couponsSlice = createSlice({
  name: 'coupons',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Coupons Cases
    builder.addCase(couponsData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(couponsData.fulfilled, (state, action) => {
      state.coupons = action.payload.data;
      state.loading = false;
    });
    builder.addCase(couponsData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default couponsSlice.reducer;
