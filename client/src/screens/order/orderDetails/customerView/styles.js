import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
    paddingBottom: windowHeight(30),
  },
  customerDetail: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT21,
  },
  detailContainer: {
    justifyContent: 'space-between',
    paddingVertical: windowHeight(10),
    borderBottomWidth: 1,
  },
  value: {
    color: appColors.content,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  detail: {
    color: appColors.category,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
    width: '60%',
  },
  cusDetail: {
    color: '#8D8D8D',
    fontSize: 16,
    fontWeight: '400',
    marginTop: windowHeight(10)
  },
  border: {
    borderBottomWidth: 1,
    marginTop: windowHeight(8),
    // marginHorizontal: windowWidth(20),
    borderStyle: 'dashed',
    borderColor: '#A4A4A4'
  },
});
