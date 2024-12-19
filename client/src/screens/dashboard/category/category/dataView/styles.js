import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(5),
  },
  image: {
    width: windowWidth(55),
    height: windowHeight(35),
  },
  categoryText: {
    paddingHorizontal: windowWidth(18),
    marginBottom: windowHeight(6),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  scrollContainer: {
    height: windowHeight(106),
    alignItems: 'flex-end',
    paddingHorizontal: windowWidth(20),
  },
  contentStyle: {
    paddingBottom: windowHeight(100),
    marginTop: windowHeight(10),
  },
});
