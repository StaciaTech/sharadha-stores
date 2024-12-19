import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  btn: {
    width: '90%',
    marginBottom: windowHeight(20),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  options:{paddingHorizontal: windowWidth(24)},
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(20),
    marginBottom: windowHeight(10),
  }
});
