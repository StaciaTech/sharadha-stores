import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OffersList, CategoryScreen, Home, CartList, PageList, EditProfile } from "../screens";
import { Profile } from "../screens/account/pageList/profile";
import { Address } from "../otherComponents";

const AppStack = createStackNavigator();
export const PageStackScreen = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <AppStack.Screen name="PageList" component={PageList} />
    {/* <AppStack.Screen name="EditProfile" component={EditProfile} /> */}
    <AppStack.Screen name="Address" component={Address} />
  </AppStack.Navigator>
);
