import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.primary,
    flex: 1,
  },
  subView: {
    marginTop: windowHeight(70),
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
    height: '100%',
    paddingHorizontal: windowWidth(20),
  },
  loginView: {
    width: '100%',
    position: 'absolute',
  },
});
