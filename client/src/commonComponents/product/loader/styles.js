import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    height: windowHeight(80),
    width: '92%',
    alignSelf: 'center',
    borderRadius: windowWidth(10),
    marginTop: windowHeight(10),
    alignItems: 'center',
    paddingHorizontal: windowWidth(20),
  },
  txtLoader: {
    width: windowWidth(80),
    height: windowHeight(46),
    borderRadius: windowWidth(6),
    marginRight: windowWidth(4),
  },
  nameLoader: {
    width: windowWidth(240),
    height: windowHeight(12),
    borderRadius: windowWidth(2),
  },
  salePriceLoader: {
    width: windowWidth(120),
    height: windowHeight(12),
    borderRadius: windowWidth(2),
  },
  priceLoader: {
    width: windowWidth(80),
    height: windowHeight(12),
    borderRadius: windowWidth(2),
  },
  plusLoader: {
    width: windowWidth(30),
    height: windowHeight(20),
    borderRadius: windowWidth(6),
  },
  nameContainer: {
    height: windowHeight(60),
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  priceContainer: {
    justifyContent: 'space-between',
    width: '71%',
    alignItems: 'center',
  },
});
