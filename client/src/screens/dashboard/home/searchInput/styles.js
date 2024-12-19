import { StyleSheet } from "react-native";
import { fontSizes, windowWidth, windowHeight } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  container: {
    width: windowWidth(440),
    height: windowHeight(46),
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: windowWidth(10),
  },
  searchHere: {
    color: appColors.content,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(10),
    textAlign: "left",
  },
});
