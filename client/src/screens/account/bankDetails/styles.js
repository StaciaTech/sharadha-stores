import { StyleSheet } from 'react-native';
import { fontSizes, windowWidth, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: windowWidth(20),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  err: {
    marginHorizontal: windowWidth(20),
  },
  button: {
    width: '90%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    marginVertical: windowHeight(10),
  },
});
