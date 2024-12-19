import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HeaderArrow, Filter, Cart } from "@utils/icons";
import { useTheme, useNavigation } from "@react-navigation/native";
import { useValues } from "@utils/context";
import appColors from "@theme/appColors";
import { useSelector } from "react-redux";
import styles from "./styles";

export function ProductListHeader({
  total,
  title,
  viewRTLStyle,
  modalVisible,
}) {
  const { colors } = useTheme();
  const { isDark } = useValues();
  const { cartList } = useSelector((state) => state.cart);
  const data = cartList?.items || cartList || [];
  const { navigate, goBack } = useNavigation();
  const isValidTotal =
    total !== undefined && total !== null && total !== 0 && total !== "";

  const gotoCart = () => {
    navigate("CartList");
  };

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: viewRTLStyle,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.logoContainer}
        activeOpacity={0.7}
        onPress={() => goBack()}
      >
        <HeaderArrow />
        <Text
          style={[
            styles.titleView,
            {
              color: colors.text,
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <View style={styles.iconView}>
        <TouchableOpacity
          onPress={gotoCart}
          activeOpacity={0.7}
          style={styles.cartClick}
        >
          <Cart color={isDark ? appColors.white : appColors.black} />
          {data.length > 0 && (
            <Text
              style={[
                styles.totalItem,
                {
                  backgroundColor: isDark ? appColors.white : appColors.black,
                  color: isDark ? appColors.black : appColors.white,
                },
              ]}
            >
              {data && (
                <Text style={styles.totalTitle}>
                  {data.length || 0}
                  {data.length && data.length > 99 && "+"}
                </Text>
              )}
            </Text>
          )}
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.logoContainer}
          activeOpacity={0.8}
          onPress={modalVisible}>
          <Filter color={isDark ? appColors.white : appColors.black} />
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
              },
            ]}>
            Filters
          </Text>
          {isValidTotal && (
            <View
              style={[
                styles.filterTotal,
                {backgroundColor: isDark ? appColors.white : appColors.black},
              ]}>
              <Text
                style={[
                  styles.totalTitle,
                  {color: isDark ? appColors.black : appColors.white},
                ]}>
                {total}
              </Text>
            </View>
          )}
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
