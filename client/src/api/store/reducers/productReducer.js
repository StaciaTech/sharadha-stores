import {createSlice, original} from '@reduxjs/toolkit';
import {
  addToCart,
  addToWishlist,
  productDetails,
  productsData,
  productsFilterData,
  questionAnswerData,
  questionAnswerFeedback,
  filterBrands,
  reviewData,
  editReviewData,
  postQuestion,
} from '../actions';

const initialState = {
  loading: false,
  questionLoading: false,
  originalProductList: [],
  products: [],
  productsFilter: [],
  questionAnswersData: [],
  brands: [],
  productDetail: {},
  cart: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    emptyProduct(state, action) {
      state.productDetail = {};
    },
    emptyProducts(state, action) {
      state.products = [];
    },
  },
  extraReducers: builder => {
    //ProductData Cases
    builder.addCase(productsData.pending, (state, action) => {
      state.products = [];
      state.loading = true;
    });
    builder.addCase(productsData.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.originalProductList = action.payload.data;
      state.loading = false;
    });
    builder.addCase(productsData.rejected, (state, action) => {
      state.loading = false;
    });

    //ProductFilter Cases
    builder.addCase(productsFilterData.pending, (state, action) => {});
    builder.addCase(productsFilterData.fulfilled, (state, action) => {
      state.productsFilter = action.payload.data;
    });
    builder.addCase(productsFilterData.rejected, (state, action) => {});

    //ProductFilter Cases
    builder.addCase(filterBrands.pending, (state, action) => {});
    builder.addCase(filterBrands.fulfilled, (state, action) => {
      state.brands = action.payload.data;
    });
    builder.addCase(filterBrands.rejected, (state, action) => {});

    //ProductFilter Cases
    builder.addCase(productDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productDetails.fulfilled, (state, action) => {
      state.productDetail = action.payload;
      state.loading = false;
    });
    builder.addCase(productDetails.rejected, (state, action) => {
      state.loading = false;
    });

    //AddToCart Cases
    builder.addCase(addToCart.pending, (state, action) => {});
    builder.addCase(addToCart.fulfilled, (state, action) => {});
    builder.addCase(addToCart.rejected, (state, action) => {});

    //AddToWishlist Cases
    builder.addCase(addToWishlist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {});
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.loading = false;
    });

    //Question Answer Cases
    builder.addCase(questionAnswerData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(questionAnswerData.fulfilled, (state, action) => {
      state.questionAnswersData = action.payload.data;
      state.loading = false;
    });
    builder.addCase(questionAnswerData.rejected, (state, action) => {
      state.loading = false;
    });

    //Question Answer Feedback Cases
    builder.addCase(questionAnswerFeedback.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(questionAnswerFeedback.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(questionAnswerFeedback.rejected, (state, action) => {
      state.loading = false;
    });

    //Review Cases
    builder.addCase(reviewData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(reviewData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(reviewData.rejected, (state, action) => {
      state.loading = false;
    });

    //Edit Review Cases
    builder.addCase(editReviewData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editReviewData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editReviewData.rejected, (state, action) => {
      state.loading = false;
    });

    //Edit Review Cases
    builder.addCase(postQuestion.pending, (state, action) => {
      state.questionLoading = true;
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.questionLoading = false;
    });
    builder.addCase(postQuestion.rejected, (state, action) => {
      state.questionLoading = false;
    });
  },
});

export const {emptyProduct, emptyProducts} = productSlice.actions;
export default productSlice.reducer;
