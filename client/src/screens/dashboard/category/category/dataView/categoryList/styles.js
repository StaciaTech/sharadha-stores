import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth(120),
    alignItems: 'center',
    height: windowHeight(90),
    justifyContent: 'flex-start',
  },
  categoryView: {
    width: windowWidth(90),
    height: windowHeight(52),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryImg: {
    height: windowHeight(35),
    width: windowWidth(50),
    // resizeMode: 'cover',
  },
  name: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.mulish,
    textAlign: 'center',
    width: windowWidth(100),
    marginTop: windowHeight(6),
  },
});
