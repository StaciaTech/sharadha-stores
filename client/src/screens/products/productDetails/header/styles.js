import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    padding: windowWidth(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    height: windowHeight(30),
    width: windowWidth(40),
    justifyContent: 'center',
  },
  details: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  options: {
    width: windowWidth(70),
    justifyContent: 'space-between',
  },
  items: {
    position: 'absolute',
    top: windowHeight(-1),
    right: windowWidth(-6),
    color: appColors.white,
    borderRadius: windowHeight(12),
    backgroundColor: appColors.black,
    fontFamily: appFonts.mulish,
    width: windowHeight(12),
    height: windowHeight(12),
    textAlign: 'center',
    fontSize: fontSizes.FONT12,
    textAlignVertical: 'center',
  },
});
