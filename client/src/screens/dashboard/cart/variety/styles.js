import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@theme/appConstant";

export default styles = StyleSheet.create({
  variety: {
    // width: "35%",
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
});
