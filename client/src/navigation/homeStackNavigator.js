import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OffersList, CategoryScreen, Home, CartList } from "../screens";

const AppStack = createStackNavigator();
export const HomeStackScreen = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="CategoryScreen" component={CategoryScreen} />
    <AppStack.Screen name="OffersList" component={OffersList} />
    <AppStack.Screen name="CartList" component={CartList} />
  </AppStack.Navigator>
);
