import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  separator: {
    height: windowHeight(16),
  },
  contentStyle: {
    paddingHorizontal: windowWidth(20),
    paddingBottom: windowHeight(75),
  },
  mainView: {
    width: '100%',
    alignItems: 'center',
    elevation: 2,
    borderRadius: 6,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: windowHeight(120),
    borderRadius: 6,
  },
  title: {
    textAlign: 'center',
    marginTop: windowHeight(14),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  description: {
    color: appColors.content,
    width: '90%',
    textAlign: 'center',
    marginTop: windowHeight(2),
    fontFamily: appFonts.mulish,
  },
  readMoreContainer: {
    width: '100%',
    height: windowHeight(36),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(10),
  },
  readmore: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
  },
});