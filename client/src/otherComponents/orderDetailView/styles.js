import { StyleSheet } from 'react-native';
import { fontSizes, windowWidth, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  orderDetailView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(6),
    alignItems: 'center',
    paddingHorizontal: windowWidth(10),
    paddingVertical: windowHeight(10),
  },
  idView: {
    marginLeft: windowWidth(10),
  },
  id: {
    fontSize: fontSizes.FONT18,
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
  orderDeliver: {
    fontSize: fontSizes.FONT22,
    color: appColors.white,
    fontFamily: appFonts.mulish,
  },
});