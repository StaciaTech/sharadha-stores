import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
  },
  mainTitle: {
    width: windowWidth(160),
    height: windowHeight(20),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(10),
  },
  mainView: {
    width: windowWidth(120),
    height: windowHeight(20),
    borderRadius: windowWidth(4),
    marginTop: windowHeight(10),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wishlistConatiner: {
    paddingRight: windowWidth(20),
  },
});
