import {cartList, clearCart} from '../endpoints';
import {DELETE_API, GET_API, PUT_API} from '../methods';

export const cartData = async () => {
  return GET_API(cartList)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const updateCartData = async data => {
  return PUT_API(cartList, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const removeCartData = async url => {
  return DELETE_API(cartList + url)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const clearCartData = async url => {
  return DELETE_API(clearCart)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const cartServices = {
  cartData,
  updateCartData,
  removeCartData,
  clearCartData,
};
export default cartServices;
