import { StyleSheet } from 'react-native';
import { windowWidth, fontSizes, windowHeight } from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: windowWidth(120),
  },
  clearCart: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT18,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  btn: {
    width: '100%',
    backgroundColor: appColors.primary,
  },
  // closeButton: {
  //   backgroundColor: '#ff4747',
  //   padding: 12,
  //   borderRadius: 8,
  // },
  // order placed popup
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    rowGap: 15,
    width: '80%',
  },
  title: {
    color: '#17349D',
    fontSize: 24,
    fontWeight: '600'
  },
  message: {
    color: "#000000",
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins',
    textAlign: 'center',
    lineHeight: windowHeight(20),
  }
});
