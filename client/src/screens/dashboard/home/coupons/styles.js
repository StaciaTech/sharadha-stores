import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    paddingBottom: windowWidth(20),
    paddingTop: windowHeight(6),
  },
  dataView: {
    width: windowWidth(180),
    height: windowHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth(80),
    height: windowHeight(40),
    marginTop: windowHeight(20),
  },
  discount: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
    color: appColors.title,
  },
  upto: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.mulish,
    color: appColors.content,
  },
  content: {
    paddingHorizontal: windowWidth(20),
  },
});
