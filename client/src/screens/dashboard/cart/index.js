import React, { useEffect, useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { Header, AnimatedAlert, Button } from "@commonComponents";
import { useTheme } from "@react-navigation/native";
import { NoDataFound } from "@otherComponents";
import ProductView from "./productView";
import TotalView from "./totalView";
import OrderType from "./orderType";
import BillDetails from "./billDetails";
import AdditionalOfferings from "./additionalOfferings";
import { useDispatch, useSelector } from "react-redux";
import { ProductLoader } from "@commonComponents/product/loader";
import images from "@utils/images";
import {
  addToWishlist,
  cartData,
  clearCartData,
  homeOffersData,
  homeSectionOneData,
  homeSectionThreeData,
  removeCartData,
  updateCartData,
} from "@api/store/actions";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import { GlobalStyle } from "@style";
import {
  updateCartValue,
  updateLoading,
} from "@api/store/reducers/cartReducer";
import { setValue, getValue } from "@utils/localStorage";
import { removeData } from "@utils/helper";
import styles from "./styles";
import axios from "axios";
import Modal1 from "react-native-modal";
import { Location, Cart } from "@utils/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Sheet } from "react-modal-sheet";
const OrderPlacedPopup = ({ visible, onClose, onNavigate }) => {
  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Image source={images.orderSuccess} style={styles.icon} />
          <Text style={styles.title}>Order Placed!</Text>
          <Text style={styles.message}>
            Your order has been successfully placed. Thank you for shopping with
            us!
          </Text>
          <Button
            text={"Go to Orders"}
            style={styles.btn}
            color={appColors.white}
            onPress={() => setOpenAddressModal(false)}
          />
          {/* <TouchableOpacity style={styles.button} onPress={onNavigate}>
            <Text style={styles.buttonText}>Go to Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export function CartList({ navigation }) {
  const { colors } = useTheme();
  const { isDark, token, viewRTLStyle } = useValues();
  const { cartList, loading } = useSelector((state) => state.cart);
  const [data, setData] = useState(cartList);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const addresses = useSelector((state) => state.delivery.addresses);
  const [addresses, setAddresses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOrderPlacedPopUp, setShowOrderPlacedPopUp] = useState(false);
  const [selectedAddrress, setSelectedAddress] = useState();
  const [defaultAddress, setDefaultAddress] = useState();
  const [userInfo, setUserInfo] = useState();
  // const orderId = selectedAddrress?.phone.slice(6, 10);
  const { offersParams, sectionOneParams, sectionThreeParams } = useSelector(
    (state) => state.home
  );
  const dispatch = useDispatch();
  const messageRef = useRef();
  useEffect(() => {
    setData(cartList);
  }, [cartList]);

  useEffect(() => {
    AsyncStorage.getItem("addresses")
      .then((data) => {
        const parsedData = JSON.parse(data); // Parse the data to an array
        setAddresses(parsedData); // Set all addresses
        if (parsedData && parsedData.length > 0) {
          setDefaultAddress(parsedData[0]); // Set the first address as default if it exists
        }
        console.log("address", parsedData); // Log the parsed data
      })
      .catch((error) => {
        console.error("Error retrieving addresses from AsyncStorage", error);
      });
  }, []);

  // useEffect(() => {
  //   AsyncStorage.getItem("googleUserInfo")
  //     .then((data) => {
  //       const googleUserInfo = JSON.parse(data);
  //       setUserInfo(googleUserInfo.user);
  //       console.log("googleUserInfo", googleUserInfo.user);
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving addresses from AsyncStorage", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   AsyncStorage.getItem("addresses").then((data) => {
  //     setSelectedAddress(JSON.parse(data[0]));
  //   });
  // }, []);

  const deleteCartData = (id, variationId) => {
    var url = "/" + id;
    dispatch(removeCartData(url));
    const dataList = removeData(cartList, variationId, id);
    storeCart(dataList);
    countTotal();
  };

  const totalItems = () => {
    return !loading && cartList?.items?.length > 0
      ? " (" + cartList?.items?.length + " Items" + ")"
      : "";
  };

  const updateCart = (id, val, original, itemId, variationId) => {
    const quantity = val == "increase" ? 1 : -1;
    if (original === 1 && val != "increase") {
      const data = removeData(cartList, variationId, id);
      storeCart(data);
      countTotal();
      deleteCartData(itemId);
    } else {
      const list = cartList?.map((product) => {
        const itemId = product.variationId ? variationId : id;
        const variation = product.variationId || product.id;
        if (variation === itemId) {
          var qty =
            val === "increase" ? product.quantity + 1 : product.quantity - 1;
          return { ...product, quantity: qty };
        }
        return product;
      });
      const data = {
        product_id: id,
        variation_id: "",
        quantity: quantity,
      };
      dispatch(updateCartData(data));
      storeCart(list);
      countTotal();
    }
  };

  const storeCart = (data) => {
    dispatch(updateCartValue(data));
    setValue("cartData", JSON.stringify(data));
    dispatch(homeOffersData(offersParams));
    dispatch(homeSectionOneData(sectionOneParams));
    dispatch(homeSectionThreeData(sectionThreeParams));
  };

  const clearCart = () => {
    dispatch(updateLoading(true));
    storeCart([]);
    dispatch(clearCartData());
    setTimeout(() => {
      dispatch(updateLoading(false));
    }, 1000);
  };

  const addDataToWishlist = async (id) => {
    const data = {
      product_id: id,
    };
    const val = {
      data,
      dispatch,
    };
    const res = await dispatch(addToWishlist(val));
    if (res.payload != "Error") {
      messageRef.current.animate();
    }
  };

  const getCartData = () => {
    if (token) {
      dispatch(cartData());
    } else {
      dispatch(updateLoading(true));
      setTimeout(() => {
        dispatch(updateLoading(false));
      }, 1000);
    }
  };

  const countTotal = () => {
    // const total = cartList.reduce(
    //   (total, item) => total + item?.sale_price * item?.quantity,
    //   0
    // );
    const total = cartList.reduce(
      (total, item) => total + item?.price * item?.quantity,
      0
    );
    return total;
  };

  const countItemToal = () => {
    const productMap = cartList.reduce((map, item) => {
      const quantity = parseFloat(item.quantity); // Convert quantity to a number
      if (!map[item.name]) {
        map[item.name] = { ...item, quantity }; // Add a new entry for this product name
      } else {
        // If the product name already exists, update the quantity
        map[item.name].quantity += quantity;
      }
      return map;
    }, {});

    // Calculate the total based on the aggregated quantities
    const total = Object.values(productMap).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return total;
  };

  // const phoneNumber = '9876543210';
  const generateCusId = (phNo) => {
    const hash = phNo.slice(6, 10);
    return `CUST-${hash}`;
  };

  // generete orderId
  const generateOrderId = (phNo) => {
    const timestamp = Date.now().toString();
    return `OID${phNo.slice(6, 10)}${timestamp}`;
  };

  // place order
  const placeOrder = async () => {
    try {
      const formData = new FormData();
      const itemTotal = countItemToal();
      const totalAmount = countTotal();
      const columnNames = [
        "orderId",
        "customerName",
        "productName",
        "weight",
        "quantity",
        "productPrice",
        "address",
        "phoneNo",
        "total",
        "orderType",
        "status",
      ];

      const items = cartList.map((item) => [
        generateOrderId(defaultAddress.phone),
        generateCusId(defaultAddress.phone),
        defaultAddress?.name,
        item.name,
        item.original_url,
        item.weight,
        item.quantity,
        item.price,
        [
          defaultAddress.street,
          defaultAddress.country_id,
          defaultAddress.state_id,
          defaultAddress.city,
          defaultAddress.pincode,
        ]
          .filter(Boolean)
          .join(", "),
        // defaultAddress,
        defaultAddress.phone,
        selectedOption,
        totalAmount,
        'initiated' 
      ]);

      // const res = [
      //   selectedAddrress.street,
      //   selectedAddrress.country_id,
      //   selectedAddrress.state_id,
      //   selectedAddrress.city,
      //   selectedAddrress.pincode,
      // ]
      //   .filter(Boolean)
      //   .join(", ");

      // console.log(
      //  res
      // );

      // console.log("selectedPh", selectedAddrress.phone);

      //   const transformedValues = values.map((item, index) => {
      //     if (index === 0) {
      //         return item
      //     } else {
      //         return item.map((element, i) => (i === 0 ? '' : element))
      //     }
      // })
      // formData.append('cusname', 'baskar');
      // formData.append('products', JSON.stringify(items));
      const res = await axios.post(
        "http://192.168.0.115:7000/user/place-order",
        {
          values: items,
        }
      );
      if (res.status) {
        console.log("success");
        setShowOrderPlacedPopUp(true);
        clearCart();
        navigation.navigate('Home');
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log("error in place order", err);
    }
  };

  const toggleModal = () => {
    setOpenAddressModal(!openAddressModal);
  };

  return (
    <View>
      <View
        style={[
          GlobalStyle.mainView,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <View style={[styles.container, { flexDirection: viewRTLStyle }]}>
          <Header isText titleText={"My Cart"} image text={totalItems()} />
          {cartList?.length > 0 && (
            <TouchableOpacity
              onPress={clearCart}
              activeOpacity={1}
              style={[styles.container, { flexDirection: viewRTLStyle }]}
            >
              <Text
                style={[
                  styles.clearCart,
                  {
                    color: colors.text,
                  },
                ]}
              >
                Clear Cart
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {loading ? (
          <ProductLoader />
        ) : cartList?.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getCartData} />
            }
          >
            <ProductView
              colors={colors}
              showLoader={loading}
              visibleDeleteModal={deleteCartData}
              navigation={navigation}
              data={data}
              onPress={addDataToWishlist}
              increaseVal={updateCart}
              decreaseVal={updateCart}
            />
            {/* <TotalView
              showLoader={loading}
              navigation={navigation}
              price={countTotal()}
            /> */}
            <OrderType
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <BillDetails total={countTotal()} />
            <AdditionalOfferings
              setOpenAddressModal={setOpenAddressModal}
              openAddressModal={openAddressModal}
              placeOrder={placeOrder}
              item={selectedAddrress}
              defaultAddress={defaultAddress}
            />
          </ScrollView>
        ) : (
          <NoDataFound
            title={"Your Cart Is Empty"}
            img={isDark ? images.emptyCartDark : images.emptyCart}
            subTitle={"Add Some Items To Get Started!!"}
            btnText={"Shop Now"}
            onPress={navigation.goBack}
          />
        )}
      </View>
      <AnimatedAlert
        text={"Product Added To Wishlist"}
        ref={messageRef}
        color={appColors.primary}
      />
      <Modal1
        isVisible={openAddressModal}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {addresses?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                borderBottomColor: "#CCCCCC",
                borderStyle: "dashed",
                borderBottomWidth: 1,
                paddingVertical: 15,
              }}
              onPress={() => {
                setDefaultAddress(item);
                setOpenAddressModal(false);
              }}
            >
              <View>
                <Location />
              </View>
              {/* <Text>{item.title}</Text> */}
              <Text style={{ fontSize: 16, color: "#000000" }}>
                {[
                  item.street,
                  item.country_id,
                  item.state_id,
                  item.city,
                  item.pincode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </Text>
            </TouchableOpacity>
          ))}
          <Button
            text={"Add new address"}
            style={styles.btn}
            color={appColors.white}
            onPress={() => setOpenAddressModal(false)}
          />
        </View>
      </Modal1>
      <OrderPlacedPopup
        visible={showOrderPlacedPopUp}
        onClose={() => setShowOrderPlacedPopUp(false)}
      />
    </View>
  );
}
