import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  containerStyle: {
    height: windowHeight(46),
    width: '100%',
    marginTop: windowHeight(10),
    borderWidth: 2,
    borderRadius: windowHeight(6),
    overflow: 'hidden',
  },
  codeStyle: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
    width: windowWidth(70),
    marginLeft: windowWidth(12),
  },
  pickerStyle: {
    backgroundColor: appColors.gray,
    width: windowWidth(70),
    paddingLeft: windowWidth(12),
  },
  inputStyle: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulish,
    height: windowHeight(50),
    color: appColors.black,
  },
  textContainer: {
    backgroundColor: appColors.gray,
    paddingLeft: 0,
  },
});
