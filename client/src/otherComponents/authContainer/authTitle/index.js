import React from "react";
import { View, Image, Text } from "react-native";
import Images from "@utils/images";
import { useValues } from "@utils/context";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

export function AuthTitle(props) {
  const { textRTLStyle, isDark, isRtl } = useValues();
  const { colors } = useTheme();
  return (
    <View>
      {/* <Image
        source={isDark ? Images.fastKartDark : Images.fastkart}
        style={[
          styles.fastkartImg,
          { alignSelf: isRtl ? 'flex-end' : 'flex-start' },
        ]}
      /> */}
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitleBlue}>Saradtha</Text>
        <Text style={styles.mainTitleBlack}>Stores</Text>
      </View>
      <Text style={[styles.online, { textAlign: textRTLStyle }]}>
        {props.description}
      </Text>
      <Text
        style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}
      >
        {props.title}
      </Text>
    </View>
  );
}