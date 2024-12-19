import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  ToastAndroid,
  BackHandler,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  homeData,
  selfData,
  searchData,
  orderHistory,
  notificationData,
  searchedProduct,
} from "@api/store/actions";
import { getValue } from "@utils/localStorage";
import { updateCurrency } from "@api/store/reducers/otherReducer";
import { useTheme, useIsFocused } from "@react-navigation/native";
import Header from "./header";
import SearchInput from "./searchInput";
import Slider from "./slider";
import ShopByCategory from "./shopByCategory";
import LowestPrice from "./lowestPrice/index";
import Coupons from "./coupons";
import NotFound from "./notFound";
import Loader from "./loader";
import Seller from "./seller";
import Blogs from "./blogs";
import Brands from "./brands";
import { NoDataFound } from "@otherComponents";
import { useValues } from "@utils/context";
import images from "@utils/images";
import { GlobalStyle } from "@style";
import { emptyProducts } from "@api/store/reducers/productReducer";
import { AnimatedAlert } from "@commonComponents";
import styles from "./styles";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
// categories

const productsForYou = [
  {
    id: "#podi01",
    name: "Sambar Podi",
    type: "podiItems",
    original_url: images.sambarPodi,
    quantity: "500",
    weight: "500",
    price: 120,
    sale_price: 230,
  },
  {
    id: "#vadam01",
    name: "Pudhina Vadam",
    type: "vadam",
    original_url: images.pudhina,
    quantity: "500",
    weight: "500",
    price: 120,
    sale_price: 230,
  },
  {
    id: "#ginger01",
    name: "Ginger Puli",
    type: "vadam",
    original_url: images.ginger,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: "#vadam02",
    name: "Javvarisi Vadam",
    type: "vadam",
    original_url: images.vadam,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: "#podi02",
    name: "Puliyodharai Powder",
    type: "podiItems",
    original_url: images.powder,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: "#vadam03",
    name: "Thamarai thandu Vadam",
    type: "vadam",
    original_url: images.thamarai,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: "#vadam04",
    name: "Wheel Vadam",
    type: "vadam",
    original_url: images.wheel,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
];

export function Home({ navigation }) {
  const {
    loading,
    data,
    navigate_button,
    categoriesData,
    offersData,
    sectionOneData,
    couponsData,
    sectionThreeData,
    sellersData,
    blogsData,
    brandsData,
    checkValue,
  } = useSelector((state) => state.home);
  const { settings } = useSelector((state) => state.other);
  const dispatch = useDispatch();
  const { isDark } = useValues();
  const { colors } = useTheme();
  const [backPressCount, setBackPressCount] = useState(0);
  const messageRef = useRef();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const isFocused = useIsFocused();

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "323778747839-4e0g91eg4mpp4vucqgolcmh5mm78o9vs.apps.googleusercontent.com",

      // offlineAccess: true,
    });
  }, []);

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      console.log("idToken:", idToken);
      if (!idToken) {
        throw new Error("Google Sign-In did not return an idToken.");
      }
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential
      );
      console.log("User Info:", userCredential.user);
      Alert.alert(
        "Login Successful!",
        `Welcome ${userCredential.user.displayName}`
      );
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      Alert.alert("Error", error.message);
    }
  };

  // const pastOrders = [
  //   {
  //     id: '#podi04',
  //     name: "Angaya Powder",
  //     type: 'podiItems',
  //     original_url: images.powder4,
  //     quantity: "400",
  //     weight: "400",
  //     price: 80,
  //     sale_price: 230,
  //   },
  //   {
  //     id: '#podi05',
  //     name: "Ellu Idly Powder",
  //     type: 'podiItems',
  //     original_url: images.powder5,
  //     quantity: "200",
  //     weight: "200",
  //     price: 60,
  //     sale_price: 230,
  //   },
  //   {
  //     id: '#vathal2',
  //     name: "Sundaikai Vathal",
  //     type: "vathal",
  //     original_url: images.vathal2,
  //     quantity: "500",
  //     weight: "500",
  //     price: 140,
  //     sale_price: 230,
  //   },
  //   {
  //     id: '#podi01',
  //     name: "Dhal Powder",
  //     type: 'podiItems',
  //     original_url: images.powder1,
  //     quantity: "500",
  //     weight: "500",
  //     price: 120,
  //     sale_price: 230,
  //   },
  //   {
  //     id: '#podi08',
  //     name: "Garlic Dhal Powder",
  //     type: 'podiItems',
  //     original_url: images.powder8,
  //     quantity: "250",
  //     weight: "250",
  //     price: 70,
  //     sale_price: 230,
  //   },
  // ]
  useEffect(() => {
    if (!isFocused) return;

    const backAction = () => {
      if (backPressCount === 0) {
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
        setBackPressCount(1);
        setTimeout(() => setBackPressCount(0), 2000);
        return true;
      } else if (backPressCount === 1) {
        BackHandler.exitApp();
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isFocused, backPressCount]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(homeData(dispatch));
    dispatch(selfData());
    dispatch(searchData());
    dispatch(orderHistory());
    dispatch(notificationData());
    dispatch(searchedProduct());
    currencyValue();
  };

  const currencyValue = async () => {
    const symbol = await getValue("CurrSymbol");
    const value = await getValue("CurrValue");
    if (value) {
      const curr = {
        symbol: symbol,
        value: value,
      };
      dispatch(updateCurrency(curr));
      setCurrSymbol(symbol);
      setCurrValue(value);
    } else {
      const val = settings?.general?.default_currency;
      const currSymbol = val ? val.symbol : "₹";
      const currValue = val ? val.exchange_rate : 1;
      const curr = {
        symbol: currSymbol,
        value: currValue,
      };
      dispatch(updateCurrency(curr));
    }
  };

  const gotoPage = (type, link) => {
    if (type == "product") {
      navigation.navigate("ProductsDetails", { id: link });
    } else if (type == "collection") {
      dispatch(emptyProducts());
      navigation.navigate("ProductsList", {
        title: link,
        slug: link,
      });
    }
  };

  const showAlert = (type) => {
    if (type === "add") {
      setMessage("Product Added To Whishlist");
    } else {
      setMessage("Product Removed from Whishlist");
    }
    messageRef.current.animate();
  };

  const categories = useSelector((data) => data.category.categories);
  // console.log(categories);

  const flatendeArr = categories?.flatMap((obj) => obj.data);

  const getRandomItems = (array, count) => {
    if (array.length <= count) return array; // Return the full array if it's smaller than or equal to the count
    const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Select the first `count` items
  };
  const selectedItems = getRandomItems(flatendeArr, 7);
  // console.log(selectedItems);

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Header navigation={navigation} />
      <SearchInput
        colors={colors}
        onPress={() => navigation.navigate("SearchScreen")}
      />
      <ScrollView>
        <ShopByCategory
          navigation={navigation}
          title={"Browse by categories"}
          // data={data}
          // status={data?.categories_list.status}
          // title={data?.categories_list?.title}
        />
        <TouchableOpacity onPress={GoogleSingUp}>
          <Text style={{ color: "#000000", textAlign: "center", fontSize: 20 }}>
            Google
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.lowestPrice,
            {
              // backgroundColor: colors.primary,
              backgroundColor: "#E8EDFF",
            },
          ]}
        >
          <LowestPrice
            showAlert={showAlert}
            navigation={navigation}
            title={"Products for you!"}
            subtitle={"This product are curated for special you"}
            data={selectedItems}
            from="offers"
            showOffer
          />
        </View>
      </ScrollView>
      {/* {loading ? (
        <Loader colors={colors} />
      ) : data ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={data?.home_banner ? true : false}
          refreshControl={
            <RefreshControl onRefresh={getData} refreshing={loading} />
          }
        >
          {data?.navigate_button?.status && navigate_button?.title && (
            <NotFound values={navigate_button} gotoPage={gotoPage} />
          )}
          {data?.home_banner.status &&
            data?.home_banner?.banners?.length > 1 && (
              <Slider data={data?.home_banner?.banners} gotoPage={gotoPage} />
            )}
          {data?.categories_list.status && categoriesData?.length > 0 && (
            <ShopByCategory
              navigation={navigation}
              data={categoriesData}
              status={data?.categories_list.status}
              title={data?.categories_list?.title}
            />
          )}
          {data?.offer_products?.status && offersData?.length > 0 && (
            <View
              style={[
                styles.lowestPrice,
                {
                  backgroundColor: colors.primary,
                },
              ]}
            >
              <LowestPrice
                showAlert={showAlert}
                navigation={navigation}
                title={data?.offer_products?.title}
                subtitle={data?.offer_products?.sub_title}
                data={offersData}
                from="offers"
                showOffer
              />
            </View>
          )}
          {data?.section_1_products?.status && sectionOneData?.length > 0 && (
            <LowestPrice
              showAlert={showAlert}
              navigation={navigation}
              title={data?.section_1_products?.title}
              subtitle={data?.section_1_products?.sub_title}
              data={sectionOneData}
              from="section1"
            />
          )}
          {data?.coupons?.status && couponsData?.length > 0 && (
            <Coupons
              showLoader={loading}
              data={couponsData}
              title={data?.coupons?.title}
              navigation={navigation}
              subtitle={data?.coupons?.sub_title}
            />
          )}
          {data?.section_3_products?.status && sectionThreeData?.length > 0 && (
            <LowestPrice
              showAlert={showAlert}
              navigation={navigation}
              title={data?.section_3_products?.title}
              subtitle={data?.section_3_products?.sub_title}
              data={sectionThreeData}
              from="section3"
            />
          )}
          {data?.seller?.status && sellersData?.length > 0 && (
            <Seller
              title={data?.seller?.title}
              subtitle={data?.seller?.sub_title}
              data={sellersData}
              navigation={navigation}
            />
          )}
          {data?.blogs?.status && blogsData?.length > 0 && (
            <Blogs
              title={data?.blogs?.title}
              subtitle={data?.blogs?.sub_title}
              data={blogsData}
            />
          )}
          {data?.brands?.status && brandsData?.length > 0 && (
            <Brands
              title={data?.brands?.title}
              data={brandsData}
              navigation={navigation}
            />
          )}
          {data?.navigate_button?.status && navigate_button?.title && (
            <View style={styles.spacing} />
          )}
        </ScrollView>
      ) : (
        <NoDataFound
          img={isDark ? images.noHomeDataDark : images.noHomeData}
          btnText={"Refresh"}
          onPress={getData}
          title={"No Data Found"}
          subTitle={"Woops!! Looks Like There Are Nothing At Our Store Yet.."}
        />
      )} */}
      <AnimatedAlert text={message} ref={messageRef} success={true} />
    </SafeAreaView>
  );
}
