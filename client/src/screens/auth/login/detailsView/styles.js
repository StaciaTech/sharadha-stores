import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  online: {
    marginTop: windowHeight(20),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: windowHeight(10),
    fontFamily: appFonts.mulish,
    color: appColors.content,
  },
  createAcc: {
    textAlign: "center",
    marginTop: windowHeight(16),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    color: appColors.content,
  },
  signUp: {
    color: appColors.primary,
    fontFamily: appFonts.mulishBold,
  },
  authSeperation: {
    alignItems: "center",
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  googleAuthContainerParent: {
    alignItems: "center",
  },
  googleAuthContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 8,
    backgroundColor: "#F5F5F5",
    width: "50%",
    borderRadius: 50,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  googleAuthtext: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});
