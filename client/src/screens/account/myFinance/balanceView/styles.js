import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  balanceContainer: {
    width: '100%',
    height: windowHeight(50),
    justifyContent: 'center',
  },
  walletBg: {
    width: '100%',
    height: windowHeight(50),
    alignSelf: 'center',
  },
  detailContainer: {
    position: 'absolute',
    marginHorizontal: windowWidth(22),
    height: windowHeight(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  title: {
    color: appColors.title,
    fontFamily: appFonts.mulish,
  },
  amount: {
    color: appColors.primary,
    fontFamily: appFonts.mulishBold,
    fontSize: fontSizes.FONT24,
    marginTop: windowHeight(1),
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    marginLeft: windowWidth(6),
  },
});
