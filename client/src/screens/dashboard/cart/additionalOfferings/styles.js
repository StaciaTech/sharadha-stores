import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";

export default styles = StyleSheet.create({
  additionalOfferings: {
    // marginHorizontal: windowWidth(20),
    // marginBottom: windowHeight(20),
  },
  title: {
    marginHorizontal: windowWidth(20),
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
  },
  desc: {
    color: "rgba(82, 82, 82, 1)",
    lineHeight: windowHeight(15),
    fontWeight: "400",
    marginTop: windowHeight(5),
    width: "90%",
    marginHorizontal: windowWidth(20),
  },
  provisions: {
    color: "rgba(23, 52, 157, 1)",
    fontWeight: "700",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    backgroundColor: "rgba(23, 52, 157, 0.07)",
    width: "65%",
    // height: windowHeight(50),
    marginTop: windowHeight(20),
    borderRadius: 50,
    padding: 10,
    marginHorizontal: windowWidth(20),
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
  scroll: {
    // paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(20),
    paddingLeft: windowWidth(20),
  },
  variety: {
    width: windowWidth(200),
    height: windowHeight(180),
    borderWidth: 1,
    borderColor: "rgba(229, 229, 229, 1)",
    padding: 10,
    borderRadius: 4,
    marginRight: windowWidth(20),
  },
  image: {
    height: windowHeight(120),
    borderRadius: 4,
  },
  varietyTxt: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 14,
    marginTop: windowHeight(10),
  },
  address: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 10,
  },
  addressTxt: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 14,
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(15),
  },
  addressDesc: {
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
    paddingBottom: windowHeight(25),
    color: "rgba(91, 91, 91, 1)",
    fontWeight: "500",
    lineHeight: 21,
  },
  btn: {
    backgroundColor: appColors.primary,
    marginHorizontal: windowWidth(20),
  },
  cod: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: windowHeight(10),
    shadowColor: "#0003", //r of the shadow
    shadowOffset: { width: 0, height: -4 }, // Horizontal and vertical offset
    shadowOpacity: 0.75, // Opacity of the shadow
    shadowRadius: 4, // Blur radius
    elevation: 4,
  },
  codTxt: {
    color: "#000000",
    fontWeight: "500",
  },
});
