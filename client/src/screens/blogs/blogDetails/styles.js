import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  image: {
    width: '90%',
    height: windowHeight(160),
    borderRadius: 8,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: appColors.blog,
    marginVertical: windowHeight(10),
  },
  details: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
});
