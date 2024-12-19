import { StyleSheet } from 'react-native';
import { windowHeight } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    width: '90%',
    height: windowHeight(160),
    marginTop: windowHeight(16),
    borderRadius: windowHeight(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: windowHeight(160),
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: appColors.white,
  },
});
