import { StyleSheet } from 'react-native';
import { windowWidth } from '@theme/appConstant';

export const GlobalStyle = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
  },
  modal: {
    padding: windowWidth(20),
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  authMainView: {
    backgroundColor: appColors.primary,
    flex: 1,
  },
  authButton: {
    backgroundColor: appColors.primary,
    width: '100%',
  },
  container: {
    flex: 1,
  },
  size: {
    height: '100%',
  },
  centerValue: {
    alignItems: 'center'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});
