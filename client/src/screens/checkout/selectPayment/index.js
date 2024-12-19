import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, Button, AnimatedAlert } from "@commonComponents";
import { useTheme } from "@react-navigation/native";
import { GlobalStyle } from "@style";
import { useDispatch, useSelector } from "react-redux";
import { windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import { windowHeight } from "@theme/appConstant";
import { checkoutDetails, placeOrder, clearCartData } from "@api/store/actions";
import { Selected, UnSelect } from "@utils/icons";
import { updateLoading } from "@api/store/reducers/checkoutReducer";
import { apiData } from "./apiData";
import { updateCartValue } from "@api/store/reducers/cartReducer";
import { setValue } from "@utils/localStorage";
import { cartData } from "@api/store/actions";
import Summary from "./summary";
import { getValue } from "@utils/localStorage";
import styles from "./styles";
import { rePayment } from "../../../api/store/actions";

export function SelectPayment({ navigation, route }) {
  const { colors } = useTheme();
  const { settings } = useSelector((state) => state.other);
  const { cartList } = useSelector((state) => state.cart);
  const { defaultAddress } = useSelector((state) => state.account);
  const { loading, placeOrderData } = useSelector((state) => state.checkout);
  const [gatewayValue, setGatewayValue] = useState("");
  const [checkoutData, setCheckoutData] = useState();
  const [error, setError] = useState("");
  const [coupon, setCoupon] = useState();
  const [products, setProducts] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [points, setPoints] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const dispatch = useDispatch();
  const messageRef = useRef();
  const [message, setMessage] = useState();
  const params = route.params;

  useEffect(() => {
    if (params.from === "delivery") {
      getCartData();
    } else {
      getPaymentMethods();
    }
  }, []);

  const getCartData = () => {
    var arr = [];
    cartList?.map((item) => {
      arr.push({
        product_id: item.id,
        variation_id: item.variationId || "",
        quantity: item.quantity,
      });
      return arr;
    });
    const val = getPaymentMethods();
    setProducts(arr);
    checkout(arr, val, false, false, "initial");
  };

  useEffect(() => {
    if (placeOrderData == "Error") {
      setMessage("Something Went Wrong Please Try Again Later");
      messageRef.current.animate();
    }
  }, [placeOrderData]);

  const getPaymentMethods = () => {
    const data = settings?.payment_methods?.filter((item) => {
      return item.status;
    });
    const val = data && data[0]?.name;
    setGatewayValue(val);
    setPaymentMethods(data);
    return val;
  };

  const storeCart = (data) => {
    dispatch(updateCartValue(data));
    setValue("cartData", JSON.stringify(data));
  };

  const clearCart = () => {
    dispatch(updateLoading(true));
    storeCart([]);
    dispatch(clearCartData());
    setTimeout(() => {
      dispatch(updateLoading(false));
    }, 1000);
  };

  const checkout = async (products, val, wallet, point, from, coupon) => {
    if (from === "initial" || from != "coupon") {
      dispatch(updateLoading(true));
    } else {
      setCouponLoading(true);
    }
    const storedToken = await getValue("token");
    const code = await getValue("CurrCode");
    const data = apiData(
      products,
      params,
      val,
      wallet,
      point,
      coupon,
      defaultAddress,
      code || "USD",
      storedToken
    );
    dispatch(checkoutDetails(data))
      .unwrap()
      .then((res) => {
        dispatch(updateLoading(false));
        setCouponLoading(false);
        console.log("RESPONSE", res);
        if (res.val == "Success") {
          setCheckoutData(res.data.total);
          if (res.data.total.coupon_total_discount > 0) {
            setCouponApplied(true);
          } else {
            setCouponApplied(false);
            setCoupon();
          }
          setError("");
        } else {
          setError(res.data.message);
        }
      });
  };
  const checkVal = () => {
    if (params.from == "delivery") {
      placeorder();
    } else {
      rePayOrder();
    }
  };

  const rePayOrder = async () => {
    const data = {
      order_number: params?.item?.orderNo,
      payment_method: gatewayValue,
    };
    dispatch(rePayment(data))
      .unwrap()
      .then((res) => {
        if (res.val == "Success") {
          if (gatewayValue == "cod" || gatewayValue == "bank_transfer") {
            navigation.navigate("OrderDetails", {
              id: res.data.order_number,
              email: params?.data?.email,
            });
          } else {
            navigation.navigate("Payment", {
              url: res.data.url,
              email: params?.data?.email,
            });
          }
        } else {
          setMessage(res.data.message);
          messageRef.current.animate();
        }
      });
  };

  const placeorder = async () => {
    const code = await getValue("CurrCode");
    const storedToken = await getValue("token");
    const data = apiData(
      products,
      params,
      gatewayValue,
      wallet,
      points,
      coupon,
      defaultAddress,
      code,
      storedToken
    );

    dispatch(placeOrder(data))
      .unwrap()
      .then((res) => {
        if (res.val == "Success") {
          dispatch(updateCartValue([]));
          clearCart();
          if (gatewayValue == "cod" || gatewayValue == "bank_transfer") {
            if (storedToken) {
              dispatch(cartData());
            }
            setValue("cartData", JSON.stringify([]));
            navigation.navigate("OrderDetails", {
              id: res.data.order_number,
              email: params?.data?.email,
            });
          } else {
            navigation.navigate("Payment", {
              url: res.data.url,
              email: params?.data?.email,
            });
          }
        } else {
          setMessage(res.data.message);
          messageRef.current.animate();
        }
      });
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}
    >
      <Header isText image titleText={"Checkout"} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
        pointerEvents={
          loading == true || couponLoading == true ? "none" : "box-only"
        }
      >
        <Text
          style={[
            styles.selectPayment,
            {
              color: colors.text,
            },
          ]}
        >
          Select Payment Method
        </Text>
        <View style={styles.payment}>
          {paymentMethods?.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setGatewayValue(item.name);
                checkout(products, item.name, wallet, points, "initial");
              }}
              activeOpacity={0.8}
              style={styles.selectClick}
            >
              {item.name != gatewayValue ? (
                <UnSelect width={windowWidth(26)} height={windowHeight(26)} />
              ) : (
                <Selected width={windowWidth(26)} height={windowHeight(26)} />
              )}
              <Text
                style={[
                  styles.paymentTitle,
                  {
                    color: colors.text,
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Summary
        error={error}
        setError={setError}
        couponApplied={couponApplied}
        couponLoading={couponLoading}
        gatewayValue={gatewayValue}
        checkoutData={checkoutData}
        checkout={checkout}
        products={products}
        points={points}
        setPoints={setPoints}
        coupon={coupon}
        setCoupon={setCoupon}
        wallet={wallet}
        navigation={navigation}
        setWallet={setWallet}
        params={params}
      />
      <Button
        text={"Place Order"}
        style={styles.btn}
        color={appColors.white}
        onPress={checkVal}
        loading={loading}
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
