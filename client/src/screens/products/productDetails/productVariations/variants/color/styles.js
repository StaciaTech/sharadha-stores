import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowWidth, fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    paddingHorizontal: windowWidth(16),
    paddingTop: windowWidth(16),
  },
  title: {
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT20,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  detailContainer: {
    height: windowWidth(56),
    width: windowWidth(56),
    borderRadius: windowWidth(56),
    marginLeft: windowWidth(10),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    borderRadius: windowWidth(46),
    width: windowWidth(46),
    height: windowWidth(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: windowWidth(55),
    width: windowWidth(1),
    position: 'absolute',
    backgroundColor: appColors.error,
    transform: [{rotate: '-45deg'}],
    opacity: 0.4,
  },
});
