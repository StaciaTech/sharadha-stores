import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  contentStyle: {
    paddingHorizontal: windowWidth(26),
    justifyContent: 'space-between',
  },
  columnStyle: {
    justifyContent: 'space-between',
  },
});
