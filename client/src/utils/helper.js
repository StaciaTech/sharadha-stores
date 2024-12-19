import moment from "moment";
import { getValue } from "./localStorage";

export const emailValidate =
  /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/;

export const formatDate = (timestamp, format) => {
  const val = format == "short" ? "DD MMM YYYY" : "DD MMM YYYY hh:mm:A";
  const formattedTime = moment(timestamp).format(val);
  return formattedTime;
};

export const formatTime = (timestamp) => {
  const val = "hh:mm A";
  const formattedTime = moment(timestamp).format(val);
  return formattedTime;
};

export const titleCase = (string) => {
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
};

export const removeData = (data, variationId, id) => {
  const updatedItems = data.filter((item) => {
    const val = item.variationId ? variationId : id;
    const variation = item.variationId || item.id;
    return variation !== val;
  });
  return updatedItems;
};

export const removeFromWishlist = async (value) => {
  const wishlistData = await getValue("wishlistData");
  var data = JSON.parse(wishlistData);
  const updatedItems = data.filter((item) => {
    return item.id !== value.id;
  });
  return updatedItems;
};

export const manageDetails = (selectedVariation, productDetail) => {
  const data = {
    name: selectedVariation?.name || productDetail.name,
    id: productDetail.id,
    thumbnail:
      selectedVariation?.variation_image?.original_url ||
      productDetail?.product_thumbnail?.original_url ||
      productDetail?.thumbnail,
    totalQuantity: selectedVariation?.quantity || productDetail.quantity,
    quantity: 1,
    price: selectedVariation?.price || productDetail.price,
    sale_price: selectedVariation?.sale_price || productDetail.sale_price,
    discount: selectedVariation?.discount || productDetail.discount,
    variationId: selectedVariation?.id || "",
    is_wishlist: productDetail?.is_wishlist,
  };
  return data;
};
