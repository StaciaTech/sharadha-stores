import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  orderDetailView: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(10),
    paddingVertical: windowHeight(20),
  },
  idView: {
    marginLeft: windowWidth(10),
  },
  id: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
  orderDetail: {
    fontSize: fontSizes.FONT22,
    color: appColors.white,
    fontFamily: appFonts.mulishBold,
  },
  item: {
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.mulish,
    color: appColors.primary,
    marginTop: windowHeight(26),
  },
  listView: {
    marginHorizontal: windowWidth(20),
    alignItems: 'center',
    marginTop: windowHeight(10),
  },
  quantityTxt: {
    fontSize: fontSizes.FONT19,
    color: appColors.white,
    backgroundColor: appColors.primary,
    width: windowWidth(30),
    borderRadius: windowWidth(5),
    height: windowHeight(21),
    textAlignVertical: 'center',
    textAlign: 'center',
    marginRight: windowWidth(6),
    fontFamily: appFonts.mulish,
  },
  nameView: {
    marginHorizontal: windowWidth(20),
    flex: 1,
  },
  nameTxt: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  gramTxt: {
    fontSize: fontSizes.FONT18,
    color: '#4C5988',
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(2),
  },
  price: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  dataView: {
    marginTop: windowHeight(10),
  },
  addTxt: {
    marginLeft: windowWidth(20),
    fontFamily: appFonts.mulish,
    color: appColors.primary,
    fontSize: fontSizes.FONT24,
  },
  name: {
    marginLeft: windowWidth(20),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  locationTxt: {
    marginLeft: windowWidth(20),
    fontFamily: appFonts.mulish,
    color: appColors.content,
    fontSize: fontSizes.FONT21,
  },
  paymentView: {
    marginTop: windowHeight(20),
    marginBottom: windowHeight(80),
  },
  number: {
    flexDirection: 'row',
    marginLeft: windowWidth(20),
    alignItems: 'center',
  },
  masterCardImg: {
    height: windowHeight(60),
    width: windowWidth(60),
    resizeMode: 'contain',
  },
  cardNumber: {
    marginLeft: windowWidth(10),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT21,
  },
  btn: {
    width: '94%',
    backgroundColor: appColors.primary,
    position: 'absolute',
    bottom: windowHeight(10),
    alignSelf: 'center',
  },
  img: {
    width: windowWidth(70),
    height: windowHeight(50),
    borderRadius: 8,
  },
  rightSpace: {
    paddingRight: windowWidth(80),
  },
  border: {
    borderBottomWidth: 1,
    marginTop: windowHeight(8),
    marginHorizontal: windowWidth(20),
    borderStyle: 'dashed',
    borderColor: '#A4A4A4'
  },
  refundView: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
  },
  refund: {
    backgroundColor: appColors.primary,
    width: windowWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(10),
  },
  refundTxt: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
});
