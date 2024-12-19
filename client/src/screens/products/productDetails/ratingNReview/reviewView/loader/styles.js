import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  reviewView: {
    padding: windowHeight(20),
    borderRadius: windowHeight(6),
    marginTop: windowHeight(20),
  },
  ratingsView: {
    alignItems: 'center',
  },
  ratingImgLoader: {
    width: windowHeight(40),
    height: windowHeight(40),
    borderRadius: windowHeight(20),
  },
  reviewerLoader: {
    marginLeft: windowWidth(20),
  },
  reviewerLoaderRight: {
    marginRight: windowWidth(20),
  },
  reviewerNameLoader: {
    width: windowWidth(160),
    height: windowHeight(20),
    borderRadius: windowWidth(2),
  },
  ratingStarLoader: {
    flexDirection: 'row',
    marginTop: windowHeight(6),
  },
  starLoader: {
    width: windowWidth(20),
    height: windowHeight(16),
  },
  starsLoader: {
    width: windowWidth(20),
    height: windowHeight(16),
    marginLeft: windowWidth(4),
  },
  reviewLoader: {
    height: windowHeight(16),
    borderRadius: windowWidth(2),
    marginTop: windowHeight(10),
  },
});
