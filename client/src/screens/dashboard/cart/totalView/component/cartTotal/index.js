import { View, Text } from "react-native";
import React from "react";
import { useValues } from "@utils/context";
import styles from "./styles";
import { useSelector } from "react-redux";

const CartTotal = ({ props }) => {
  const { viewRTLStyle, isDark } = useValues();
  const { currSymbol, currValue } = useSelector((state) => state.other);
  console.log("++++++++++++++++++++++++++++");
  console.log(currSymbol);
  console.log("++++++++++++++++++++++++++++");
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}
    >
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Sub Total</Text>
        <Text style={styles.data}>
          {currSymbol} {(currValue * props?.price).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Shipping</Text>
        <Text style={styles.data}>Calculated at Checkout</Text>
      </View>
      <View style={[styles.dataView, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.data}>Tax</Text>
        <Text style={styles.data}>Calculated at Checkout</Text>
      </View>
    </View>
  );
};

export default CartTotal;
