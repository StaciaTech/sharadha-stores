import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";

export default styles = StyleSheet.create({
  total: {
    marginBottom: windowHeight(80),
    marginHorizontal: windowWidth(20),
  },
  btn: {
    width: "100%",
    backgroundColor: appColors.primary,
  },
});
