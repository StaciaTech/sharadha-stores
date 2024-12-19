import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  historyTitle: {
    marginTop: windowHeight(20),
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT21,
  },
  listContainer: {
    height: '100%',
    marginTop: windowHeight(10),
  },
  separator: {
    height: windowHeight(10),
  },
});
