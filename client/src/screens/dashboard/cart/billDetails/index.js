import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { windowHeight } from "../../../../theme/appConstant";

export default billDetails = ({ total }) => {
  return (
    <View style={styles.billStructure}>
      <View style={styles.billTop}>
        <Text style={styles.billDetailTxt}>Bill Details</Text>
        <View
          style={[
            { height: 1, overflow: "hidden", marginTop: windowHeight(8) },
          ]}
        >
          <View
            style={[
              {
                height: 2,
                borderWidth: 2,
                borderColor: "#CCCCCC",
                borderStyle: "dashed",
              },
            ]}
          ></View>
        </View>
        <View style={styles.total}>
          <Text style={styles.mrp}>MRP Total</Text>
          <Text style={styles.mrpTotal}>₹ {total}</Text>
        </View>
      </View>
      <View style={styles.billBottom}>
        <Text style={styles.noteTxt}>Note *</Text>
        <Text style={styles.noteContent}>
          <Text style={styles.totalAmountTxt}>The total amount displayed</Text>{" "}
          <Text style={styles.spanTxt}>excludes the delivery charges </Text>
          <Text style={styles.totalAmountTxt}>by third-party partners</Text>
        </Text>
      </View>
    </View>
  );
};
