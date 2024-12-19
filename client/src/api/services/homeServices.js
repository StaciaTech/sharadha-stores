import { blog, brands, homeData, seller } from '../endpoints';
import { GET_API } from '../methods';

export const homeScreenData = async () => {
  return GET_API(homeData)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const blogsData = async params => {
  return GET_API(blog + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const brandsData = async params => {
  return GET_API(brands + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const sellersData = async params => {
  return GET_API(seller + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const authServices = {
  homeScreenData,
  blogsData,
  brandsData,
  sellersData,
};
export default authServices;
