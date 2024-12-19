import {categories} from '../endpoints';
import {GET_API} from '../methods';

export const categoryData = async params => {
  const param = params ? params : '';
  return GET_API(categories + param)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const categoryServices = {
  categoryData,
};
export default categoryServices;
