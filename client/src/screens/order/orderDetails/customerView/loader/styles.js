import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainTitleLoader: {
    height: windowHeight(22),
    width: windowWidth(200),
    borderRadius: windowWidth(4),
  },
  orderLoader: {
    width: '100%',
    borderRadius: windowHeight(10),
    marginTop: windowHeight(10),
    height: windowHeight(20),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    width: windowWidth(150),
    height: windowHeight(20),
    borderRadius: windowWidth(2),
    marginRight: windowWidth(20),
  },
});
