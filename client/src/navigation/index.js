import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  Login,
  Registration,
  ProductsList,
  ProductsDetails,
  AddAddress,
  SelectAddress,
  SelectPayment,
  OrderTracking,
  OrderDetails,
  OrderHistory,
  OrderRefund,
  EditProfile,
  Notification,
  Wishlist,
  ForgotPassword,
  VerifyOtp,
  ResetPassword,
  ChangePassword,
  CartList,
  PageList,
  SubCategory,
  MyFinance,
  BankDetails,
  RefundHistory,
  SelectDelivery,
  SearchScreen,
  Payment,
  BlogDetails,
  OffersList,
  Downloads,
  WriteAReivew,
  Faq,
  Reviews,
  BlogList,
  ChangeCurrency,
} from "../screens";
import authAddressForm from "../screens/auth/address";
import Tab from "./tabStackNavigator";
import appColors from "../theme/appColors";
import { useValues } from "../utils/context";
import SellerList from "../screens/sellersList/index";
import ShopByCategory from "../screens/dashboard/home/shopByCategory";
import { Profile } from "../screens/account/pageList/profile";

const Stack = createStackNavigator();

const MyStack = () => {
  const { isDark } = useValues();

  const customDefaultTheme = {
    ...DefaultTheme,
    colors: {
      background: appColors.white,
      text: appColors.title,
      primary: appColors.drawer,
      card: appColors.white,
      border: appColors.line,
    },
  };

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      background: appColors.dark,
      text: appColors.white,
      primary: appColors.darkDrawer,
      card: appColors.dark,
      border: appColors.darkBorder,
    },
  };

  const theme = isDark ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Splash}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="AuthAddressForm" component={authAddressForm} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        <Stack.Screen name="Cart" component={CartList} />
        <Stack.Screen name="SelectAddress" component={SelectAddress} />
        <Stack.Screen name="SelectPayment" component={SelectPayment} />
        <Stack.Screen name="SelectDelivery" component={SelectDelivery} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="PageList" component={PageList} />
        <Stack.Screen name="SubCategory" component={SubCategory} />
        <Stack.Screen name="MyFinance" component={MyFinance} />
        <Stack.Screen name="BankDetails" component={BankDetails} />
        <Stack.Screen name="RefundHistory" component={RefundHistory} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
        <Stack.Screen name="OffersList" component={OffersList} />
        <Stack.Screen name="Downloads" component={Downloads} />
        <Stack.Screen name="WriteAReivew" component={WriteAReivew} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="BlogList" component={BlogList} />
        <Stack.Screen name="ChangeCurrency" component={ChangeCurrency} />
        <Stack.Screen name="OrderRefund" component={OrderRefund} />
        <Stack.Screen name="SellerList" component={SellerList} />
        {/* <Stack.Screen name="ShopByCategory" component={ShopByCategory} />/ */}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
