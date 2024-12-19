import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { WishList, FilledWishlist } from "@utils/icons";
import { addToWishlist, removeWishlistData } from "@api/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useValues } from "@utils/context";
import { getValue, setValue } from "@utils/localStorage";
import { updateWishlist } from "@api/store/reducers/wishlistReducer";
import { removeFromWishlist } from "@utils/helper";
import {
  homeOffersData,
  homeSectionOneData,
  homeSectionThreeData,
} from "@api/store/actions";
import { updateCartValue } from "@api/store/reducers/cartReducer";

export function ManageWishlist({
  style,
  isWishlist,
  addResponse,
  removeResponse,
  item,
}) {
  const [wishlist, setWishlist] = useState(isWishlist);
  const { token } = useValues();
  const dispatch = useDispatch();
  const { offersParams, sectionOneParams, sectionThreeParams } = useSelector(
    (state) => state.home
  );
  const { cartList } = useSelector((state) => state.cart);
  useEffect(() => {
    setWishlist(isWishlist);
  }, [isWishlist]);

  const checkValue = () => {
    if (wishlist) {
      removeDataFromWishlist();
    } else {
      addDataToWishlist();
    }
  };

  const addWishList = async () => {
    const data = {
      product_id: item.id,
    };
    const val = {
      data,
      dispatch,
      id: item.id,
    };
    const res = await dispatch(addToWishlist(val));
    addResponse(res);
  };

  const removeWishlist = async () => {
    var url = "/" + item.id;
    const res = await dispatch(removeWishlistData(url));
    removeResponse(res);
  };

  const addDataToWishlist = async () => {
    setWishlist(true);
    const wishlistData = await getValue("wishlistData");
    if (wishlistData) {
      var list = JSON.parse(wishlistData);
      const details = manageDetails();
      list = [...list, details];
      storeWishlist(list);
    } else {
      const data = manageDetails();
      storeWishlist([data]);
    }
    addWishList();
  };

  const removeDataFromWishlist = async () => {
    setWishlist(false);
    removeWishlist();
    const updatedItems = await removeFromWishlist(item);
    storeWishlist(updatedItems);
  };

  const storeWishlist = (data) => {
    dispatch(updateWishlist(data));
    updateInCart();
    setValue("wishlistData", JSON.stringify(data));
    dispatch(homeOffersData(offersParams));
    dispatch(homeSectionOneData(sectionOneParams));
    dispatch(homeSectionThreeData(sectionThreeParams));
  };

  const updateInCart = async () => {
    const data = cartList?.map((product) => {
      if (product.id === item.id) {
        return { ...product, is_wishlist: !wishlist };
      }
      return product;
    });
    setValue("cartData", JSON.stringify(data));
    dispatch(updateCartValue(data));
  };

  const manageDetails = () => {
    const data = {
      id: item.id,
      name: item.name,
      thumbnail: item?.product_thumbnail?.original_url || item?.thumbnail,
      totalQuantity: item.quantity,
      quantity: item.quantity,
      price: item.price,
      sale_price: item.sale_price,
      discount: item.discount,
      variationId: "",
      weight: item?.weight,
    };
    return data;
  };

  return (
    token && (
      <TouchableOpacity style={style} onPress={checkValue}>
        {wishlist ? <FilledWishlist /> : <WishList />}
      </TouchableOpacity>
    )
  );
}
