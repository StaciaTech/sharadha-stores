import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { formatDate } from "@utils/helper";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import styles from "./styles";
import { windowHeight } from "../../../../../theme/appConstant";
import images from "@utils/images";
import items from "../../../../products/productList/productsView/items";
const OrderListItem = ({
  item,
  isDark,
  currSymbol,
  currValue,
  goToDetail,
  goToAddress,
  viewRTLStyle,
}) => {
  const { colors } = useTheme();
  const { textRTLStyle } = useValues();

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => goToDetail(item)}
      style={[
        styles.listView,
        // {
        //   backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
        // },
      ]}
    >
      <View style={[styles.idView, { flexDirection: viewRTLStyle }]}>
        <View style={{ flexDirection: viewRTLStyle }}>
          <Text style={[styles.data, { color: colors.text }]}>
            {/* ID: #{item?.order_number},{' '} */}
            Order ID: {item?.orderId}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Text style={styles.statusTitle}>Status:</Text> */}
          {
            item.status === 'delivered' ? <Image source={images.s1} /> : item.status === 'cancelled' ? <Image source={images.s4} /> : item.status === 'initiated' ? <Image source={images.s2} /> : <Image source={images.s3} />
          }
          <Text style={styles.paid}>
            {" "}
            {/* {capitalizeFirstLetter(item.order_status.name)} */}
           {item.status}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: viewRTLStyle }}>
        <Text style={{ color: "#000000", marginTop: 5 }}>
          {/* Order Date: {formatDate(item?.created_at, 'short')} */}
          Store location: Vadapalani
        </Text>
      </View>

      {/* {item?.billing_address?.street && (
        <Text style={[styles.add, {textAlign: textRTLStyle}]} numberOfLines={1}>
          {item?.billing_address?.street},{item?.billing_address?.city},
          {item?.billing_address?.state?.name}
        </Text>
      )} */}
      {/* <View style={styles.border} /> */}
      <View style={[styles.paidView, { flexDirection: viewRTLStyle }]}>
        <Text style={[styles.data1, { color: colors.text }]}>
          {currSymbol} {item?.grandTotal}
          {/* <Text style={styles.paid}>
            {currSymbol}
            {(currValue * item?.total).toFixed(2)}
          </Text> */}
        </Text>
      </View>
      <View style={{ flexDirection: viewRTLStyle }}>
        {item?.products.slice(0, 2).map((data, index) => (
          <Text
            key={index} 
            style={{ color: "#4C5988", marginTop: 5, fontWeight: "500" }}
          >
            {data?.name} , 
          </Text>
        ))}
        {item?.products.length > 2 && (
          <Text style={{ color: "#4C5988", marginTop: 5, fontWeight: "500" }}>
            ...
          </Text>
        )}
      </View>
      <Text style={{ color: "#4C5988", marginTop: 5, fontWeight: "500" }}>
        {/* Order Date: {formatDate(item?.created_at, 'short')} */}
        November 11, 6:30 PM
      </Text>
      <View style={styles.border} />

      <View style={{ flexDirection: "row", columnGap: 15 }}>
        <TouchableOpacity
          style={styles.viewDetails}
          onPress={() => goToDetail(item)}
        >
          <Text style={{ color: "#17349D" }}>View Details</Text>
          {/* <Text style={styles.data} onPress={() => goToAddress(item)}>
            {item?.payment_status == 'FAILED' ? 'Pay Now' : 'Order Details'}
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.status} onPress={() => navigation}>
          <Text style={{ color: "#fff" }}>Reorder</Text>
          {/* <Text style={styles.data} onPress={() => goToAddress(item)}>
            {item?.payment_status == 'FAILED' ? 'Pay Now' : 'Order Details'}
          </Text> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListItem;
