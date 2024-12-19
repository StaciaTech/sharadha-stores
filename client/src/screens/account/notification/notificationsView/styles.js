import { StyleSheet } from 'react-native';
import { fontSizes, windowWidth, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  list: {
    paddingBottom: windowHeight(20),
  },
  day: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
    color: appColors.content,
    marginLeft: windowWidth(4),
  },
  value: {
    marginTop: windowHeight(14),
    alignItems: 'center',
  },
  icon: {
    height: windowHeight(50),
    width: windowWidth(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(8),
    marginRight: windowWidth(10),
  },
  titleView: {
    justifyContent: 'space-between',
    width: windowWidth(370),
  },
  tag: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    color: appColors.primary,
    marginLeft: windowWidth(4),
    paddingHorizontal: windowWidth(10),
    height: windowHeight(24),
    textAlignVertical: 'center',
    borderRadius: windowWidth(6),
  },
  separator: {
    width: '100%',
    height: 1,
    alignSelf: 'center',
  },
});
