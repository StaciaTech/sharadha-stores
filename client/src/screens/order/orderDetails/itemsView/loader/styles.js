import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainTitleLoader: {
    height: windowHeight(22),
    width: windowWidth(100),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(15),
    marginHorizontal: windowWidth(20)
  },
  quantityLoader: {
    height: windowHeight(40),
    width: windowWidth(60),
    borderRadius: windowWidth(4),
  },
  intoLoader: {
    height: windowHeight(20),
    width: windowWidth(24),
    borderRadius: windowWidth(4),
    marginHorizontal: windowWidth(10),
  },
  titleLoader: {
    height: windowHeight(15),
    width: windowWidth(210),
    marginVertical: windowHeight(4),
    borderRadius: windowWidth(5),
  },
  gramLoader: {
    height: windowHeight(20),
    width: windowWidth(60),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(4),
  },
  priceLoader: {
    width: windowWidth(80),
    height: windowHeight(30),
    borderRadius: windowWidth(4),
  },
  dataView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginLeft: windowWidth(10),
  },
});
