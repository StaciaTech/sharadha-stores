import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { RecentSearch, SearchArrow, Search, Cart } from "@utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { updateRecent } from "@api/store/reducers/searchReducer";
import NoResult from "./noResult";
import Title from "./title";
import Products from "./products";
import { getValue, setValue } from "@utils/localStorage";
import { useTheme } from "@react-navigation/native";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import SearchedProducts from "./searchedProducts/index";
import { Cancel, HeaderArrow } from "@utils/icons";
import styles from "./styles";
import images from "../../utils/images";
import CartFillSvg from "../../assets/icons/cartFill";
import SearchIcon from "../../assets/icons/searchIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const productsForYou = [
  {
    id: 1,
    name: "Sambar Podi",
    original_url: images.sambarPodi,
    quantity: "500",
    weight: "500",
    price: 120,
    sale_price: 230,
  },
  {
    id: 2,
    name: "Pudhina Vadam",
    original_url: images.pudhina,
    quantity: "500",
    weight: "500",
    price: 120,
    sale_price: 230,
  },
  {
    id: 3,
    name: "Ginger Puli",
    original_url: images.ginger,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: 4,
    name: "Javvarisi Vadam",
    original_url: images.vadam,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: 5,
    name: "Puliyodharai Powder",
    original_url: images.powder,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: 6,
    name: "Thamarai thandu Vadam",
    original_url: images.thamarai,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
  {
    id: 7,
    name: "Wheel Vadam",
    original_url: images.wheel,
    quantity: "250",
    weight: "250",
    price: 50,
    sale_price: 230,
  },
];

