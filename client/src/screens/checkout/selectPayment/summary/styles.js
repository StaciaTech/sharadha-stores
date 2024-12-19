import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: windowHeight(1),
    backgroundColor: appColors.placeholder,
  },
  list: {
    marginHorizontal: windowWidth(24),
    marginTop: windowHeight(10),
  },
  listView: {
    paddingVertical: windowHeight(20),
  },
  arrowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  type: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.mulishBold,
  },
  arrow: {
    height: windowHeight(26),
    width: windowHeight(26),
    borderRadius: windowHeight(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: windowHeight(6),
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
    borderColor: appColors.primary,
  },
  icon: {
    height: windowHeight(50),
    width: windowWidth(50),
    resizeMode: 'contain',
  },
  value: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    marginLeft: windowWidth(14),
  },
  selectView: {
    backgroundColor: appColors.primary,
    paddingHorizontal: windowWidth(6),
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopEndRadius: windowHeight(5),
    borderBottomStartRadius: windowHeight(5),
    paddingVertical: windowHeight(3),
  },
  valueList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(10),
    borderColor: appColors.primary,
    width: '50%',
  },
  valueTxt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    marginLeft: windowWidth(14),
  },
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
  placeholderStyle2: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulishBold,
  },
  selectedTextStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  paymentView: {
    paddingHorizontal: windowWidth(24),
    paddingTop: windowHeight(6),
  },
  billView: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: windowHeight(10),
  },
  subTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shippingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(5),
  },
  pointView: {
    flexDirection: 'row',
    marginTop: windowHeight(11),
    alignItems: 'center',
  },
  checkView: {
    height: windowHeight(15),
    width: windowHeight(15),
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: appColors.primary,
  },
  payTitle: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(14),
  },
  walletView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(5),
  },
  walletClick: {
    flexDirection: 'row',
    marginTop: windowHeight(10),
    alignItems: 'center',
  },
  couponView: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: appColors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginTop: windowHeight(10),
  },
  enterCode: {
    paddingHorizontal: windowWidth(14),
    fontFamily: appFonts.mulish,
    width: windowWidth(300),
    height: windowHeight(38),
  },
  apply: {
    height: windowHeight(38),
    width: windowWidth(100),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textApply: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
  },
  textSaved: {
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(6),
  },
  viewAll: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
  },
  errorText: {
    color: appColors.highLight,
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(6),
  },
  border: {
    width: '100%',
    marginTop: windowHeight(16),
    borderStyle: 'dashed',
    borderWidth: 0.8,
    borderColor: appColors.placeholder,
  },
  billTitle: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
    marginBottom: windowHeight(10),
  },
  couponTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  haveCode: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
  },
  pointNote: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(8),
    color: appColors.primary,
  },
});
