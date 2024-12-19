import React, { useState } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
// import { RadioButton } from "react-native-paper";

export default orderType = ({ selectedOption, setSelectedOption }) => {


  const options = [
    {
      type: "Pickup at Store",
      desc: "Conveniently collect your order from our store.",
    },
    {
      type: "Delivery by store",
      desc: "Available within a 2 km radius of our store.",
    },
    {
      type: "Delivery by Partners",
      desc: "For locations beyond 2 km, let our delivery partners(like Dunzo etc) bring your order to your doorstep.",
    },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.orderType}>
      <Text style={styles.orderDesc}>Choose Order Type</Text>
      <View style={styles.orderTypeInner}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() => handleSelect(option.type)}
          >
            <View style={styles.radioCircle}>
              {selectedOption === option.type && (
                <View style={styles.selectedCircle} />
              )}
            </View>
            <View>
              <Text style={styles.orderTypeText}>{option.type}</Text>
              <Text style={styles.orderDesc}>{option.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
