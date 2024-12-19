import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    paddingVertical: windowHeight(16),
    marginHorizontal: windowWidth(20),
  },
  title: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT20,
  },
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT18,
    color: appColors.title,
    marginLeft: windowWidth(4),
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: windowWidth(10),
  },
});
