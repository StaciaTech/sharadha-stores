import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  contentStyle: {
    paddingBottom: windowHeight(100),
  },
  subView: {
    borderTopStartRadius: windowWidth(25),
    borderTopEndRadius: windowWidth(25),
    paddingVertical: windowWidth(20),
  },
  separator: {
    height: 1,
    width: '100%',
  },
  btnText: {
    color: appColors.white,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
  },
  btnSubmit: {
    height: windowHeight(34),
    width: windowWidth(160),
    backgroundColor: appColors.primary,
    borderRadius: 6,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(10),
  },
  errorMsg: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(4),
    marginVertical: windowHeight(4),
  },
  queInput: {
    height: windowHeight(100),
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: windowHeight(4),
    textAlignVertical: 'top',
    paddingVertical: windowHeight(10),
    paddingHorizontal: windowWidth(10),
    fontFamily: appFonts.mulish,
  },
  queTitle: {
    marginTop: windowHeight(10),
    fontFamily: appFonts.mulish,
  },
  qurProductName: {
    fontFamily: appFonts.mulish,
    width: windowWidth(360),
  },
  qurImage: {
    height: windowHeight(44),
    width: windowWidth(54),
    resizeMode: 'contain',
  },
  imageContainer: {
    height: windowHeight(40),
    width: windowHeight(40),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  space: {
    marginHorizontal: windowWidth(10),
  },
  modalContainer: {
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: windowWidth(20),
  },
  modalSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  askTitle: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  closeBtn: {
    width: windowWidth(40),
    alignItems: 'flex-end',
  },
  modalMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(6),
  },
  // new
  individualImageBox: {
    width: '100%',
    height: windowHeight(350),
  },
  individualImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  btn: {
    width: '90%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    marginBottom: windowHeight(15),
  },
  increase: {
    // width: '100%',
    height: windowHeight(45),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.primary,
    alignItems: "center",
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
    // marginTop: windowHeight(24)
  },
  quantity: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    paddingHorizontal: windowWidth(40)
  },
  add: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
});
