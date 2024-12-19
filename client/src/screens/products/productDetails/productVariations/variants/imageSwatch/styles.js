import { StyleSheet } from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    padding: windowHeight(16),
  },
  title: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT20,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  detailContainer: {
    height: windowHeight(56),
    width: windowWidth(76),
    borderRadius: windowWidth(8),
    marginLeft: windowWidth(14),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: windowWidth(70),
    width: windowWidth(1),
    position: 'absolute',
    backgroundColor: appColors.error,
    transform: [{ rotate: '-43deg' }],
    opacity: 0.4,
  },
  img: {
    height: windowHeight(80),
    width: windowWidth(70),
  },
});
