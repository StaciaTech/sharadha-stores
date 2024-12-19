import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: windowHeight(4),
    borderColor: appColors.border,
    justifyContent: "space-around",
  },
  decrease: {
    marginRight: windowWidth(18),
  },
  increase: {
    marginLeft: windowWidth(18),
  },
  txt: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  button: {
    paddingVertical: windowHeight(10),
    paddingLeft: windowWidth(15),
    paddingRight: windowWidth(10),
  },
});
