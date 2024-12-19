import {wishList} from '../endpoints';
import {DELETE_API, GET_API} from '../methods';

export const wishlistData = async () => {
  return GET_API(wishList)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const removeWishlistData = async params => {
  return DELETE_API(wishList + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const wishlistServices = {
  wishlistData,
  removeWishlistData,
};
export default wishlistServices;
