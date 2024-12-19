import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    padding: windowHeight(16),
  },
  container: {
    flexDirection: 'row',
    paddingVertical: windowHeight(10),
  },
  detailContainer: {
    paddingHorizontal: windowWidth(4),
    paddingVertical: windowWidth(4),
    borderRadius: 4,
    marginLeft: windowWidth(10),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    paddingHorizontal: windowWidth(13),
    paddingVertical: windowHeight(7),
    borderRadius: 4,
  },
  textContainer: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
  },
  title: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT20,
  },
  line: {
    height: '200%',
    width: windowWidth(1),
    position: 'absolute',
    backgroundColor: appColors.error,
    transform: [{rotate: '-55deg'}],
    opacity: 1,
  },
});
