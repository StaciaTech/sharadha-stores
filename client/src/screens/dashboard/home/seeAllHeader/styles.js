import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight(16),
    marginTop: windowHeight(6),
    marginHorizontal: windowWidth(20),
  },
  title: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  subTitle: {
    fontSize: fontSizes.FONT18,
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
  seeAll: {
    fontSize: fontSizes.FONT17,
    color: appColors.primary,
    fontFamily: appFonts.mulish,
  },
  details: {
    width: '80%',
  },
});
