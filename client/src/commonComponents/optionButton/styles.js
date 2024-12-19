import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default optionButtonStyles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
  },
  closeBtn: {
    width: '48%',
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.primary,
  },
  applyBtn: {
    width: '48%',
    backgroundColor: appColors.primary,
  },
});
