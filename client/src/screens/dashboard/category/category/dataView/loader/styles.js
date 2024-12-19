import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  listView: {
    width: windowWidth(120),
    height: windowHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: windowWidth(90),
    height: windowHeight(52),
    borderRadius: windowHeight(6),
  },
  textView: {
    width: windowWidth(90),
    height: windowHeight(20),
    marginTop: windowHeight(10),
    borderRadius: windowHeight(3),
  },
});
