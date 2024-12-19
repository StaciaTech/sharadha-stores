import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  darkStyle: {
    height: windowHeight(16),
    width: windowWidth(140),
    resizeMode: 'stretch',
  },
  scrollView: {
    marginBottom: windowHeight(60),
  },
  containerStyle: {
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
  },
});
