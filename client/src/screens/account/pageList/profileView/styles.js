import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  profileView: {
    alignItems: 'center',
    borderBottomWidth: 1.5,
    marginVertical: windowHeight(4),
    paddingBottom: windowHeight(20),
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(24)
  },
  profileImg: {
    width: windowWidth(80),
    height: windowWidth(80),
    borderRadius: windowWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  dataView: {
    marginHorizontal: windowWidth(20),
  },
  name: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.mulishBold,
  },
  email: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.mulish,
    color: appColors.content,
  },
  text: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT26,
  },
  detailContainer: {
    alignItems: 'center',
  },
  image: {
    height: windowHeight(52),
    width: windowWidth(76),
    borderRadius: windowWidth(50),
    overflow: 'hidden',
  },
});
