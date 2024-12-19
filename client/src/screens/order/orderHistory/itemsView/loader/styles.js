import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  idLoader: {
    width: windowWidth(240),
    height: windowHeight(10),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(10),
  },
  status: {
    width: windowWidth(100),
    height: windowHeight(10),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(10),
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addLoader: {
    height: windowHeight(20),
    borderRadius: windowWidth(4),
  },
  imageLoader: {
    width: windowWidth(110),
    height: windowHeight(80),
    borderRadius: windowHeight(10),
  },
  orderAgainLoader: {
    height: windowHeight(26),
    width: windowWidth(120),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(10),
  },
  rateLoader: {
    width: windowWidth(140),
    height: windowHeight(24),
    borderRadius: windowWidth(4),
  },
  separator: {
    height: windowHeight(20)
  },
});
