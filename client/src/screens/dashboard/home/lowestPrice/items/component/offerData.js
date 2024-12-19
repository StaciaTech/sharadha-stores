import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "@utils/context";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { NoImage } from "@utils/icons";
import FastImage from "react-native-fast-image";

const OfferData = ({ showOffer, item }) => {
  const { textRTLStyle, viewRTLStyle, isRTL } = useValues();
  const { colors } = useTheme();
  return (
    <>
      {showOffer && item?.discount != null && item?.discount != 0 && (
        <View
          style={[
            styles.discountView,
            {
              flexDirection: viewRTLStyle,
              alignSelf: isRTL ? "flex-end" : "flex-start",
            },
          ]}
        >
          <Text style={styles.discount}>
            {(item?.discount).toString()}% Off
          </Text>
        </View>
      )}
      {/* item?.product_thumbnail?.original_url */}
      {item?.original_url ? (
        <FastImage
          source={item?.original_url}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.noImage}>
          <NoImage width={windowWidth(80)} height={windowHeight(80)} />
        </View>
      )}
      <Text
        style={[styles.name, { color: colors.text, textAlign: textRTLStyle }]}
        numberOfLines={2}
      >
        {item.name}
      </Text>
      <Text style={[styles.gram, { textAlign: textRTLStyle }]}>
        {/* {item.unit} */} {item?.weight}g
      </Text>
    </>
  );
};

export default OfferData;
