import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(10),
  },
  lowestPriceView: {
    marginBottom: windowHeight(16),
    borderWidth: 1,
    width: windowWidth(170),
    borderRadius: windowHeight(6),
    marginHorizontal: windowWidth(10),
    elevation: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: windowWidth(120),
    height: windowHeight(80),
    alignSelf: 'center',
    marginTop: windowHeight(10),
  },
  name: {
    width: windowWidth(150),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    marginHorizontal: windowWidth(10),
    height: windowHeight(32),
  },
  gram: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(10),
    width: windowWidth(150),
  },
  priceView: {
    marginHorizontal: windowWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight(6),
  },
  price: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  increase: {
    width: windowWidth(140),
    height: windowHeight(30),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: windowHeight(10),
  },
  wishList: {
    position: 'absolute',
    right: windowWidth(10),
    top: windowHeight(2),
  },
  scroll: {
    paddingHorizontal: windowWidth(10),
  },
  discountView: {
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(24),
    marginLeft: windowWidth(10),
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(6),
    alignItems: 'center',
    paddingVertical: windowHeight(2),
    marginTop: windowHeight(8),
    alignSelf: 'flex-start',
  },
  discount: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT13,
  },
  noImage: {
    alignItems: 'center',
  },
  add: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
  quantity: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: windowWidth(10),
  },
});
