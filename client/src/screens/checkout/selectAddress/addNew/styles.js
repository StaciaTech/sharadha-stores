import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  newAddView: {
    width: '90%',
    paddingVertical: windowHeight(8),
    borderRadius: windowHeight(4),
    borderWidth: 1,
    borderColor: appColors.content,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addAdd: {
    fontSize: fontSizes.FONT19,
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
});
