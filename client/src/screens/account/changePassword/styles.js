import { StyleSheet } from 'react-native';
import { windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  err: {
    marginHorizontal: windowWidth(20),
  },
  button: {
    width: '90%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
  },
});
