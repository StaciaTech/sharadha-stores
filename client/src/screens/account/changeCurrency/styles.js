import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  logo: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
    color: appColors.primary,
  },
  icon: {
    alignItems: 'center',
    marginTop: windowHeight(10),
  },
  symbol: {
    height: windowHeight(26),
    width: windowHeight(26),
    borderRadius: windowHeight(20),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderBottomWidth: 0.5,
    marginTop: 10,
    borderBottomColor: appColors.variantUnSelectedBorder,
  },
  currency: {
    marginHorizontal: 15,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selected: {
    marginTop: 15,
  },
});
