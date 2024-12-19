import {searchProduct, searchedProducts} from '../endpoints';
import {GET_API} from '../methods';

export const searchData = async val => {
  return GET_API(searchProduct + val)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const searchedProduct = async val => {
  return GET_API(searchedProducts)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const serachServices = {
  searchData,
  searchedProduct,
};
export default serachServices;
