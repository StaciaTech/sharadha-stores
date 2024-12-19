import { createSlice } from "@reduxjs/toolkit";
import {
  countryStateData,
  currencyData,
  settingsData,
  themeOptionData,
} from "../actions";

const initialState = {
  loading: false,
  country: [],
  state: [],
  settings: null,
  currency: [],
  currValue: "",
  currSymbol: "",
  themeOption: null,
};

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    updateState(state, action) {
      state.state = action.payload;
    },
    updateCurrency(state, action) {
      state.currValue = action.payload.value;
      state.currSymbol = action.payload.symbol;
    },
  },
  extraReducers: (builder) => {
    //CountryState Cases
    builder.addCase(countryStateData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(countryStateData.fulfilled, (state, action) => {
      state.country = action.payload;
      state.loading = false;
    });
    builder.addCase(countryStateData.rejected, (state, action) => {
      state.loading = false;
    });

    //Settings Cases
    builder.addCase(settingsData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(settingsData.fulfilled, (state, action) => {
      state.settings = action.payload.values;
      state.loading = false;
    });
    builder.addCase(settingsData.rejected, (state, action) => {
      state.loading = false;
    });

    //Currency Cases
    builder.addCase(currencyData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(currencyData.fulfilled, (state, action) => {
      state.currency = action.payload.data;
      state.loading = false;
    });
    builder.addCase(currencyData.rejected, (state, action) => {
      state.loading = false;
    });

    //Theme Option Cases
    builder.addCase(themeOptionData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(themeOptionData.fulfilled, (state, action) => {
      state.themeOption = action.payload.data;
      state.loading = false;
    });
    builder.addCase(themeOptionData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { updateState, updateCurrency } = otherSlice.actions;
export default otherSlice.reducer;
