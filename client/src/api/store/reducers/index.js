import authReducer from './authReducer';
import homeReducer from './homeReducer';
import couponsReducer from './couponsReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import notificationReducer from './notificationReducer';
import cartReducer from './cartReducer';
import accountReducer from './accountReducer';
import wishlistReducer from './wishlistReducer';
import deliveryAddReducer from './deliveryAddReducer';
import otherReducer from './otherReducer';
import orderReducer from './orderReducer';
import checkoutReducer from './checkoutReducer';
import searchReducer from './searchReducer';
import blogReducer from './blogReducer';
import {combineReducers, createAction} from '@reduxjs/toolkit';

export const resetState = createAction('RESET_STATE');

const appReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  coupons: couponsReducer,
  product: productReducer,
  category: categoryReducer,
  notification: notificationReducer,
  cart: cartReducer,
  account: accountReducer,
  wishlist: wishlistReducer,
  delivery: deliveryAddReducer,
  other: otherReducer,
  order: orderReducer,
  checkout: checkoutReducer,
  search: searchReducer,
  blog: blogReducer,
});

const rootReducer = (state, action) => {
  if (action.type === resetState.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
