import React from "react";
import { View, Text } from "react-native";
import appColors from "@theme/appColors";
import { useTheme } from "@react-navigation/native";
import { windowWidth } from "@theme/appConstant";
import Loader from "./loader";
import { useValues } from "@utils/context";
import styles from "./styles";
import { useSelector } from "react-redux";

export function Total({
  color,
  orderDetails,
  title,
  showLoader,
  style,
  bottom,
}) {
  const { colors } = useTheme();
  const { textRTLStyle, viewRTLStyle, isDark } = useValues();
  const { currSymbol, currValue } = useSelector((state) => state.other);
  console.log("{}{}{}", currValue);
  return showLoader ? (
    <Loader />
  ) : (
    <View
      style={
        style
          ? [
              styles.mainView,
              {
                backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
                marginBottom: bottom,
              },
            ]
          : { padding: windowWidth(20) }
      }
    >
      <Text
        style={[
          styles.title,
          {
            color: color || colors.text,
            textAlign: textRTLStyle,
          },
        ]}
      >
        {title}
      </Text>
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Sub Total</Text>
        <Text style={styles.data}>
          {currSymbol}
          {(currValue * orderDetails?.amount).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Shipping</Text>
        <Text style={styles.price}>
          {currSymbol}
          kmjbmkjb
          {/* {(currValue * orderDetails?.shipping_total).toFixed(2)} */}
        </Text>
      </View>
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Tax</Text>
        <Text style={styles.price}>
          {currSymbol}
          {(currValue * orderDetails?.tax_total).toFixed(2)}
        </Text>
      </View>
      {orderDetails?.coupon_total_discount > 0 && (
        <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
          <Text style={styles.data}>Discount</Text>
          <Text style={styles.price}>
            - {currSymbol}
            {(currValue * orderDetails?.coupon_total_discount).toFixed(2)}
          </Text>
        </View>
      )}
      {orderDetails?.points_amount > 0 && (
        <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
          <Text style={styles.data}>Points</Text>
          <Text style={styles.price}>
            {currSymbol}
            {(currValue * orderDetails?.points_amount).toFixed(2)}
          </Text>
        </View>
      )}
      {orderDetails?.wallet_balance > 0 && (
        <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
          <Text style={styles.data}>Wallet</Text>
          <Text style={styles.price}>
            {currSymbol}
            {(currValue * orderDetails?.wallet_balance).toFixed(2)}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.amountView,
          { flexDirection: viewRTLStyle, borderTopColor: colors.border },
        ]}
      >
        <Text style={[styles.amount, { color: colors.text }]}>
          Total Amount
        </Text>
        <Text style={[styles.amount, { color: colors.text }]}>
          {currSymbol}
          {(currValue * orderDetails?.total).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
