import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    paddingHorizontal: windowWidth(16),
    paddingTop: windowWidth(16),
  },
  title: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT20,
  },
  dropdown: {
    height: windowHeight(36),
    borderColor: appColors.gray,
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: windowWidth(16),
    width: windowWidth(440),
    alignSelf: 'center',
    marginVertical: windowHeight(10),
  },
  placeholderStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  selectedTextStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  err: {
    marginHorizontal: windowWidth(20),
  },
});
