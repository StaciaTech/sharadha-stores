import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  list: {
    width: '90%',
    alignSelf: 'center',
    marginTop: windowHeight(14),
    justifyContent: 'space-between',
    borderRadius: windowHeight(10),
    paddingHorizontal: windowHeight(10),
    paddingVertical: windowWidth(12),
  },
  optionTxt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  name: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.mulish,
    color: appColors.white,
    backgroundColor: appColors.primary,
    paddingHorizontal: windowWidth(4),
    borderRadius: 3,
    paddingVertical: windowHeight(1),
  },
  add: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
    color: appColors.content,
    marginTop: windowHeight(2),
  },
  optionContainer: {
    width: windowWidth(90),
    justifyContent: 'space-between',
  },
  option: {
    height: windowWidth(40),
    width: windowWidth(40),
    borderRadius: 6,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.modalBg,
  },
  modalContent: {
    paddingHorizontal: windowWidth(10),
    paddingVertical: windowHeight(15),
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: windowHeight(20),
    textAlign: 'center',
    fontFamily: appFonts.mulish
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginHorizontal: windowWidth(15),
  },
  deleteButton: {
    backgroundColor: appColors.primary,
    paddingHorizontal: windowWidth(50),
    paddingVertical: windowHeight(10),
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: appColors.gray,
    paddingHorizontal: windowWidth(50),
    paddingVertical: windowHeight(10),
    borderRadius: 5,
  },
  buttonText: {
    color: appColors.white,
    textAlign: 'center',
    fontFamily: appFonts.mulish,
  },
});
