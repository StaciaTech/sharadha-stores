import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: appColors.modalBg,
    position: 'absolute',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  subView: {
    width: '100%',
    height: '100%',
  },
});
