import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  skipContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(20),
    marginTop: windowHeight(16),
  },
  divider: {
    width: '100%',
    resizeMode: 'contain',
  },
  skipText: {
    color: appColors.primary,
    backgroundColor: 'white',
    position: 'absolute',
    paddingHorizontal: windowWidth(10),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
});
