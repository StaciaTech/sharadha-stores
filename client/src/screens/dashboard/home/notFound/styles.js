import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    paddingBottom: windowHeight(60),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  didntFind: {
    fontSize: fontSizes.FONT28,
    fontFamily: appFonts.mulish,
    color: appColors.placeholder,
    paddingHorizontal: windowWidth(15),
    width: '100%',
  },
  textView: {
    height: windowHeight(34),
    width: windowWidth(170),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(20),
  },
  text: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT17,
    color: appColors.white,
  },
  bottomImg: {
    position: 'absolute',
    bottom: windowHeight(0),
    width: '100%',
    height: windowHeight(290),
  },
});
