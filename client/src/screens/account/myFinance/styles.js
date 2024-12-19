import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(24),
  },
  contentStyle: {
    paddingBottom: windowHeight(130),
  },
});
