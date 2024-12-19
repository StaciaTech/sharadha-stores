import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  button: {
    borderRadius: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: windowWidth(10),
    fontFamily: appFonts.mulish,
  },
});
