import { StyleSheet } from 'react-native';
import { windowWidth, fontSizes } from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: windowWidth(120),
  },
  clearCart: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT18,
  },
});
