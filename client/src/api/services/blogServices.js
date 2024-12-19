import {blog} from '../endpoints';
import {GET_API} from '../methods';

export const blogDetails = async params => {
  return GET_API(blog + '/' + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const blogServices = {
  blogDetails,
};
export default blogServices;
