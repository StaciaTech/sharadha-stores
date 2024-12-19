import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  inputView: {
    borderRadius: windowHeight(4),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: windowHeight(50),
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
  },
  leftIcon: {
    position: 'absolute',
    left: windowWidth(14),
  },
  rightIcon: {
    position: 'absolute',
    right: windowWidth(20),
  },
  error: {
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(3),
    color: appColors.error,
    fontFamily: appFonts.mulish,
  },
  text: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  mr_40: {
    marginRight: windowWidth(40)
  },
  mr_20: {
    marginRight: windowWidth(20)
  },
  ml_20: {
    marginLeft: windowWidth(20)
  },
  ml_40: {
    marginLeft: windowWidth(40)
  },
});
