import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: { paddingHorizontal: windowWidth(20) },
  shortDesc: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(6),
    fontSize: fontSizes.FONT18,
  },
  option: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(6),
    fontSize: fontSizes.FONT18,
  },
  txt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  detail: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.mulishBold,
    marginTop: windowHeight(14),
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
    color: appColors.content,
    marginTop: windowHeight(4),
  },
  manufacturer: {
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderTopColor: appColors.content,
    borderBottomColor: appColors.content,
    marginTop: windowHeight(14),
    paddingVertical: windowHeight(10),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product: {
    marginTop: windowHeight(14),
    borderBottomWidth: 0.7,
    borderBottomColor: appColors.content,
    paddingBottom: windowHeight(10),
  },
});