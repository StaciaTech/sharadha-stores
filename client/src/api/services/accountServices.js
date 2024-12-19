import {
  changePassword,
  editProfile,
  myWallet,
  myPoints,
  self,
  refund,
  paymentAccount,
} from '../endpoints';
import {GET_API, POST_API, PUT_API} from '../methods';

export const selfData = async () => {
  return GET_API(self)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const updateProfile = async data => {
  return PUT_API(editProfile, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const updatePassword = async data => {
  return PUT_API(changePassword, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const getWallet = async () => {
  return GET_API(myWallet)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const getPoints = async () => {
  return GET_API(myPoints)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const getRefundHistory = async () => {
  return GET_API(refund)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const addPaymentAccount = async data => {
  return POST_API(paymentAccount, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const getPaymentAccount = async () => {
  return GET_API(paymentAccount)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const accountServices = {
  selfData,
  updateProfile,
  updatePassword,
  getWallet,
  getPoints,
  getRefundHistory,
  addPaymentAccount,
  getPaymentAccount,
};
export default accountServices;
