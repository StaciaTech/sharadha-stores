import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: windowHeight(10),
    marginVertical: windowHeight(10),
    borderRadius: 6,
  },
  text: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.mulish,
  },
  center: {
    alignItems: 'center',
  },
});
