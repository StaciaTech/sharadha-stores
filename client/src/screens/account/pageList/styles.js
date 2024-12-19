import { StyleSheet } from "react-native";
import { fontSizes, windowWidth, windowHeight } from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  mainView: {
    // paddingHorizontal: windowWidth(24),
    // borderBottomColor: '#E5E5E5',
    // borderBottomWidth: 1
  },
  signOutView: {
    alignItems: "center",
    width: windowWidth(180),
    justifyContent: "center",
    marginBottom: windowHeight(20),
    height: windowHeight(50),
    borderRadius: windowHeight(10),
    marginTop: windowHeight(20),
  },
  signOut: {
    marginHorizontal: windowWidth(10),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  menu: {
    marginLeft: -2,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: windowHeight(20),
  },
  headerTxt: {
    color: "#000000",
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.mulish,
    marginLeft: windowWidth(16),
  },
  username: {
    color: "#000000",
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    fontWeight: "700"
  },
  userMobile: {
    color: "#000000",
    fontSize: fontSizes.FONT14,
    fontFamily: appFonts.mulish,
  },
  account: {
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
    paddingHorizontal: windowWidth(24),
    backgroundColor: "#F5F5F5",
    paddingVertical: windowHeight(20),
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  mainViewEdit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: windowHeight(20),
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    paddingHorizontal: windowWidth(24),
  },
  mainViewEditTitle: {
    color: "#000000",
    fontSize: fontSizes.FONT16,
    fontWeight: "500"
  },
  mainViewEditTitleLog: {
    color: '#DC6911',
    fontSize: fontSizes.FONT16,
    fontWeight: "500"
  },
  pageList: {
    // paddingHorizontal: windowWidth(24)
  }
});
