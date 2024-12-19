import { Dimensions, StyleSheet } from "react-native";
import { fontSizes, windowWidth, windowHeight } from "@theme/appConstant";
import appFonts from "@theme/appFonts";
import appColors from "@theme/appColors";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("screen").height / 1.4,
    width: "100%",
  },
  img: {
    height: windowHeight(170),
    width: windowWidth(320),
    resizeMode: "contain",
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT23,
    marginTop: windowHeight(20),
  },
  subTitle: {
    fontFamily: appFonts.mulishBold,
    marginTop: windowHeight(6),
    width: "80%",
    textAlign: "center",
  },
  button: {
    width: "50%",
    backgroundColor: appColors.primary,
  },
});
