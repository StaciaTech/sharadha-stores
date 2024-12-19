import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: windowWidth(16),
    paddingBottom: windowHeight(5),
    position: 'absolute',
    bottom: windowHeight(0),
    alignItems: 'center',
    justifyContent: 'space-between',
    height: windowHeight(55)
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT4,
    marginLeft: windowWidth(10),
  },
});
