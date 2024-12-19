import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  Linking
} from "react-native";
import { Header, Total, Button } from "@commonComponents";
import appColors from "@theme/appColors";
import { useRoute, useTheme } from "@react-navigation/native";
import { GlobalStyle } from "@style";
import CustomerView from "./customerView";
import ItemsView from "./itemsView/index";
import { useDispatch, useSelector } from "react-redux";
import { trackOrder } from "@api/store/actions";
import { OrderDetailsView } from "@otherComponents";
import { updateDetails } from "@api/store/reducers/orderReducer";
import { useValues } from "@utils/context";
import SubDetails from "./component/subDetails";
import Invoice from "./component/invoice";
import SubDetailData from "./component/subDetailData";
import { getValue } from "@utils/localStorage";
import styles from "./styles";
import images from "@utils/images";
import { Call, Cancel } from "@utils/icons";
import { windowHeight, windowWidth } from "../../../theme/appConstant";

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

const OrderCancelPopup = ({ visible, onClose, onNavigate }) => {
  // useEffect(() => {
  //   let timer;
  //   if (visible) {
  //     timer = setTimeout(() => {
  //       onClose();
  //     }, 3000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [visible]);

  const makePhoneCall = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl).catch(err =>
      console.error('Error occurred while trying to make a phone call:', err)
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#E5E5E5', borderBottomWidth: 1, borderStyle: 'dashed', }}>
         <Text style={{ color: "#000000", fontWeight: "500" }}>
            Cancel Order
          </Text>
          <TouchableOpacity onPress={onClose}>
          <Cancel  width={windowWidth(25)} height={windowHeight(25)} />
          </TouchableOpacity>
         </View>
          <Text style={{ color: "#000000", fontWeight: "500" }}>
            To cancel your order, please call the provided number.
          </Text>
          <View style={styles.callContainer}>
            <View style={styles.callBox}>
              <Call />
            </View>
            <TouchableOpacity onPress={() => makePhoneCall("+916374588616")}>
              <Text style={styles.number}>+91 6374588616 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export function OrderDetails({ navigation, route }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  console.log("[][][][][][][][]", route.params.item);
  const { orderId, customerId, grandTotal } = route.params.item;
  const { orderDetail, loading } = useSelector((state) => state.order);
  const { currSymbol, currValue } = useSelector((state) => state.other);
  const { viewRTLStyle, token } = useValues();
  const [loadings, setLoading] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const email = token ? await getValue("email") : route?.params?.email;
    const data = {
      order_number: route.params.id,
      email_or_phone: email,
    };
    dispatch(trackOrder(data));
  };

  const goToList = () => {
    const item = {
      subTotal: orderDetail?.amount,
      shipping: orderDetail?.shipping_total,
      tax: orderDetail?.tax_total,
      total: orderDetail?.total,
      orderNo: orderDetail?.order_number,
    };
    navigation.navigate("SelectPayment", { from: "failed", item });
  };

  const goToDetails = (item) => {
    dispatch(updateDetails(item));
    navigation.navigate("OrderTracking", { id: item.order_number });
  };

  const goToRefund = (item) => {
    navigation.navigate("OrderRefund", { item, getData });
  };

  // const gotoTrack = () => {
  //   navigation.navigate('OrderTracking', {id: orderId});
  // };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 100 }]}
      >
        <View
          style={[
            styles.container,
            {
              flexDirection: viewRTLStyle,
            },
          ]}
        >
          <Header
            showImage={false}
            isText
            titleText={"Order Summary"}
            width={"70%"}
          />
          {orderDetail?.order_status?.name === "delivered" ? (
            <Invoice
              orderNumber={orderDetail?.order_number}
              setLoading={setLoading}
            />
          ) : null}
        </View>
        <View style={{ marginHorizontal: windowWidth(24)}}>
        <View style={{ gap: 5 }}>
          <Text style={{ color: '#000000', fontWeight: '600', fontSize: 16 }}>Order ID: {orderId}</Text>
          <Text style={{ color: '#000000' }}>Store location: Vadapalani</Text>
          <Text style={{ color: '#000000', fontWeight: '600' }}>{currSymbol} {grandTotal}</Text>
        </View>

        </View>
        {/* <OrderDetailsView
          showLoader={loading}
          orderNumber={orderDetail?.order_number}
          status={orderDetail?.order_status?.name}
        /> */}
        <ItemsView
          showLoader={loading}
          colors={colors}
          data={route.params.item.products}
          status={orderDetail?.order_status?.slug}
          goToRefund={goToRefund}
        />
        <CustomerView details={orderDetail} showLoader={loading} />
        {/* <Total
          color={appColors.primary}
          title={'Payment Details'}
          orderDetails={orderDetail}
          showLoader={loading}
        /> */}
        {!loading && orderDetail?.sub_orders?.length > 0 && (
          <View style={styles.subContainer}>
            <SubDetails />
            <View style={styles.border} />
            {orderDetail?.sub_orders?.map((item, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => goToDetails(item)}
                  activeOpacity={0.8}
                  style={styles.subClick}
                >
                  <SubDetailData item={item} />
                  <Text style={styles.curr}>
                    {currSymbol} {(currValue * item.total).toFixed(2)}
                  </Text>
                  <Text style={styles.payment}>
                    {item.payment_status.charAt(0).toUpperCase() +
                      item.payment_status.slice(1).toLowerCase()}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
      <View style={[styles.trackOrder, { backgroundColor: colors.background }]}>
        <Button
          text={"Cancel Order"}
          style={styles.btn}
          color={appColors.white}
          onPress={() => setOpenCancel(true)}
        />
      </View>
      {!loading && orderDetail?.payment_status == "FAILED" && (
        <Button
          text={"Pay Now"}
          style={styles.btn}
          color={appColors.white}
          onPress={goToList}
        />
      )}
      {loadings && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={appColors.primary} />
        </View>
      )}
      <OrderCancelPopup
        visible={openCancel}
        onClose={() => setOpenCancel(false)}
      />
    </SafeAreaView>
  );
}
