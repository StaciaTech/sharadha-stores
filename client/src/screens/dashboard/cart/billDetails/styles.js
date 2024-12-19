import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";

export default styles = StyleSheet.create({
  billStructure: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(20),
  },
  billTop: {
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: windowHeight(10),
    borderTopRightRadius: windowHeight(10),
  },
  billBottom: {
    backgroundColor: "#FFE5E5",
    borderBottomLeftRadius: windowHeight(10),
    borderBottomRightRadius: windowHeight(10),
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(15),
  },
  noteTxt: {
    color: "#E80000",
    fontWeight: "600",
  },
  billDetailTxt: {
    color: "#000000",
    fontSize: 14,
    paddingHorizontal: windowWidth(25),
    marginTop: windowHeight(15),
    fontWeight: "500",
  },
  mrp: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
  },
  mrpTotal: {
    color: "#17349D",
    fontSize: 16,
    fontWeight: "600",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(20),
  },
  noteContent: {},
  totalAmountTxt: {
    color: "#000000",
    fontWeight: "400",
    lineHeight: 25,
  },
  spanTxt: {
    color: "rgba(232, 0, 0, 1)",
    fontWeight: "400",
  },
});
