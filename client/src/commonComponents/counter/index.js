import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import appColors from "@theme/appColors";
import { Increase, Decrease } from "@utils/icons";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { useValues } from "@utils/context";
import styles from "./styles";

export function Counter(props) {
  const [count, setCount] = useState(props.quantity);
  const { isRTL } = useValues();

  useEffect(() => {
    setCount(props.quantity);
  }, [props.quantity]);

  const increaseCount = () => {
    // if (props.quantity < props.totalQuantity) {
    //   setCount(count + 1);
    //   props.increaseVal(count + 1);
    // }
    setCount(count + 1);
    props.increaseVal(count + 1);
  };

  const decreaseCount = () => {
    var val = count;
    if (val != 1) {
      setCount(val - 1);
    } else {
      setCount(0);
      props.setShow(true);
    }
    props.decreaseVal(val - 1);
  };

  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: props.bgColor,
          height: props.height,
          width: props.width,
          flexDirection: props.viewAlign,
        },
      ]}
    >
      <TouchableOpacity
        onPress={decreaseCount}
        style={[styles.button, { marginRight: isRTL ? 0 : windowWidth(10) }]}
      >
        <Decrease
          color={props.color}
          height={windowHeight(15)}
          width={windowWidth(15)}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.txt,
          { color: props.textColor ? props.textColor : appColors.primary },
        ]}
      >
        {count}
      </Text>
      <TouchableOpacity
        onPress={increaseCount}
        style={[
          styles.button,
          {
            marginLeft: isRTL ? 0 : windowWidth(10),
          },
        ]}
      >
        <Increase
          color={props.color}
          height={windowHeight(15)}
          width={windowWidth(15)}
        />
      </TouchableOpacity>
    </View>
  );
}
