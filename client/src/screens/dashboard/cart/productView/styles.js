import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  separator: {
    height: windowHeight(10),
  },
  itemStyle: {
    borderRadius: 0,
    borderTopStartRadius: 10,
    marginTop: windowHeight(0),
  },
});
