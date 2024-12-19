import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowHeight(13),
  },
  itemContainer: {
    marginBottom: windowHeight(14),
    paddingHorizontal: windowWidth(14),
    paddingVertical: windowHeight(14),
    backgroundColor: appColors.gray,
    borderRadius: 8,
  },
  logo: {
    width: windowWidth(65),
    height: windowHeight(40),
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  storeName: {
    fontSize: fontSizes.FONT19,
    marginBottom: 4,
    color: 'black',
    marginHorizontal: windowWidth(15),
    fontFamily: appFonts.mulish,
  },
  ratings: {
    // flexDirection: 'row',
    marginHorizontal: windowWidth(15),
  },
});
