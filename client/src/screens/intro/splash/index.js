import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import Images from "@utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "@utils/context";
import { getValue } from "@utils/localStorage";
import { useDispatch } from "react-redux";
import {
  selfData,
  settingsData,
  currencyData,
  productsData,
} from "@api/store/actions";
import styles from "./styles";
import {
  updateOriginal,
  updateRecent,
} from "@api/store/reducers/searchReducer";
import { GlobalStyle } from "@style";
import { updateCartValue } from "@api/store/reducers/cartReducer";
import { updateWishlist } from "@api/store/reducers/wishlistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Splash(props) {
  useEffect(() => {
    getValues();
  }, []);
  const { isDark } = useValues();
  const dispatch = useDispatch();

  const [loginToken, setLoginToken] = useState();

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("LoginToken");
      if (value !== null) {
        setLoginToken(value);
      }
      PageNavigationOnLoad(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const getValues = async () => {
    dispatch(settingsData());
    dispatch(currencyData());
    getProducts();
    var token = "";
    var isGuest;
    await getValue("token").then(function (value) {
      token = value;
    });
    await getValue("isGuest").then(function (value) {
      isGuest = value;
    });
    await getValue("recentData").then(function (value) {
      const recent = JSON.parse(value);
      dispatch(updateRecent(recent));
    });
    await getValue("cartData").then(function (value) {
      const cartData = JSON.parse(value);
      dispatch(updateCartValue(cartData));
    });
    await getValue("wishlistData").then(function (value) {
      const wishlistData = JSON.parse(value);
      dispatch(updateWishlist(wishlistData));
    });

    if (token) {
      dispatch(selfData());
      // dispatch(cartData());
    }
  };
  const PageNavigationOnLoad = (value) => {
    setTimeout(() => {
      if (value) {
        props.navigation.replace("Tab");
      } else if (!value) {
        props.navigation.replace("Login");
      }
    }, 3000);
  };

  const getProducts = async () => {
    const slug = "?trending=0";
    const res = await dispatch(productsData(slug));
    if (res.payload != "Error") {
      dispatch(updateOriginal(res.payload.data));
    }
  };

  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.mainView, { backgroundColor: colors.background }]}
    >
      <Image source={Images.splash} style={GlobalStyle.mainView} />
      <View style={styles.logo}>
        <Image
          source={isDark ? Images.fastKartDark : Images.splashLogo}
          style={styles.img}
        />
      </View>
    </SafeAreaView>
  );
}
