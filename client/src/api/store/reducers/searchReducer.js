import {createSlice} from '@reduxjs/toolkit';
import {searchData, searchedProduct} from '../actions';

const initialState = {
  loading: false,
  searchList: [],
  searchedProduct: [],
  recentSearch: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateOriginal(state, action) {
      state.searchList = action.payload;
    },
    updateRecent(state, action) {
      state.recentSearch = action.payload;
    },
  },
  extraReducers: builder => {
    //serachCategory Cases
    builder.addCase(searchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(searchData.rejected, (state, action) => {
      state.loading = false;
    });

    //serachedProduct Cases
    builder.addCase(searchedProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchedProduct.fulfilled, (state, action) => {
      state.searchedProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(searchedProduct.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {updateOriginal, updateRecent} = searchSlice.actions;
export default searchSlice.reducer;
