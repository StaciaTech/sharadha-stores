import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { HeaderArrow } from "@utils/icons";
import { useValues } from "@utils/context";
import { windowHeight, windowWidth } from "@theme/appConstant";
import styles from "./styles";

export function Header(props) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const { viewRTLStyle, imageRTLStyle, isRTL, isDark } = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: viewRTLStyle,
          height: props.height || windowHeight(60),
          width: props.width || "100%",
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.arrowView,
          {
            flexDirection: viewRTLStyle,
            paddingHorizontal: windowWidth(20),
            height: props.height || windowHeight(60),
            justifyContent: "center",
          },
        ]}
        onPress={() => goBack()}
      >
        <View style={{ transform: imageRTLStyle }}>
          <HeaderArrow />
        </View>
        {props.isText ? (
          <Text
            style={[
              styles.text,
              isRTL ? styles.headerImgRight : styles.headerImg,
              { color: colors.text },
            ]}
          >
            {props.titleText}
          </Text>
        ) : (
          <Image
            source={isDark ? props.darkImage : props.lightImage}
            style={[
              isRTL ? styles.headerImgRight : styles.headerImg,
              isDark ? props.darkStyle : props.lightStyle,
            ]}
          />
        )}
        <Text style={styles.propText}>{props.text}</Text>
      </TouchableOpacity>
      {props.showImage ? (
        <Image source={props.image} style={styles.image} />
      ) : (
        <TouchableOpacity activeOpacity={0.7} onPress={props.imageOnPress}>
          <Text style={[styles.endText, { color: colors.text }]}>
            {props.endText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
