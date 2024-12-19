import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  arrowView: {
    alignItems: "center",
  },
  text: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.mulish,
    marginLeft: windowWidth(16),
  },
  image: {
    height: windowHeight(30),
    width: windowWidth(30),
  },
  headerImg: {
    marginLeft: windowWidth(14),
  },
  headerImgRight: {
    marginRight: windowWidth(14),
  },
  propText: {
    fontSize: fontSizes.FONT18,
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
  endText: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(20),
    fontSize: fontSizes.FONT22,
  },
});
