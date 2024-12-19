import {createSlice} from '@reduxjs/toolkit';
import {blogDetails} from '../actions';

const initialState = {
  details: {},
  loading: false,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Blogdetails Cases
    builder.addCase(blogDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(blogDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
    });
    builder.addCase(blogDetails.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export default blogSlice.reducer;
