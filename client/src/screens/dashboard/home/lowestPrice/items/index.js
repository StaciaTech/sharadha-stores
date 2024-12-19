import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import { Increase, Decrease } from "@utils/icons";
import { useValues } from "@utils/context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ManageWishlist } from "@otherComponents";
import styles from "./styles";
import { getValue, setValue } from "@utils/localStorage";
import { addToCart } from "@api/store/actions";
import { updateCartValue } from "@api/store/reducers/cartReducer";
import OfferData from "./component/offerData";
import images from "@utils/images";

const lowestPrice = ({ addResponse, removeResponse, item, showOffer }) => {
  const { viewRTLStyle, viewSelfRTLStyle } = useValues();
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { colors } = useTheme();
  const { cartList } = useSelector((state) => state.cart);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    checkValue();
  }, [cartList]);

  const checkValue = () => {
    const id = item.id;
    if (cartList?.length > 0) {
      const matchedItem = cartList.find((val) => val.id === id);
      if (matchedItem) {
        setShow(true);
        setQuantity(matchedItem.quantity);
      } else {
        setShow(false);
      }
    } else {
      setShow(false);
    }
  };

  const addDataToCart = async (item, newQuantity, valueType) => {
    try {
      // Dispatch an action to update the backend
      await updateCartInBackend(item.id, valueType);

      // Get current cart data from local storage
      const cartData = await getValue("cartData");
      const parsedCart = cartData ? JSON.parse(cartData) : [];

      // Find if the item already exists in the cart
      const itemIndex = parsedCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart;

      if (itemIndex !== -1) {
        // If item exists in the cart
        if (newQuantity === 0 && valueType !== "increase") {
          // Remove item if quantity is 0
          updatedCart = removeItemFromCart(parsedCart, item.id);
        } else {
          // Update quantity of existing item
          updatedCart = updateItemQuantity(parsedCart, itemIndex, newQuantity);
        }
      } else {
        // Add new item to the cart
        updatedCart = addItemToCart(parsedCart, item, newQuantity);
      }

      // Save the updated cart to Redux and local storage
      storeCart(updatedCart);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const updateCartInBackend = async (id, valueType) => {
    const payload = {
      product_id: id,
      variationId: "",
      quantity: valueType === "increase" ? 1 : -1,
    };
    await dispatch(addToCart(payload));
  };

  const removeItemFromCart = (cart, itemId) => {
    return cart.filter((cartItem) => cartItem.id !== itemId);
  };

  const updateItemQuantity = (cart, itemIndex, quantity) => {
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity = quantity;
    return updatedCart;
  };

  const addItemToCart = (cart, item, quantity) => {
    const newItem = { ...item, quantity };
    return [...cart, newItem];
  };

  const storeCart = (cart) => {
    dispatch(updateCartValue(cart));
    setValue("cartData", JSON.stringify(cart));
  };

  return (
    <View
      style={[
        styles.lowestPriceView,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate("ProductsDetails", {
         item: item
        })}
      >
        <OfferData item={item} showOffer={showOffer} />
      </TouchableOpacity>
      <View style={[styles.priceView, { flexDirection: viewRTLStyle }]}>
        <Text style={[styles.price, { color: colors.text }]}>
          ₹ {item.price.toFixed(2)}
        </Text>
      </View>
      <View style={[styles.increase, { marginBottom: windowHeight(10) }]}>
        {!show ? (
          <TouchableOpacity
            style={styles.increase}
            onPress={() => {
              addDataToCart(item, 1, "increase");
              setShow(true);
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View style={[styles.counter, { flexDirection: viewRTLStyle }]}>
            <TouchableOpacity
              onPress={() => {
                addDataToCart(item, quantity - 1, "decrease");
                if (quantity === 1) setShow(false);
                else setQuantity(quantity - 1);
              }}
            >
              <Decrease
                width={windowWidth(18)}
                height={windowHeight(18)}
                color={appColors.white}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                if (quantity < item.quantity) {
                  addDataToCart(item, quantity + 1, "increase");
                  setQuantity(quantity + 1);
                }
              }}
              activeOpacity={quantity < item.quantity ? 0.7 : 1}
              style={{ opacity: quantity < item.quantity ? 1 : 0.5 }}
            >
              <Increase
                width={windowWidth(18)}
                height={windowHeight(18)}
                color={appColors.white}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ManageWishlist
        style={[styles.wishList, { alignSelf: viewSelfRTLStyle }]}
        isWishlist={item.is_wishlist}
        addResponse={addResponse}
        item={item}
        removeResponse={removeResponse}
      />
    </View>
  );
};

export default lowestPrice;
