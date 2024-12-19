import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./homeStackNavigator";
import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import { Category, Cart, Home, Profile, Offers } from "@utils/icons";
import { CartList, CategoryScreen, OffersList, PageList } from "../screens";
import { TabComponents } from "@otherComponents";
import { PageStackScreen } from "./pageStackNavigator";
import HomeIcon from "../assets/icons/homeIcon";
import MenuIcon from "../assets/icons/menuIcon";
import ProfileIcon from "../assets/icons/profileIcon";

const Tab = createBottomTabNavigator();

export default TabStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabComponents {...props} />}
    >
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          // tabBarLabel: "Home",
          activeTabBarIcon: () => <HomeIcon />,
          tabBarIcon: () => <HomeIcon />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          // tabBarLabel: "Category",
          activeTabBarIcon: () => <MenuIcon />,
          tabBarIcon: () => <MenuIcon color={"#93A3DD"} />,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="CartList"
        component={CartList}
        options={{
          tabBarLabel: "Cart",
          activeTabBarIcon: () => <Cart />,
          tabBarIcon: () => <Cart color={"#B5E7E1"} />,
          headerShown: false,
        }}
      /> */}
      {/* <Tab.Screen
        name="OffersList"
        component={OffersList}
        options={{
          tabBarLabel: 'Offers',
          activeTabBarIcon: () => <Offers />,
          tabBarIcon: () => <Offers color={'#B5E7E1'} />,
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="PageList"
        component={PageStackScreen}
        options={{
          // tabBarLabel: "Account",
          activeTabBarIcon: () => <ProfileIcon />,
          tabBarIcon: () => <ProfileIcon color={"#93A3DD"} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    width: windowWidth(32),
    height: windowHeight(32),
    resizeMode: "contain",
    tintColor: appColors.white,
    marginTop: windowHeight(-6),
  },
});
