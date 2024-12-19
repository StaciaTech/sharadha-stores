import {checkout, placeOrder, rePay} from '../endpoints';
import {POST_API} from '../methods';

export const checkoutDetails = async data => {
  return POST_API(checkout, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const placeOrders = async data => {
  return POST_API(placeOrder, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const rePayment = async data => {
  return POST_API(rePay, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};
const checkoutServices = {
  checkoutDetails,
  placeOrders,
  rePayment,
};
export default checkoutServices;
