import { StyleSheet } from "react-native";
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: windowWidth(20),
        paddingVertical: windowHeight(10),
        zIndex: 10,
      },
      headerTxt: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000",
      },
      cart: {
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        backgroundColor: "#EFF3FF",
      },
      leftHeader: {
        width: windowHeight(35),
        height: windowHeight(35),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: windowHeight(35) / 2,
        backgroundColor: "#E8EDFF",
        // padding: 8,
      },
      right: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
      }
})