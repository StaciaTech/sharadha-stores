import {NOTIFICATION, READNOTIFICATION} from '../types';
import {notificationServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const notificationData = createAsyncThunk([NOTIFICATION], async () => {
  const response = await notificationServices.notificationData();
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const readNotification = createAsyncThunk(
  [READNOTIFICATION],
  async dispatch => {
    const response = await notificationServices.readNotifications();
    if (response.status == 200) {
      dispatch(notificationData());
      return response?.data;
    } else {
      return 'Error';
    }
  },
);
