import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(10),
  },
  phoneInput: {
    paddingHorizontal: windowWidth(20),
  },
  button: {
    width: "90%",
    backgroundColor: appColors.primary,
    alignSelf: "center",
    marginBottom: windowHeight(20),
  },
  detailsLabel: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: windowWidth(24),
  },
  details: {
    marginBottom: windowHeight(10),
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: windowWidth(20),
    paddingVertical: windowHeight(10),
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },
  profileTitle: {
    color: "#000000",
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulishSemiBold,
    fontWeight: "700",
  },
  profileRight: {
    color: "transparent",
  },
});
