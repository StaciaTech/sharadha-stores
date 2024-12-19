import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  content: {
    paddingBottom: windowHeight(20),
  },
  separator: {
    height: windowHeight(10),
  },
  productStyle: {
    borderRadius: 0,
    borderTopStartRadius: 10,
    marginTop: windowHeight(0),
  },
  cartContainer: {
    height: windowHeight(18),
    width: windowWidth(130),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    borderRadius: windowWidth(15),
  },
  cart: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
  },
});
