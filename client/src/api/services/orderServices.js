import {
  orderDownload,
  orderDownloadLink,
  orderHistory,
  orderLicenseDownloadLink,
  refundOrder,
  trackOrder,
} from '../endpoints';
import {GET_API, POST_API} from '../methods';

export const getOrderHistory = async () => {
  return GET_API(orderHistory)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const getOrderDetail = async url => {
  return GET_API(orderHistory + url)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const downloadOrder = async url => {
  return GET_API(orderDownload)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const downloadOrderLink = async data => {
  return POST_API(orderDownloadLink, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const downloadLicenseOrderLink = async data => {
  return POST_API(orderLicenseDownloadLink, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const refundOrders = async data => {
  return POST_API(refundOrder, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const trackOrders = async data => {
  return POST_API(trackOrder, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const orderHistoryServices = {
  getOrderHistory,
  getOrderDetail,
  downloadOrder,
  downloadOrderLink,
  downloadLicenseOrderLink,
  refundOrders,
  trackOrders,
};
export default orderHistoryServices;
