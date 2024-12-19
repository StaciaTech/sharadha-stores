import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  counterView: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: windowHeight(46),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  counter: {
    width: '50%',
    height: '100%',
    paddingHorizontal: windowWidth(30),
  },
  cartContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  decrease: {
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  val: {
    color: appColors.primary,
    fontSize: fontSizes.FONT19,
    width: '33%',
    height: '100%',
    fontFamily: appFonts.mulish,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buynowContainer: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.primary,
  },
  buynow: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
});
