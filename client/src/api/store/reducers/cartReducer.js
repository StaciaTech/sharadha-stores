import { createSlice } from "@reduxjs/toolkit";
import {
  cartData,
  clearCartData,
  removeCartData,
  updateCartData,
} from "../actions";
import { manageDetails } from "../../../utils/helper";
import { setValue } from "../../../utils/localStorage";

const initialState = {
  loading: false,
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartValue(state, action) {
      state.cartList = action.payload;
    },
    updateLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Cart Cases
    // builder.addCase(cartData.pending, (state, action) => {});
    // builder.addCase(cartData.fulfilled, (state, action) => {
    //   const data = action.payload.items.map((val) => {
    //     return manageDetails({}, val.product);
    //   });

    //   cartSlice.caseReducers.updateCartValue(state, { payload: data });
    //   setValue("cartData", JSON.stringify(data));
    // });
    // builder.addCase(cartData.rejected, (state, action) => {});

    //UpdateCart Cases
    // builder.addCase(updateCartData.pending, (state, action) => {});
    // builder.addCase(updateCartData.fulfilled, (state, action) => {});
    // builder.addCase(updateCartData.rejected, (state, action) => {});

    //RemoveCartData Cases
    // builder.addCase(removeCartData.pending, (state, action) => {});
    // builder.addCase(removeCartData.fulfilled, (state, action) => {});
    // builder.addCase(removeCartData.rejected, (state, action) => {});

    //ClearCartData Cases
    builder.addCase(clearCartData.pending, (state, action) => {});
    builder.addCase(clearCartData.fulfilled, (state, action) => {});
    builder.addCase(clearCartData.rejected, (state, action) => {});

    //add cart
    builder;
  },
});

export const { updateCartValue, updateLoading } = cartSlice.actions;
export default cartSlice.reducer;
