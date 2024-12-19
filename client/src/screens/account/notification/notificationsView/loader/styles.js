import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  titleLoader: {
    width: windowWidth(250),
    height: windowHeight(20),
  },
  mainView: {
    justifyContent: 'space-between',
    marginTop: windowHeight(10),
    width: '100%',
    alignSelf: 'center',
    padding: windowWidth(20),
    borderRadius: windowWidth(14),
  },
  imgLoader: {
    height: windowHeight(50),
    width: windowWidth(60),
    borderRadius: windowHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLoader: {
    width: windowWidth(420),
    height: windowHeight(20),
    marginVertical: windowHeight(10),
  },
  txtLeft: {
    marginHorizontal: windowWidth(10),
  },
});
