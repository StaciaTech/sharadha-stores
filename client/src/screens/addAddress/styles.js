import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  dropdown: {
    height: windowHeight(44),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: windowWidth(16),
    width: windowWidth(440),
    alignSelf: 'center',
    marginTop: windowHeight(10),
  },
  placeholderStyle: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  selectedTextStyle: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  scrollView: {
    paddingBottom: windowHeight(20),
    marginHorizontal: windowWidth(20)
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20
  },
  error: {
    color: appColors.error,
    marginTop: windowHeight(4),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
  },
  btn: {
    width: '100%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
  },
});
