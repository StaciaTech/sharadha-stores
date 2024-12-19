import React from "react";
import { View } from "react-native";
import { Button } from "@commonComponents";
import appColors from "@theme/appColors";
import { useValues } from "@utils/context";
import CartTotal from "./component/cartTotal/index";
import styles from "./styles";

export default totalView = (props) => {
  const { token } = useValues();
  const goToAddress = () => {
    if (token) {
      props.navigation.navigate("SelectDelivery");
    } else {
      props.navigation.navigate("AddAddress");
    }
  };

  return (
    <View style={styles.total}>
      <CartTotal props={props} />
      {!props.showLoader && (
        <Button
          text={"Proceed To Checkout"}
          style={styles.btn}
          color={appColors.white}
          onPress={goToAddress}
        />
      )}
    </View>
  );
};
