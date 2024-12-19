import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  conatiner: {
    width: '90%',
    elevation: 2,
    alignSelf: 'center',
    marginTop: windowHeight(16),
    borderRadius: 10,
    paddingHorizontal: windowWidth(14),
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    height: windowHeight(18),
    width: windowWidth(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(10),
  },
  dateContainer: { alignItems: 'flex-end' },
  date: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
  },
  img: {
    height: windowHeight(30),
    width: windowWidth(130),
    resizeMode: 'contain',
  },
  lableContainer: {
    width: windowWidth(348),
    marginHorizontal: windowWidth(4),
    height: windowHeight(54),
    justifyContent: 'center',
    borderRadius: windowHeight(8),
    paddingHorizontal: windowWidth(14),
  },
  button: {
    width: '90%',
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    position: 'absolute',
    bottom: windowHeight(20),
  },
});
