import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingBottom: windowHeight(16),
  },
  optionContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  option: {
    width: '50%',
    alignItems: 'center',
    height: windowHeight(40),
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
});
