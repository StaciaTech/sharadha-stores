import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import { useTheme } from "@react-navigation/native";
import { DeleteAdd, Edit } from "@utils/icons";
import { windowWidth } from "@theme/appConstant";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../api/store/reducers/deliveryAddReducer";

export function Address({
  id,
  borderColor,
  onPress,
  title,
  street,
  city,
  country,
  pincode,
  phone,
  showDelete,
  editPress,
  deletePress,
  countryCode,
  state,
}) {
  const { textRTLStyle, viewRTLStyle, isDark, isRTL } = useValues();
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleAddAddress = () => {
    setShowModal(true);
  };

  const handleDeleteAddress = (index) => {
    console.log(index);
    dispatch(removeAddress(index));
  };

  return (
    <View
      style={[
        styles.list,
        {
          backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
          flexDirection: viewRTLStyle,
          borderWidth: 1.5,
          borderColor: borderColor,
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{ width: showDelete ? windowWidth(280) : windowWidth(360) }}
      >
        <Text
          style={[
            styles.name,
            {
              textAlign: textRTLStyle,
              alignSelf: isRTL ? "flex-end" : "flex-start",
            },
          ]}
        >
          {title}
        </Text>
        <Text style={[styles.add, { textAlign: textRTLStyle }]}>
          {street +
            ", " +
            city +
            ", " +
            state +
            ", " +
            pincode +
            ", " +
            country}
        </Text>
        {/* <Text style={[styles.add, {textAlign: textRTLStyle}]}></Text> */}
        <Text style={[styles.add, { textAlign: textRTLStyle }]}>
          +{countryCode} {phone}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDeleteAddress(handleDeleteAddress)}
        style={{ flexDirection: "row", justifyContent: "flex-end" }}
      >
        <DeleteAdd />
      </TouchableOpacity>
    </View>
  );
}
