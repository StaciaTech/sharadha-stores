import { StyleSheet } from "react-native";
import { fontSizes, windowWidth, windowHeight } from "@theme/appConstant";
import appFonts from "@theme/appFonts";

export default styles = StyleSheet.create({
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
        fontWeight :"700",
    },
    profileRight: {
        color: "transparent",
    }
});
