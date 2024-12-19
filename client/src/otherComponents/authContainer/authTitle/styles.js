import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  fastkartImg: {
    marginTop: windowHeight(30),
    height: windowHeight(18),
    width: windowWidth(150),
    resizeMode: 'stretch',
  },
  online: {
    marginTop: windowHeight(20),
    fontFamily: appFonts.nunitoSans,
    color: appColors.content,
    fontSize: fontSizes.FONT18,
  },
  title: {
    marginTop: windowHeight(20),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
});
