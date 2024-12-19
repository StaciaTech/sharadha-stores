import {
  forgotPass,
  login,
  logout,
  register,
  updatePass,
  userSelf,
  verifyOtp,
} from '../endpoints';
import {GET_API, POST_API} from '../methods';

export const userLogin = async data => {
  return POST_API(login, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const userRegisration = async data => {
  return POST_API(register, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const forgetpassword = async data => {
  return POST_API(forgotPass, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const verifyotp = async data => {
  return POST_API(verifyOtp, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const updatePassword = async data => {
  return POST_API(updatePass, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const self = async () => {
  return GET_API(userSelf)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const logoutUser = async () => {
  return POST_API(logout)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const authServices = {
  userLogin,
  userRegisration,
  forgetpassword,
  verifyotp,
  updatePassword,
  self,
  logoutUser,
};
export default authServices;
