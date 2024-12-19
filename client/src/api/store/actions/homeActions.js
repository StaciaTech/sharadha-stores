import {
  HOMECATEGORYDATA,
  HOMECOUPONSDATA,
  HOMEDATA,
  HOMEOFFERSDATA,
  HOMESECTIONONEDATA,
  HOMESECTIONTHREEDATA,
  BLOGS,
  BRANDS,
  SELLERS,
} from '../types';
import {
  categoryServices,
  couponsServices,
  homeServices,
  productServices,
} from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  storeOffers,
  storeSectionOne,
  storeSectionThree,
} from '../reducers/homeReducer';

export const homeData = createAsyncThunk(HOMEDATA, async dispatch => {
  const response = await homeServices.homeScreenData();
  const res = response.data.values;
  const categoryParams = '?ids=' + res.categories_list.category_ids.join(',');
  const offersParams = '?ids=' + res.offer_products.product_ids.join(',');
  const sectionOneParams =
    '?ids=' + res.section_1_products.product_ids.join(',');
  const couponsParams = '?ids=' + res.coupons.coupon_ids.join(',');
  const sectionThreeParams =
    '?ids=' + res.section_3_products.product_ids.join(',');
  const brandsParams = '?ids=' + res.brands.brand_ids.join(',');
  const sellersParams = '?ids=' + res.seller.store_ids.join(',');
  const blogsParams = '?ids=' + res.blogs.blog_ids.join(',');
  dispatch(storeOffers(offersParams));
  dispatch(storeSectionOne(sectionOneParams));
  dispatch(storeSectionThree(sectionThreeParams));
  dispatch(homeCategoryData(categoryParams));
  dispatch(homeOffersData(offersParams));
  dispatch(homeSectionOneData(sectionOneParams));
  dispatch(homeCouponsData(couponsParams));
  dispatch(homeSectionThreeData(sectionThreeParams));
  dispatch(blogsData(blogsParams));
  dispatch(brandsData(brandsParams));
  dispatch(sellerData(sellersParams));
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const homeCategoryData = createAsyncThunk(
  HOMECATEGORYDATA,
  async params => {
    const response = await categoryServices.categoryData(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const homeOffersData = createAsyncThunk(HOMEOFFERSDATA, async params => {
  const response = await productServices.productsData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const homeSectionOneData = createAsyncThunk(
  HOMESECTIONONEDATA,
  async params => {
    const response = await productServices.productsData(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const homeCouponsData = createAsyncThunk(
  HOMECOUPONSDATA,
  async params => {
    const response = await couponsServices.couponsData(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const homeSectionThreeData = createAsyncThunk(
  HOMESECTIONTHREEDATA,
  async params => {
    const response = await productServices.productsData(params);
    if (response.status == 200) {
      return response?.data;
    } else {
      return 'Error';
    }
  },
);

export const blogsData = createAsyncThunk(BLOGS, async params => {
  const response = await homeServices.blogsData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const brandsData = createAsyncThunk(BRANDS, async params => {
  const response = await homeServices.brandsData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});

export const sellerData = createAsyncThunk(SELLERS, async params => {
  const response = await homeServices.sellersData(params);
  if (response.status == 200) {
    return response?.data;
  } else {
    return 'Error';
  }
});
