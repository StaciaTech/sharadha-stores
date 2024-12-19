import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(20),
    marginVertical: windowHeight(14),
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: windowHeight(10),
  },
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    width: '35%',
    color: appColors.content,
  },
  valueStyle: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    color: appColors.content,
  },
  detailValue: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    width: '55%',
    marginHorizontal: windowWidth(16),
  },
  border: {
    height: 1,
    width: '100%',
  },
  secondDetail: {
    flexDirection: 'row',
    marginVertical: windowHeight(10),
  },
  subDetail: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    width: '35%',
    color: appColors.content,
  },
  spaceTop: {
    flexDirection: 'row',
    marginTop: windowHeight(10),
  },
});
