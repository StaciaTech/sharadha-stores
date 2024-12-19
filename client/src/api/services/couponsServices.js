import {coupons} from '../endpoints';
import {GET_API} from '../methods';

export const couponsData = async params => {
  return GET_API(coupons + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const couponsServices = {
  couponsData,
};
export default couponsServices;
