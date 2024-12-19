import {createSlice} from '@reduxjs/toolkit';
import {
  selfData,
  updatePassword,
  updateProfile,
  myWallet,
  myPoints,
  refundHistory,
  addPaymentAccount,
  getPaymentAccount,
} from '../actions';

const initialState = {
  loading: false,
  self: null,
  wallet: null,
  points: null,
  defaultAddress: null,
  refund: [],
  accountDetails: null,
  val: 'wallet',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateDefaultAdd(state, action) {
      state.defaultAddress = action.payload;
    },
    financialState(state, action) {
      state.val = action.payload;
    },
    updateLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    //Self Cases
    builder.addCase(selfData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(selfData.fulfilled, (state, action) => {
      state.self = action.payload;
      action?.payload?.address.map(item => {
        if (item.is_default == 1) state.defaultAddress = item;
      });
      state.loading = false;
    });
    builder.addCase(selfData.rejected, (state, action) => {
      state.loading = false;
    });

    //UpdateProfile Cases
    builder.addCase(updateProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {});
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
    });

    //UpdatePassword Cases
    builder.addCase(updatePassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
    });

    //MyWallet Cases
    builder.addCase(myWallet.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(myWallet.fulfilled, (state, action) => {
      state.wallet = action.payload;
      state.loading = false;
    });
    builder.addCase(myWallet.rejected, (state, action) => {
      state.loading = false;
    });

    //MyPoints Cases
    builder.addCase(myPoints.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(myPoints.fulfilled, (state, action) => {
      state.points = action.payload;
      state.loading = false;
    });
    builder.addCase(myPoints.rejected, (state, action) => {
      state.loading = false;
    });

    //RefundHistory Cases
    builder.addCase(refundHistory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(refundHistory.fulfilled, (state, action) => {
      state.refund = action.payload.data;
      state.loading = false;
    });
    builder.addCase(refundHistory.rejected, (state, action) => {
      state.loading = false;
    });

    //Add Payment Cases
    builder.addCase(addPaymentAccount.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addPaymentAccount.fulfilled, (state, action) => {
      state.refund = action.payload.data;
      state.loading = false;
    });
    builder.addCase(addPaymentAccount.rejected, (state, action) => {
      state.loading = false;
    });

    //Get Payment Cases
    builder.addCase(getPaymentAccount.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPaymentAccount.fulfilled, (state, action) => {
      state.accountDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(getPaymentAccount.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {updateDefaultAdd, financialState, updateLoading} =
  accountSlice.actions;
export default accountSlice.reducer;
