import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    marginTop: windowHeight(20),
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: windowWidth(20),
    borderRadius: windowWidth(14),
    paddingBottom: windowHeight(10),
  },
  addressLoader: {
    width: windowWidth(260),
    height: windowHeight(16),
    borderRadius: windowWidth(2),
    marginTop: windowHeight(6),
  },
  nameLoader: {
    width: windowWidth(100),
    height: windowHeight(16),
    borderRadius: windowWidth(2),
    marginTop: windowHeight(6),
  },
  optionLoader: {
    width: windowWidth(34),
    height: windowHeight(20),
    borderRadius: windowWidth(2),
    marginTop: windowHeight(6),
  },
  details: {
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
  },
  separator: {
    width: windowWidth(10),
  },
});
