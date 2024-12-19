import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  recentView: {
    width: '90%',
    height: windowHeight(120),
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: windowHeight(20),
  },
});
