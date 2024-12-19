import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  otpInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: windowHeight(6),
    marginTop: windowHeight(10),
    fontFamily: appFonts.quickSand,
    fontSize: fontSizes.FONT26,
  },
  otpError: {
    fontSize: fontSizes.FONT19,
    marginLeft: windowWidth(4),
    marginTop: windowHeight(4),
    color: appColors.error,
    fontFamily: appFonts.mulish,
  },
  buttonSpacing: {
    marginTop: 62,
  },
});
