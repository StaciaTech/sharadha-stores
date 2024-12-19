import {
  products,
  productsFilter,
  productDetail,
  addtoCart,
  addtoWishList,
  questionAnswer,
  questionAnswerFeedback,
  brands,
  review,
  addQuestion,
} from '../endpoints';
import {GET_API, POST_API, PUT_API} from '../methods';

export const productsData = async params => {
  return GET_API(products + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const productsFilterData = async () => {
  return GET_API(productsFilter)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const filterBrandsData = async () => {
  return GET_API(brands)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const productDetails = async params => {
  return GET_API(productDetail + params)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const addToCart = async data => {
  return POST_API(addtoCart, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const addToWishList = async data => {
  return POST_API(addtoWishList, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const questionAnswerData = async url => {
  return GET_API(questionAnswer + url)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const questionAnswerFeed = async data => {
  return POST_API(questionAnswerFeedback, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const reviewData = async data => {
  return POST_API(review, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const editReview = async (url, data) => {
  return PUT_API(review + url, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const postQuestion = async data => {
  return POST_API(addQuestion, data)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const productsServices = {
  productsData,
  productsFilterData,
  productDetails,
  addToCart,
  addToWishList,
  questionAnswerData,
  questionAnswerFeed,
  filterBrandsData,
  reviewData,
  editReview,
  postQuestion,
};
export default productsServices;
