import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  mainView: {
    width: "100%",
    // alignItems: "center",
    paddingHorizontal: windowWidth(16),
    marginTop: windowHeight(10),
    borderRadius: windowHeight(7),
    // paddingBottom: 16,
  },
  image: {
    width: windowWidth(80),
    height: windowHeight(80),
    // backgroundColor: "red",
  },
  lineView: {
    width: windowWidth(1),
    height: windowHeight(40),
    marginHorizontal: windowWidth(6),
    backgroundColor: "green",
  },
  counterView: {
    marginHorizontal: windowWidth(10),
    justifyContent: "center",
  },
  name: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
    width: windowWidth(260),
  },
  weight: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.mulish,
    color: appColors.content,
    textDecorationLine: "line-through",
  },
  priceView: {
    justifyContent: "space-between",
    width: windowWidth(316),
  },
  discountPriceView: {
    alignItems: "center",
  },
  price: {
    fontSize: fontSizes.FONT17HALF,
    fontFamily: appFonts.mulishBold,
  },
  discountView: {
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(24),
    marginLeft: windowWidth(10),
    justifyContent: "space-between",
    paddingHorizontal: windowWidth(6),
    alignItems: "center",
    paddingVertical: windowHeight(1),
  },
  discount: {
    textAlign: "center",
    textAlignVertical: "center",
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT13,
  },
  increase: {
    width: windowWidth(30),
    height: windowHeight(20),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  addCart: {
    width: windowWidth(100),
    // height: windowHeight(5),
    marginHorizontal: windowWidth(10),
  },
  nameContainer: {
    width: windowWidth(290),
  },
  saleContainer: {
    position: "absolute",
    height: windowHeight(25),
    width: windowWidth(60),
    top: windowHeight(5),
    left: windowWidth(6),
    zIndex: 1,
  },
  saleImage: {
    height: windowHeight(11),
    width: windowWidth(40),
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  saleText: {
    color: appColors.white,
    fontSize: fontSizes.FONT10,
    fontFamily: appFonts.mulish,
    marginRight: windowWidth(5),
  },
  noStock: {
    backgroundColor: appColors.primary,
    height: windowHeight(25),
    width: windowWidth(110),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: windowWidth(6),
    borderRadius: windowWidth(4),
    marginHorizontal: windowWidth(10),
  },
  noStockTitle: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
  },
});
