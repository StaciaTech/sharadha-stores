import { StyleSheet, Dimensions } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@theme/appConstant";
import appFonts from "@theme/appFonts";

const SCREEN_WIDTH = Dimensions.get("window").width;
const NUM_COLUMNS = 3;

export default styles = StyleSheet.create({
  container: {
    rowGap: 25,
    paddingVertical: 15,
    // backgroundColor: "pink",
    alignItems: "center",
  },
  item: {
    width: SCREEN_WIDTH / NUM_COLUMNS - 25,
    height: windowHeight(45),
    backgroundColor: "#E8EDFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // margin: windowWidth(10),
    marginHorizontal: windowWidth(10),
    paddingVertical: 10,
    position: "relative",
  },
  category: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: windowWidth(20),
    marginVertical: windowHeight(10),
    height: windowHeight(40),
  },
  line: {
    width: "100%",
    height: windowHeight(1),
  },
  shopByCategory: {
    position: "absolute",
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    textAlign: "center",
    paddingHorizontal: windowWidth(10),
  },
  list: {
    paddingHorizontal: windowWidth(18),
  },
  separator: {
    height: windowHeight(20),
  },
  listView: {
    width: windowWidth(105),
    marginLeft: windowWidth(10),
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "blue",
  },
  imageView: {
    height: windowHeight(40),
    width: windowWidth(70),
    alignItems: "center",
    borderRadius: windowHeight(10),
    justifyContent: "center",
    backgroundColor: "red",
  },
  image: {
    width: windowWidth(60),
    height: windowHeight(60),
  },
  name: {
    // width: windowWidth(90),
    fontFamily: appFonts.mulish,
    textAlign: "center",
    marginTop: windowHeight(10),
    fontSize: fontSizes.FONT14,
    color: "#000000",
  },
  content: { flexDirection: "row" },
  img: {
    height: windowHeight(80),
    width: windowWidth(80),
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  catImg: {
    position: "absolute",
    // height: windowHeight(70),
    // width: windowWidth(70),
    bottom: -35,
  },
  traditional: {
    paddingHorizontal: windowWidth(20),
  },
  traditionalTxt: {
    color: '#17349D',
    fontSize: fontSizes.FONT15,
    fontWeight: '600'
  }
});
