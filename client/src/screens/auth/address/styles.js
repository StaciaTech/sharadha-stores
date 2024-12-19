import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  addressFromContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginTop: 70,
    paddingHorizontal: 16,
    paddingTop: 40,
    borderRadius: 5,
    elevation: 2,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  mainTitleContainer: {
    flexDirection: "row",
  },
  mainTitleBlue: {
    color: "#17349D",
    fontSize: fontSizes.FONT24,
    fontWeight: "600",
  },
  mainTitleBlack: {
    color: "#000",
    fontSize: fontSizes.FONT24,
    fontWeight: "600",
  },
  mainDescription: {
    fontSize: 14,
    color: "#4C5988",
    lineHeight: 21,
    marginVertical: 10,
  },
  addressFormbtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 8,
    borderTopWidth: 1,
    paddingVertical: 28,
    borderTopColor: "#000",
    marginTop: 16,
  },
  addressNextBtn: {
    backgroundColor: "#17349D",
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#17349D",
  },
  addressCancelBtn: {
    backgroundColor: "#EEF2FF",
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#17349D",
  },
  addressInputTitles: {
    color: "#000",
    fontWeight: "500",
    marginVertical: 8,
  },
});
