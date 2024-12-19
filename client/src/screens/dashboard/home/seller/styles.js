import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: windowHeight(6),
    paddingBottom: windowHeight(16),
  },
  content: {
    paddingHorizontal: windowWidth(20),
  },
  separtor: {
    width: windowWidth(16),
  },
  mainView: {
    width: windowWidth(170),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth(20),
  },
  logo: {
    width: windowWidth(54),
    height: windowHeight(46),
    resizeMode: 'contain',
  },
  line: {
    width: windowWidth(40),
    height: windowHeight(1),
  },
  name: {
    marginTop: windowHeight(6),
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    textAlign: 'center',
  },
  ratings: {
    flexDirection: 'row',
    width: windowWidth(100),
    justifyContent: 'space-between',
    marginBottom: windowHeight(6),
  },
});
