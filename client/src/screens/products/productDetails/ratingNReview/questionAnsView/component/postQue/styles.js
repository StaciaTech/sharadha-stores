import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  postQuestion: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    paddingHorizontal: windowWidth(20),
    textAlign: 'right',
  },
  postQuestionContainer: {
    paddingVertical: windowHeight(10),
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    borderRadius: windowWidth(8),
  },
});
