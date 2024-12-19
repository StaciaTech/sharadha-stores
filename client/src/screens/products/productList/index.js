import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AnimatedAlert, Input } from "@commonComponents";
import {
  ProductFilter,
  CommonModal,
  ProductListHeader,
} from "@otherComponents";
import ProductView from "./productsView/index";
import { useDispatch, useSelector } from "react-redux";
import {
  productsData,
  productsFilterData,
  addToCart,
  filterBrands,
} from "@api/store/actions";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { Search } from "@utils/icons";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import { GlobalStyle } from "@style";
import { getValue, setValue } from "@utils/localStorage";
import { updateCartValue } from "@api/store/reducers/cartReducer";
import { manageDetails, removeData } from "@utils/helper";
import styles from "./styles";

export function ProductsList({ route, navigation }) {
  const { productsFilter, originalProductList, brands } = useSelector(
    (state) => state.product
  );

  const { categories } = useSelector((state) => state.category);
  const { viewRTLStyle } = useValues();
  const [showModal, setShowModal] = useState(false);
  const title = route.params.title;
  console.log(title);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const messageRef = useRef();
  const [filteredVal, setFilteredVal] = useState([]);
  const [total, setTotal] = useState(false);
  const [filterParams, setFilterParams] = useState();
  const [products, setProducts] = useState(categories);
  // const products = [];
  const [filteredArr, setFilteredArr] = useState(productsFilter);
  const [loading, setLoading] = useState(false);
  // const [categoryData, setCatgoryData] = useState([]);
  // useEffect(() => {
  //   checkType();
  // }, [route.params.slug]);

  // filter products

  // const filterCategory = (categories) => {
  //   categories.forEach((category) => {
  //     if (category.type === title) {
  //       products.push(category.data);
  //     }
  //   });
  // };

  useEffect(() => {
    const filteredArr = categories.find((category) => category.type === title);
    setProducts(filteredArr ? filteredArr.data : []);
  }, []);

  // console.log(products);
  const modalVisible = () => {
    setShowModal(!showModal);
  };

  const checkType = (filterParams, arr, total) => {
    setTotal(total);
    if (route.params.from == "brand") {
      getData("brand", filterParams, arr);
    } else if (route.params.from == "seller") {
      getData("store_slug", filterParams, arr);
    } else {
      getData("category", filterParams, arr);
    }
  };

  // const getData = (type, filterParams, arr) => {
  //   setLoading(true);
  //   setShowModal(false);
  //   dispatch(productsFilterData());
  //   dispatch(filterBrands());
  //   setFilterParams(filterParams);
  //   const slug = "?" + type + "=" + route.params.slug;
  //   var url = slug;
  //   if (filterParams) {
  //     url = slug + "&" + filterParams;
  //     setFilteredArr(arr);
  //   }
  //   dispatch(productsData(url))
  //     .unwrap()
  //     .then((res) => {
  //       setLoading(false);
  //       if (res) {
  //         setProducts(res.data);
  //       } else {
  //       }
  //     });
  // };

  // useEffect(() => {
  //   filteredArr.length == 0 && setFilteredArr(productsFilter);
  // }, [productsFilter]);

  // const goToCart = () => {
  //   navigation.navigate("CartList");
  // };

  // const addDataToCart = async (val, quantity, valueType) => {
  //   addCart(val.id, valueType);
  //   const cartData = await getValue("cartData");
  //   if (cartData) {
  //     messageRef.current.animate();
  //     setMessage("Product Added To Cart");
  //     var list = JSON.parse(cartData);
  //     const index = list.findIndex((item) => {
  //       return item.id === val.id;
  //     });

  //     if (index !== -1) {
  //       if (quantity === 0 && valueType != "increase") {
  //         const updatedItems = removeData(list, "", val.id);
  //         storeCart(updatedItems);
  //         setMessage("Your Cart is Updated");
  //       } else {
  //         const updatedProducts = [...list];
  //         updatedProducts[index].quantity = quantity;
  //         storeCart(updatedProducts);
  //       }
  //     } else {
  //       const details = manageDetails({}, val);
  //       list = [...list, details];
  //       storeCart(list);
  //     }
  //   } else {
  //     const data = manageDetails({}, val);
  //     storeCart([data]);
  //     setMessage("Product Added To Cart");
  //   }
  // };

  
  // const addCart = async (id, valueType) => {
  //   const data = {
  //     product_id: id,
  //     variation_id: "",
  //     quantity: valueType ? 1 : -1,
  //   };
  //   await dispatch(addToCart(data));
  // };

  

  // const storeCart = (data) => {
  //   dispatch(updateCartValue(data));
  //   setValue("cartData", JSON.stringify(data));
  // };

  // const filterProducts = (val) => {
  //   const pro = originalProductList.filter((item) => {
  //     if (item.name.includes(val)) {
  //       return item;
  //     }
  //   });
  //   if (val) {
  //     setFilteredVal(pro);
  //   } else {
  //     setFilteredVal([]);
  //   }
  // };

  
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
    <SafeAreaView>
      <ProductListHeader
        title={title}
        viewRTLStyle={viewRTLStyle}
        modalVisible={modalVisible}
        total={total}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={GlobalStyle.mainView}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.container}>
          <Input
            top={windowHeight(1)}
            placeholder={"Search Product Here.."}
            leftIcon={
              <Search width={windowWidth(24)} height={windowHeight(24)} />
            }
            onChangeText={(val) => filterProducts(val)}
            height={windowHeight(40)}
          />
        </View>
        <ProductView
          showLoader={loading}
          navigation={navigation}
          data={filteredVal.length > 0 ? filteredVal : products}
          onPress={addDataToCart}
        />
      </ScrollView>
      {/* <CommonModal
        modal={
          <ProductFilter
            filterParams={filterParams}
            showModal={modalVisible}
            filters={filteredArr}
            onPress1={modalVisible}
            onPress2={checkType}
            brands={brands}
          />
        }
        showModal={showModal}
        visibleModal={modalVisible}
      /> */}
      {/* <AnimatedAlert
        text={message}
        ref={messageRef}
        val={-50}
        color={appColors.primary}
        subText={'View All'}
        onPress={goToCart}
      /> */}
    </SafeAreaView>
  );
}
