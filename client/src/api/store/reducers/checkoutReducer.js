import {createSlice} from '@reduxjs/toolkit';
import {checkoutDetails, placeOrder, rePayment} from '../actions';

const initialState = {
  loading: false,
  placeOrderData: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    //Category Cases
    builder.addCase(checkoutDetails.pending, (state, action) => {});
    builder.addCase(checkoutDetails.fulfilled, (state, action) => {});
    builder.addCase(checkoutDetails.rejected, (state, action) => {});

    //PlaceOrder Cases
    builder.addCase(placeOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.loading = false;
    });

    //PlaceOrder Cases
    builder.addCase(rePayment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(rePayment.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(rePayment.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {updateLoading} = checkoutSlice.actions;
export default checkoutSlice.reducer;
