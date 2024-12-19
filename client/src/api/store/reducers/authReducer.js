import {createSlice} from '@reduxjs/toolkit';
import {
  userLogin,
  userRegistration,
  forgotPass,
  verifyOtp,
  updatePassword,
  self,
  logoutUser,
} from '../actions';

const initialState = {
  user: {},
  token: '',
  loading: false,
  success: false,
  fcmToken: '',
  email: '',
  isLogout: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateLoading(state, action) {
      state.loading = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
  extraReducers: builder => {
    //Login Cases
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
    });

    //Register Cases
    builder.addCase(userRegistration.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.loading = false;
    });

    //Forgotpassword Cases
    builder.addCase(forgotPass.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(forgotPass.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(forgotPass.rejected, (state, action) => {
      state.loading = false;
    });

    //VerifyOtp Cases
    builder.addCase(verifyOtp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
    });

    //Updatepassword Cases
    builder.addCase(updatePassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
    });

    //UserSelf Cases
    builder.addCase(self.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(self.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(self.rejected, (state, action) => {
      state.loading = false;
    });

    //Notification Cases
    builder.addCase(logoutUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLogout = action.payload.success;
      state.loading = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      // state.refund = action.payload.data;
      state.loading = false;
    });
  },
});
export const {updateLoading, updateEmail} = authSlice.actions;
export default authSlice.reducer;
