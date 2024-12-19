import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Search } from "@utils/icons";
import styles from "./styles";
import { useValues } from "@utils/context";

export default searchInput = ({ onPress, colors }) => {
  const { viewRTLStyle } = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: "#E8EDFF",
          borderColor: "transparent",
          flexDirection: viewRTLStyle,
        },
      ]}
    >
      <Search />
      <Text style={styles.searchHere}>Search Product Here..</Text>
    </TouchableOpacity>
  );
};
