import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  header: {
    height: windowHeight(16),
    width: windowWidth(46),
    resizeMode: 'stretch',
  },
  containerStyle: {
    paddingBottom: windowHeight(0),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(18),
  },
});
