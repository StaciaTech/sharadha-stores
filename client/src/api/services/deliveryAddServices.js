import { getAddresses, updateAddresses } from '../endpoints';
import { DELETE_API, GET_API, POST_API, PUT_API } from '../methods';

export const addressData = async () => {
  return GET_API(getAddresses)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const createAdd = async data => {
  return POST_API(getAddresses, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const deleteAdd = async params => {
  return DELETE_API(getAddresses + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const updateAdd = async (params, data) => {
  return PUT_API(updateAddresses + params, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const delievryAddServices = {
  addressData,
  deleteAdd,
  createAdd,
  updateAdd,
};
export default delievryAddServices;
