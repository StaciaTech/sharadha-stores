import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(10)
  },
  contentStyle: {
    paddingHorizontal: windowWidth(20)
  },
  separator: {
    width: windowWidth(16)
  },
  mainView: {
    width: windowWidth(280),
    borderWidth: 1,
    borderRadius: 8,
    elevation: 1,
    overflow: 'hidden',
    padding: windowHeight(8),
  },
  img: {
    width: windowWidth(254),
    height: windowHeight(100),
    alignSelf: 'center',
    borderRadius: 8,
  },
  title: {
    marginTop: windowHeight(10),
    fontFamily: appFonts.mulish,
  },
  date: {
    color: appColors.category,
    fontFamily: appFonts.mulish,
  },
});
