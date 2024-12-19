import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  button: {
    width: '100%',
    height: windowHeight(46),
    borderRadius: windowHeight(6),
    marginTop: windowHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: windowWidth(26),
    height: windowHeight(20),
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: fontSizes.FONT18,
    marginLeft: windowWidth(10),
    fontFamily: appFonts.mulish,
  },
});
