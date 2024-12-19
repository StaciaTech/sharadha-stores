import {
  ADDTOCART,
  ADDTOWISHLIST,
  EDITREVIEW,
  FILTERBRANDS,
  POSTQUESTION,
  PRODUCTS,
  PRODUCTSDETAILS,
  PRODUCTSFILTER,
  QUESTIONANSWERDATA,
  QUESTIONANSWERFEEDBACK,
  REVIEW,
} from '../types';
import {productServices} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {cartData} from './cartActions';

export const productsData = createAsyncThunk([PRODUCTS], async params => {
  const response = await productServices.productsData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const productsFilterData = createAsyncThunk(
  [PRODUCTSFILTER],
  async params => {
    const response = await productServices.productsFilterData(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const filterBrands = createAsyncThunk([FILTERBRANDS], async params => {
  const response = await productServices.filterBrandsData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const productDetails = createAsyncThunk(
  [PRODUCTSDETAILS],
  async params => {
    const response = await productServices.productDetails(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const addToCart = createAsyncThunk([ADDTOCART], async data => {
  const response = await productServices.addToCart(data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const addToWishlist = createAsyncThunk([ADDTOWISHLIST], async data => {
  const response = await productServices.addToWishList(data.data);
  if (response.status == 200) {
    data.dispatch(productDetails(data.id));
    return response?.data;
  } else {
    return 'Error';
  }
});

export const questionAnswerData = createAsyncThunk(
  [QUESTIONANSWERDATA],
  async url => {
    const response = await productServices.questionAnswerData(url);
    if (response.status === 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const questionAnswerFeedback = createAsyncThunk(
  [QUESTIONANSWERFEEDBACK],
  async data => {
    const response = await productServices.questionAnswerFeed(data.data);
    data.dispatch(questionAnswerData(data.productId));
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const reviewData = createAsyncThunk([REVIEW], async data => {
  const response = await productServices.reviewData(data);
  if (response.status == 201) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const editReviewData = createAsyncThunk([EDITREVIEW], async data => {
  const response = await productServices.editReview(data.id, data.data);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const postQuestion = createAsyncThunk([POSTQUESTION], async data => {
  const response = await productServices.postQuestion(data);
  if (response.status == 201) {
    return response?.data;
  } else {
    return 'Error';
  }
});
