import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  selectPayment: {
    marginLeft: windowWidth(20),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  selectClick: {
    flexDirection: 'row',
    height: windowHeight(40),
    alignItems: 'center',
  },
  paymentTitle: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    marginLeft: windowWidth(10),
  },
  btn: {
    width: '90%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    marginBottom: windowHeight(15),
  },
  container: {
    paddingBottom: windowHeight(20),
  },
  payment: {
    paddingHorizontal: windowWidth(24),
    paddingTop: windowHeight(6),
  },
});
