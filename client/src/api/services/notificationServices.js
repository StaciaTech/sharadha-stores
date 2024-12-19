import { notifications, readNotification } from '../endpoints';
import { GET_API, PUT_API } from '../methods';

export const notificationData = async () => {
  return GET_API(notifications)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const readNotifications = async () => {
  return PUT_API(readNotification)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const notificationServices = {
  notificationData,
  readNotifications
};
export default notificationServices;
