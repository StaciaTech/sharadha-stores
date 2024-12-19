import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  switchView: {
    alignItems: 'center',
  },
  onStyle: {
    backgroundColor: appColors.primary,
  },
  trackOnStyle: {
    backgroundColor: appColors.switch,
  },
  switch: {
    marginTop: windowHeight(20),
  },
});
