import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(30),
    paddingHorizontal: windowWidth(16),
    borderRadius: windowWidth(20),
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  data: {
    fontSize: fontSizes.FONT19,
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
  dataView: {
    marginTop: windowHeight(12),
    justifyContent: 'space-between',
  },
  amountView: {
    marginTop: windowHeight(12),
    justifyContent: 'space-between',
    marginBottom: windowHeight(20),
    borderTopWidth: 1,
    paddingTop: windowHeight(10),
  },
  amount: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  price: {
    fontSize: fontSizes.FONT20,
    color: appColors.primary,
    fontFamily: appFonts.mulish,
  },
});
