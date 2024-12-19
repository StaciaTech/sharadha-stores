import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  dataView: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    width: windowHeight(70),
    height: windowHeight(70),
    elevation: 4,
    borderRadius: windowHeight(70),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  name: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    marginTop: windowHeight(6),
  },
  demoMail: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
    color: appColors.content,
  },
  editProfile: {
    backgroundColor: appColors.primary,
    width: windowHeight(30),
    height: windowHeight(30),
    borderRadius: windowHeight(15),
    position: 'absolute',
    bottom: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  char: {
    fontSize: fontSizes.FONT40,
    fontFamily: appFonts.mulishBold,
  },
  image: {
    width: windowWidth(70),
    height: windowHeight(70),
    resizeMode: 'stretch',
  },
});
