import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
  },
  saleImg: {
    width: windowWidth(100),
    height: windowHeight(30),
    resizeMode: 'contain',
  },
  saleTitle: {
    color: appColors.white,
    position: 'absolute',
    fontFamily: appFonts.mulish,
    textAlign: 'center',
    width: '80%',
  },
});
