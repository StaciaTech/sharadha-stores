import {createSlice} from '@reduxjs/toolkit';
import {notificationData, readNotification} from '../actions';

const initialState = {
  loading: false,
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Notification Cases
    builder.addCase(notificationData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(notificationData.fulfilled, (state, action) => {
      state.notifications = action.payload.data;
      state.loading = false;
    });
    builder.addCase(notificationData.rejected, (state, action) => {
      state.loading = false;
    });

    //Read Notification Cases
    builder.addCase(readNotification.pending, (state, action) => {});
    builder.addCase(readNotification.fulfilled, (state, action) => {});
    builder.addCase(readNotification.rejected, (state, action) => {});
  },
});

export default notificationSlice.reducer;
