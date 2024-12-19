import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  btn: {
    width: "94%",
    backgroundColor: appColors.primary,
    position: "absolute",
    bottom: windowHeight(10),
    alignSelf: "center",
  },
  content: {
    paddingBottom: windowHeight(50),
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  downloadClick: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: windowWidth(24),
  },
  invoice: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(2),
  },
  subContainer: {
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth(20),
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
  },
  orderNo: {
    color: appColors.primary,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  border: {
    backgroundColor: "#d9d9d9",
    width: "100%",
    height: 1,
    marginVertical: windowHeight(16),
  },
  subClick: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: windowHeight(8),
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.modalBg,
    zIndex: 9999,
  },
  trackOrder: {
    height: windowHeight(60),
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 5,
  },
  curr: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
  payment: {
    color: "#db8827",
    fontFamily: appFonts.mulish,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    // alignItems: "center",
    rowGap: 15,
    width: "80%",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    backgroundColor: "rgba(23, 52, 157, 0.07)",
    width: "80%",
    // height: windowHeight(50),
    marginTop: windowHeight(10),
    borderRadius: 50,
    padding: 10,
    // marginHorizontal: windowWidth(20),
  },
  callBox: {
    backgroundColor: "rgba(23, 52, 157, 1)",
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
  },
  number: {
    color: "rgba(23, 52, 157, 1)",
    fontWeight: "600",
    fontSize: 16,
  },
});
