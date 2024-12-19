import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";

export default styles = StyleSheet.create({
  orderType: {
    marginBottom: windowHeight(20),
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  orderTypeInner: {
    backgroundColor: "#F5F5F5",
    borderRadius: windowHeight(10),
    padding: 10,
    marginTop: windowHeight(12),
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: "row",
    // alignItems: "center",
    marginVertical: 8,
    padding: 10,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#8D8D8D",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  selectedCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "#17349D",
    borderColor: "#17349D",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    color: "#17349D",
  },
  orderTypeText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
    marginBottom: windowHeight(4),
  },
  orderDesc: {
    color: "#8D8D8D",
    lineHeight: 25,
    fontWeight: "400",
  },
});
