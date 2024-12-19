import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    width: '100%',
    marginTop: windowHeight(10),
  },
  product: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(70),
  },
});
