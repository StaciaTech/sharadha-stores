import {createSlice} from '@reduxjs/toolkit';
import {
  orderDetails,
  orderHistory,
  downloadOrder,
  downloadOrderLink,
  downloadOrderLicenseLink,
  refundOrder,
  trackOrder,
} from '../actions';

const initialState = {
  loading: false,
  orderHistoryList: [],
  downloadOrders: [],
  orderDetail: null,
};

const orderHistorySlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateDetails(state, action) {
      state.orderDetail = action.payload;
    },
  },
  extraReducers: builder => {
    //OrderHistory Cases
    builder.addCase(orderHistory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(orderHistory.fulfilled, (state, action) => {
      state.orderHistoryList = action.payload.data;
      state.loading = false;
    });
    builder.addCase(orderHistory.rejected, (state, action) => {
      state.loading = false;
    });

    //OrderDetail Cases
    builder.addCase(orderDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(orderDetails.fulfilled, (state, action) => {
      state.orderDetail = action.payload;
      state.loading = false;
    });
    builder.addCase(orderDetails.rejected, (state, action) => {
      state.loading = false;
    });

    //DownloadOrder Cases
    builder.addCase(downloadOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(downloadOrder.fulfilled, (state, action) => {
      state.downloadOrders = action.payload.data;
      state.loading = false;
    });
    builder.addCase(downloadOrder.rejected, (state, action) => {
      state.loading = false;
    });

    //DownloadOrderLink Cases
    builder.addCase(downloadOrderLink.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(downloadOrderLink.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(downloadOrderLink.rejected, (state, action) => {
      state.loading = false;
    });

    //DownloadLicenseOrderLink Cases
    builder.addCase(downloadOrderLicenseLink.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(downloadOrderLicenseLink.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(downloadOrderLicenseLink.rejected, (state, action) => {
      state.loading = false;
    });

    //RefundOrder Cases
    builder.addCase(refundOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(refundOrder.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(refundOrder.rejected, (state, action) => {
      state.loading = false;
    });

    //TrackOrder Cases
    builder.addCase(trackOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(trackOrder.fulfilled, (state, action) => {
      state.orderDetail = action.payload;
      state.loading = false;
    });
    builder.addCase(trackOrder.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {updateDetails} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
