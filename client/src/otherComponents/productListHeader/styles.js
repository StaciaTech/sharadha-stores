import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginHorizontal: windowWidth(20),
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight(50),
    marginHorizontal: windowWidth(10),
  },
  logo: {
    height: windowHeight(46),
    width: windowWidth(46),
    resizeMode: 'contain',
    marginHorizontal: windowHeight(10),
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
    marginLeft: windowWidth(10),
  },
  iconView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  totalItem: {
    position: 'absolute',
    top: windowHeight(-1),
    right: windowWidth(-6),
    color: appColors.white,
    borderRadius: windowHeight(12),
    fontFamily: appFonts.mulish,
    width: windowHeight(12),
    height: windowHeight(12),
    textAlign: 'center',
    fontSize: fontSizes.FONT12,
    textAlignVertical: 'center',
  },
  cartClick: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(10),
  },
  titleView: {
    marginHorizontal: windowWidth(12),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  filterTotal: {
    height: windowHeight(12),
    width: windowWidth(18),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    right: windowWidth(-14),
    top: windowHeight(12),
  },
  totalTitle: {
    fontSize: fontSizes.FONT13,
    fontFamily: appFonts.mulish,
    lineHeight: windowHeight(10),
  },
});
