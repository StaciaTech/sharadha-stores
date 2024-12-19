import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  detailView: {
    marginHorizontal: windowWidth(30),
    height: '85%',
  },
  img: {
    height: windowHeight(240),
    width: windowWidth(400),
    alignSelf: 'center',
  },
  name: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT22,
  },
  product: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  stars: {
    flexDirection: 'row',
    width: '36%',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    height: windowHeight(120),
    borderWidth: 1,
    borderColor: appColors.primary,
    borderRadius: 10,
    textAlignVertical: 'top',
    marginTop: windowHeight(6),
    fontFamily: appFonts.mulish,
    padding: 12,
    fontSize: fontSizes.FONT18,
  },
  button: {
    width: '100%',
    backgroundColor: appColors.primary,
  },
  spaceTop: {
    marginTop: windowHeight(20),
  },
});
