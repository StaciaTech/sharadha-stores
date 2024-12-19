import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: windowHeight(16),
    marginTop: windowHeight(10),
  },
  brands: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(18),
    fontSize: fontSizes.FONT19,
  },
  contentStyle: {
    paddingHorizontal: windowWidth(20)
  },
  separator: {
    width: windowWidth(16)
  },
  mainContainer: {
    height: windowHeight(70),
    paddingHorizontal: windowWidth(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: windowHeight(10),
    alignSelf: 'flex-start',
  },
  img: {
    height: windowHeight(60),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
});
