import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noSearch: {
    height: windowHeight(350),
    width: windowWidth(300),
    resizeMode: 'contain',
  },
  noResult: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulishBold,
  },
  tryAgain: {
    color: appColors.content,
    marginTop: windowHeight(16),
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
});
