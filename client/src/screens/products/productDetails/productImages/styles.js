import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    height: windowHeight(170),
    width: '70%',
    marginHorizontal: windowWidth(50),
    marginTop: windowHeight(10),
  },
  border: {
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: windowHeight(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  verticalSpace: {
    height: windowHeight(240),
  },
  subContainer: {
    height: windowHeight(240),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationSpace: {
    marginHorizontal: 0,
  },
  dot: {
    width: windowWidth(40),
    height: 4,
    borderRadius: 15,
    marginHorizontal: 1,
    backgroundColor: appColors.primary,
  },
  inactiveDot: {
    backgroundColor: appColors.primary,
    width: windowWidth(12),
    height: windowHeight(7.5),
    borderRadius: 6,
  },
  wishlist: {
    position: 'absolute',
    top: windowHeight(4),
    right: 0,
    paddingHorizontal: windowWidth(20),
  },
  listView: {
    position: 'absolute',
    alignSelf: 'center',
    right: windowHeight(6),
    top: windowHeight(34),
    height: windowHeight(210),
  },
  verticalHeight: {
    height: windowWidth(10),
  },
  imageBtn: {
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    height: windowHeight(43),
    width: windowWidth(60),
  },
  videoLayer: {
    position: 'absolute',
  },
});
