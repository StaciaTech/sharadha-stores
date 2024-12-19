import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  NativeModules,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import appColors from "@theme/appColors";
import { useTheme } from "@react-navigation/native";
import { ImageLoader } from "./loader";
import { useValues } from "@utils/context";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetails,
  addToCart,
  questionAnswerData,
  postQuestion,
} from "@api/store/actions";
import { AnimatedAlert, Button } from "@commonComponents";
import LowestPrice from "../../dashboard/home/lowestPrice";
import { emptyProduct } from "@api/store/reducers/productReducer";
import Header from "./header";
import ProductImages from "./productImages";
import NameView from "./nameView";
import DetailsView from "./detailsView";
import ProductInformation from "./productInformation";
import DeliveryTime from "./deliveryTime";
import RatingNReview from "./ratingNReview";
import FrequentlyBought from "./frequentlyBought";
import CounterView from "./counterView";
import Timer from "./saleTimer";
import ProductVariations from "./productVariations";
import { getValue, setValue } from "@utils/localStorage";
import appFonts from "@theme/appFonts";
import { CommonModal } from "@otherComponents";
import { Cancel, Increase, Decrease } from "@utils/icons";
import { updateCartValue } from "@api/store/reducers/cartReducer";
import { manageDetails, removeData } from "@utils/helper";
import styles from "./styles";
import Sale from "./component/sale/index";
import images from "@utils/images";
import UpdatedFq from "./updatedFq";
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
export function ProductsDetails({ navigation, route }) {
  const item = route.params.item;
  const { colors } = useTheme();
  const { questionLoading } = useSelector((state) => state.product);
  const [attribute, setAttribute] = useState([]);
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [isCart, setIsCart] = useState(true);
  const [variants, setVariants] = useState([]);
  const [data, setData] = useState([]);
  const [selectedVariation, setSelectedVariation] = useState();
  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState();
  const [isWishList, setIsWishlist] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { currSymbol, currValue } = useSelector((state) => state.other);
  const [showModal, setShowModal] = useState(false);
  const messageRef = useRef();
  const { viewRTLStyle, isDark, textRTLStyle, token } = useValues();
  const { UIManager } = NativeModules;
  const [show, setShow] = useState(false);

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const dispatch = useDispatch();
  const { name, original_url, weight, price } = route.params.item;
  const { cartList } = useSelector((state) => state.cart);
  console.log("))))))))))))))))))))))))))))))))))", cartList);
  useEffect(() => {
    // getDetails(true);
  }, []);

  // const getDetails = (val) => {
  //   setLoading(val);
  //   dispatch(productDetails(id))
  //     .unwrap()
  //     .then((res) => {
  //       if (res) {
  //         setLoading(false);
  //         setProductDetail(res);
  //         setAttribute(res?.attributes);
  //         setVariants(res?.variations);
  //         setIsWishlist(res?.is_wishlist);
  //         res?.attributes.length == 0 && setQuantity(res?.quantity);
  //       } else {
  //       }
  //     });
  //   dispatch(emptyProduct());
  //   dispatch(questionAnswerData(id));
  // };

  // const addDataToCart = async (type, valType, id, quantity, valueType) => {
  //   addCart(valType, id, valueType);
  //   const cartData = await getValue("cartData");
  //   if (cartData) {
  //     showMessage("Product Added To Cart");
  //     var list = JSON.parse(cartData);
  //     const index = list.findIndex((item) => {
  //       const value = item.variationId
  //         ? selectedVariation?.id
  //         : productDetail.id;
  //       const variation = item.variationId || item.id;
  //       return variation === value;
  //     });
  //     if (index !== -1) {
  //       if (quantity === 0 && valueType != "increase") {
  //         const updatedItems = removeData(
  //           list,
  //           selectedVariation?.id,
  //           productDetail.id
  //         );
  //         storeCart(updatedItems);
  //         showMessage("Your Cart is Updated");
  //       } else {
  //         const updatedProducts = [...list];
  //         updatedProducts[index].quantity = quantity;
  //         list = updatedProducts;
  //         storeCart(list);
  //       }
  //       gotoScreen(type);
  //     } else {
  //       const details = manageDetails(selectedVariation, productDetail);
  //       list = [...list, details];
  //       storeCart(list);
  //       gotoScreen(type);
  //     }
  //   } else {
  //     showMessage("Product Added To Cart");
  //     const data = manageDetails(selectedVariation, productDetail);
  //     storeCart([data]);
  //     gotoScreen(type);
  //   }
  // };

  // const addCart = async (valType, id, valueType) => {
  //   const productId = valType == "counter" ? productDetail.id : id;
  //   const variation_Id = selectedVariation?.id || "";
  //   const qty = valueType == "increase" ? 1 : -1;
  //   const data = {
  //     product_id: productId,
  //     variation_id: variation_Id,
  //     quantity: qty,
  //   };
  //   await dispatch(addToCart(data));
  // };

  // const gotoScreen = (type) => {
  //   if (type === "buyNow") {
  //     navigation.navigate("SelectDelivery");
  //     Sale;
  //   } else {
  //     setIsCart(true);
  //     showMessage("Product Added To Cart");
  //   }
  // };

  // const showMessage = (msg) => {
  //   setMessage(msg);
  //   messageRef.current.animate();
  // };

  // const storeCart = (data) => {
  //   dispatch(updateCartValue(data));
  //   setValue("cartData", JSON.stringify(data));
  // };

  // const manageWishlist = (val, message) => {
  //   setIsWishlist(val);
  //   setIsCart(false);
  //   showMessage(message);
  // };

  const goToSearch = () => {
    navigation.replace("SearchScreen");
  };

  const goToCart = () => {
    navigation.navigate("CartList");
  };
  // const goToWishList = () => {
  //   navigation.navigate("Wishlist");
  // };
  // const visibleModal = () => {
  //   setShowModal(!showModal);
  // };

  // const addQuestion = () => {
  //   const data = {
  //     question: question,
  //     product_id: productDetail.id,
  //     answer: "",
  //   };
  //   dispatch(postQuestion(data))
  //     .unwrap()
  //     .then((res) => {
  //       if (res != "Error") {
  //         visibleModal();
  //         dispatch(questionAnswerData(id));
  //       } else {
  //         setError(true);
  //       }
  //     });
  // };

  // const getVariation = (variation) => {
  //   setSelectedVariation(variation);
  // };

  // const getData = (data) => {
  //   setData(data);
  // };

  // const addWithOther = (type, val, id, quantity, valueType) => {
  //   data.length > 0 &&
  //     data.push({
  //       id: productDetail.id,
  //     });
  //   data.length > 0
  //     ? data.map((item) => addDataToCart(type, val, item.id, 1, valueType))
  //     : addDataToCart(type, val, id, quantity, valueType);
  // };

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
    <SafeAreaView
      style={{
        backgroundColor: isDark ? appColors.darkDrawer : colors.background,
      }}
    >
      <Header goToCart={goToCart} goToSearch={goToSearch} />
      {/* {loading ? (
        <ImageLoader isDark={isDark} />
      ) : ( */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        // refreshControl={
        //   <RefreshControl
        //     onRefresh={() => getDetails(true)}
        //     refreshing={loading}
        //   />
        // }
      >
        <View style={styles.individualImageBox}>
          {/* <ProductImages
              productDetail={route.params?.productDetails}
              isWishList={isWishList}
              manageWishlist={manageWishlist}
            /> */}
          <Image source={original_url} style={styles.individualImage} />
          {/* {productDetail.is_sale_enable == 1 && <Sale />} */}
        </View>
        {/* {productDetail.is_sale_enable == 1 && (
            <Timer
              startDate={productDetail.sale_starts_at}
              endDate={productDetail.sale_expired_at}
            />
          )} */}
        {/* {attribute?.length > 0 && variants?.length > 0 && (
            <ProductVariations
              attributes={attribute}
              variations={variants}
              getVariation={getVariation}
            />
          )} */}
        <View
          style={[
            styles.separator,
            {
              backgroundColor: colors.border,
            },
          ]}
        />
        <View style={[styles.subView, { backgroundColor: colors.background }]}>
          <NameView
            productName={name}
            quantity={route.params.item?.quantity}
            price={price}
          />
          {/* <Button
            text={'Add to Cart'}
            color={appColors.white}
            style={styles.btn}
            onPress={() => addDataToCart(route.params.item)}
          /> */}
          <View style={[styles.increase]}>
            {!show ? (
              <TouchableOpacity
                style={styles.increase}
                onPress={() => {
                  addDataToCart(item, 1, "increase");
                  setShow(true);
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.add}>Add to Cart</Text>
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
          {/* <View
            style={[
              styles.separator,
              {
                marginTop: windowHeight(10),
                backgroundColor: colors.border,
              },
            ]}
          /> */}
          {/* <DetailsView
            showLoader={loading}
            desc={productDetail?.description}
            shortDesc={productDetail?.meta_description}
          /> */}
        </View>
        {/* <View
          style={[
            styles.separator,
            {
              backgroundColor: colors.border,
            },
          ]}
        /> */}
        {/* <ProductInformation
            variation={selectedVariation}
            details={productDetail}
          /> */}
        {/* <View
          style={[
            styles.separator,
            {
              backgroundColor: colors.border,
            },
          ]}
        /> */}
        {/* <DeliveryTime productDetail={productDetail} isDark={isDark} /> */}
        <View
          style={[
            styles.separator,
            {
              backgroundColor: colors.border,
            },
          ]}
        />
        {/* <RatingNReview
            loading={loading}
            id={route?.params?.id}
            getData={getDetails}
            onPress={visibleModal}
          /> */}
        {/* {productDetail?.cross_products?.length > 0 && ( */}
        {/* <FrequentlyBought
            cross_products={cartList}
            colors={colors}
            viewRTLStyle={viewRTLStyle}
            textRTLStyle={textRTLStyle}
            // getData={getData}
          /> */}
        {/* )} */}
        {/* {productDetail?.similar_products?.length > 0 && ( */}
        {/* <View style={{marginHorizontal: windowWidth(24)}}> */}
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
            paddingHorizontal: windowWidth(24),
            backgroundColor: "#fff",
            paddingVertical: windowHeight(12)
          }}
        >
          Frequently Bought Together
        </Text>
        <UpdatedFq
          colors={colors}
          showLoader={loading}
          // visibleDeleteModal={deleteCartData}
          navigation={navigation}
          data={productsForYou}
          onPress={addDataToCart}
        />
        {/* </View> */}
        <View
          style={{
            backgroundColor: "#E8EDFF",
            marginTop: windowHeight(16),
          }}
        >
          <LowestPrice
            navigation={navigation}
            title={"You May Also Like"}
            subtitle={"This product are curated for special you"}
            data={productsForYou}
            from="product"
            id={productDetail?.id}
            // getDetails={getDetails}
          />
        </View>
        {/* )} */}
      </ScrollView>

      {/* )}
      <CounterView
        showLoader={loading}
        bottom={windowHeight(55)}
        addDataToCart={addWithOther}
        quantity={quantity}
      />
      {!loading && (
        <AnimatedAlert
          text={message}
          ref={messageRef}
          val={-64}
          color={appColors.primary}
          subText={'View All'}
          onPress={isCart ? goToCart : goToWishList}
        />
      )}
      <CommonModal
        showModal={showModal}
        visibleModal={visibleModal}
        modal={
          <View
            style={[
              styles.modalContainer,
              {
                backgroundColor: colors.background,
              },
            ]}>
            <View style={styles.modalSubContainer}>
              <Text
                style={[
                  styles.askTitle,
                  {
                    color: colors.text,
                  },
                ]}>
                Ask a Question
              </Text>
              <TouchableOpacity
                style={styles.closeBtn}
                activeOpacity={0.8}
                onPress={visibleModal}>
                <Cancel width={windowWidth(30)} height={windowHeight(30)} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalMain}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: colors.primary,
                  },
                ]}>
                <Image
                  source={{uri: productDetail?.product_thumbnail?.original_url}}
                  style={styles.qurImage}
                />
              </View>
              <View style={styles.space}>
                <Text
                  style={[
                    styles.qurProductName,
                    {
                      color: colors.text,
                    },
                  ]}>
                  {productDetail?.name}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: appFonts.mulish,
                  }}>
                  {currSymbol}
                  {(currValue * productDetail?.price).toFixed(2)}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.queTitle,
                {
                  color: colors.text,
                },
              ]}>
              Your Questions*
            </Text>
            <TextInput
              value={question}
              onChangeText={value => setQuestion(value)}
              style={[styles.queInput, {color: colors.text}]}
            />
            {error && (
              <Text style={[styles.errorMsg, {color: appColors.error}]}>
                Something Went Wrong Please Try Again Later.
              </Text>
            )}
            <TouchableOpacity
              onPress={addQuestion}
              activeOpacity={0.8}
              style={styles.btnSubmit}>
              {questionLoading ? (
                <ActivityIndicator size={30} color={appColors.white} />
              ) : (
                <Text style={styles.btnText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        }
      /> */}
    </SafeAreaView>
  );
}