export function SearchScreen({ navigation }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredVal, setFilteredVal] = useState([]);
  const [SearchingProducts, setSearchingProducts] = useState([]);
  const [recentSearched, setRecentSearched] = useState();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { isDark, viewRTLStyle, textRTLStyle } = useValues();

  const { searchList, recentSearch, searchedProduct } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    setSearchingProducts(
      productsForYou.filter((eachProduct) =>
        eachProduct.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  // console.log(SearchingProducts);

  const filterProducts = (val) => {
    const pro = searchedProduct.filter((item) => {
      if (item.name.includes(val)) {
        return item;
      }
    });
    if (val) {
      setFilteredVal(pro);
    } else {
      setFilteredVal([]);
    }
  };

  const storeRecent = async (item) => {
    goToDetail(item.id);
    const getdata = await getValue("recentData");
    const obj = {
      id: item.id,
      name: item.name,
    };
    const data = [obj];
    if (getdata) {
      var recent = JSON.parse(getdata);
      var isVal = false;
      recent.map((items) => {
        if (items.id == item.id) {
          isVal = true;
          return;
        }
      });
      if (!isVal) {
        recent.push(obj);
        setValue("recentData", JSON.stringify(recent));
        dispatch(updateRecent(recent));
      }
    } else {
      setValue("recentData", JSON.stringify(data));
      dispatch(updateRecent(data));
    }
  };

  const goToDetail = (id) => {
    navigation.navigate("ProductsDetails", { id });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const MAX_ARRAY_LENGTH = 5;

  const [recentProductArr, setRecentProductArr] = useState([]);

  const addProduct = async (productName) => {
    console.log(productName, "adding product");

    // Retrieve the most updated array from AsyncStorage
    const storedArray = await AsyncStorage.getItem("recentProducts");
    let updatedArray = storedArray ? JSON.parse(storedArray) : [];

    // Check if the product already exists
    updatedArray = updatedArray.filter((item) => item !== productName);

    // Add the new product to the start of the array
    updatedArray.unshift(productName);

    // Ensure the array length does not exceed MAX_ARRAY_LENGTH
    if (updatedArray.length > MAX_ARRAY_LENGTH) {
      updatedArray = updatedArray.slice(0, MAX_ARRAY_LENGTH);
    }

    // Update the state and AsyncStorage
    setRecentProductArr(updatedArray);
    await AsyncStorage.setItem("recentProducts", JSON.stringify(updatedArray));
  };

  // Load the recent products from AsyncStorage
  const loadRecentProducts = async () => {
    try {
      const storedArray = await AsyncStorage.getItem("recentProducts");
      if (storedArray) {
        setRecentProductArr(JSON.parse(storedArray));
      }
    } catch (e) {
      console.error("Error loading recent products:", e);
    }
  };

  // Load the array when the component mounts
  useEffect(() => {
    loadRecentProducts();
  }, []);

  console.log(recentProductArr, "recent products");

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          {
            borderBottomColor: "transparent",
            flexDirection: viewRTLStyle,
            justifyContent: "space-between",
            marginTop: 14,
          },
        ]}
      >
        <TouchableOpacity onPress={goBack}>
          <View style={styles.searchArrowTextContainer}>
            <HeaderArrow height={windowHeight(32)} width={windowWidth(38)} />
            <Text style={styles.searchArrowText}>Search</Text>
          </View>
        </TouchableOpacity>
        {/* <TextInput
          placeholderTextColor={appColors.placeholder}
          placeholder="Search Products Here..."
          style={[
            styles.input,
            {
              color: colors.text,
              textAlign: textRTLStyle,
            },
          ]}
          autoFocus
          value={searchValue}
          onChangeText={(val) => {
            setSearchValue(val);
            filterProducts(val);
          }}
        /> */}

        {/* {searchValue && ( */}
        <TouchableOpacity
          onPress={() => {
            // setSearchValue("");
            // searchList.slice(0, 9);
            navigation.navigate("Cart");
          }}
        >
          <View style={styles.CartIconContainer}>
            {/* <Cart color="#17349D" /> */}
            <CartFillSvg />
          </View>
        </TouchableOpacity>
        {/* )} */}
      </View>
      <View style={styles.searchBoxContainer}>
        <SearchIcon />
        <TextInput
          // placeholderTextColor={appColors.placeholder}
          // placeholder="Search Products Here..."
          // style={[
          //   styles.input,
          //   {
          //     color: colors.text,
          //     textAlign: textRTLStyle,
          //   },
          // ]}
          style={{ color: "#4C5988" }}
          placeholderTextColor={"#4C5988"}
          placeholder="Search"
          autoFocus
          value={searchValue}
          onChangeText={(val) => {
            setSearchValue(val);
            filterProducts(val);
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {!searchValue ? (
          recentSearch?.length > 0 && (
            <View style={styles.recentContainer}>
              {recentSearch?.map((item, key) => (
                <View
                  key={key}
                  style={[styles.recentView, { flexDirection: viewRTLStyle }]}
                >
                  {/* <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.recent, { flexDirection: viewRTLStyle }]}
                    onPress={() => goToDetail(item.id)}
                  >
                    <RecentSearch />
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.name,
                        {
                          color: colors.text,
                        },
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                  <SearchArrow /> */}
                </View>
              ))}
            </View>
          )
        ) : (
          <View>
            {SearchingProducts.length ? (
              <SearchedProducts
                filteredVal={filteredVal}
                SearchingProducts={SearchingProducts}
                // setRecentSearched={setRecentSearched}
                addProduct={addProduct}
              />
            ) : (
              // <View
              //   style={[
              //     styles.separator,
              //     {
              //       backgroundColor: isDark
              //         ? appColors.darkDrawer
              //         : appColors.line,
              //     },
              //   ]}
              // />""
              ""
            )}
          </View>
        )}
        {recentSearch?.length > 0 && !searchValue && (
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDark ? appColors.darkDrawer : appColors.line,
              },
            ]}
          />
        )}
        {!SearchingProducts.length && <NoResult />}
        {!searchValue ? (
          <View style={styles.productContainer}>
            <View style={styles.searchForTitlecontainer}>
              <RecentSearch />
              <Text style={styles.searchFortitle}>Recent Searches</Text>
            </View>

            <Products
              filteredProduct={searchList.slice(0, 9)}
              goToDetail={storeRecent}
            />
            <View style={styles.searchForContainer}>
              {recentProductArr.map((eachItem, i) => (
                <View key={i}>
                  <Pressable onPress={() => setSearchValue(eachItem)}>
                    <Text style={styles.searchForItem}>{eachItem}</Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        ) : (
          ""
          // searchValue && filteredVal.length == 0 && <NoResult />
        )}
        {!searchValue ? (
          <View style={[styles.productContainer, { marginTop: 42 }]}>
            {/* <Title title={"Search for"} /> */}
            <Text style={styles.searchFortitle}>Search for</Text>
            <Products
              filteredProduct={searchList.slice(0, 9)}
              goToDetail={storeRecent}
            />
            <View style={styles.searchForContainer}>
              {productsForYou.slice(0, 4).map((eachItem, i) => (
                <View key={i}>
                  <Pressable onPress={() => setSearchValue(eachItem.name)}>
                    <Text style={styles.searchForItem}>{eachItem.name}</Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        ) : (
          ""
          // searchValue && filteredVal.length == 0 && <NoResult />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
