import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Cart, Search } from "@utils/icons";
export default categoryHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}>Category</Text>
      <View style={styles.right}>
        <View style={styles.leftHeader}>
          {/* <TouchableOpacity style={styles.cart}> */}
            <Search color={"#17349D"} />
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.leftHeader}>
          <TouchableOpacity style={styles.cart}>
            <Cart color={"#17349D"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
