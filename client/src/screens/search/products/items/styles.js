import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: windowHeight(50),
    width: windowWidth(70),
    resizeMode: 'stretch',
  },
  categoryContainer: {
    marginHorizontal: windowWidth(20),
  },
  categoryName: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
});
