import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import images from "@utils/images";

export default variety = () => {
  return (
    <View style={styles.variety}>
      <FastImage
        source={images.sambarPodi}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.varietyTxt}>Rice Variety's</Text>
    </View>
  );
};
