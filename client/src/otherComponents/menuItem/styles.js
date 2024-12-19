import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowHeight(20),
    paddingHorizontal: windowWidth(24)
  },
  txt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  txtLeft: {
    marginLeft: windowWidth(20),
  },
  txtRight: {
    marginRight: windowWidth(20),
  },
  arrow: {
    width: windowHeight(20),
    height: windowHeight(20),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
  },
  symbol: {
    fontFamily: appFonts.mulish,
    alignSelf: 'center',
    marginHorizontal: windowWidth(6),
    fontSize: fontSizes.FONT24,
  },
  currencyContainer: {
    alignItems: 'center',
  },
  count: {
    fontSize: fontSizes.FONT10,
    textAlignVertical: 'top',
    color: appColors.black,
    fontFamily: appFonts.mulish,
    height: windowHeight(12),
    width: windowWidth(18),
    textAlign: 'center',
    borderRadius: 20,
    lineHeight: windowHeight(12),
  },
});
