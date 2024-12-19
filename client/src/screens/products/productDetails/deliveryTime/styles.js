import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: windowHeight(10),
    paddingHorizontal: windowWidth(14),
  },
  deliveryTextcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  delivery: {
    height: windowHeight(26),
    width: windowWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryText: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    width: '80%',
    marginHorizontal: windowWidth(2),
  },
  text: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    width: '90%',
  },
  spaceTop: { paddingVertical: windowHeight(3) }
});
