import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  imgView: {
    width: windowWidth(90),
    height: windowHeight(80),
    alignItems: 'center',
    marginTop: windowHeight(10),
  },
  itemImg: {
    width: windowWidth(100),
    height: windowHeight(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    backgroundColor: appColors.gray,
  },
  categoryImg: {
    height: windowHeight(35),
    width: windowWidth(35),
    resizeMode: 'contain',
  },
  nameTxt: {
    color: appColors.content,
    marginTop: windowHeight(4),
    fontSize: fontSizes.FONT15,
    fontFamily: appFonts.mulish,
  },
});
