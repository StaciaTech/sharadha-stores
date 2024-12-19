import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(16),
    borderBottomWidth: 1,
    alignItems: "center",
    height: windowHeight(50),
  },
  input: {
    marginHorizontal: windowWidth(12),
    fontFamily: appFonts.mulish,
    width: "82%",
    fontSize: fontSizes.FONT19,
  },
  productContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(14),
    rowGap: 5,
  },
  recentContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(6),
  },
  recentView: {
    justifyContent: "space-between",
    paddingVertical: windowHeight(8),
    alignItems: "center",
  },
  recent: {
    alignItems: "center",
    flex: 1,
  },
  scroll: { paddingBottom: windowHeight(60) },
  name: {
    fontFamily: appFonts.mulish,
    flex: 1,
    marginRight: windowWidth(50),
    marginLeft: windowWidth(10),
  },
  separator: {
    height: windowHeight(14),
    width: "100%",
    marginTop: windowHeight(10),
  },
  searchForContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  searchForItem: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  searchBoxContainer: {
    marginHorizontal: 16,
    backgroundColor: "#E8EDFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    columnGap: 5,
    borderRadius: 5,
    marginVertical: 16,
  },
  searchArrowTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  searchArrowText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
  },
  CartIconContainer: {
    padding: 10,
    backgroundColor: "#EFF3FF",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  searchFortitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
  },
  searchForTitlecontainer: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
});
