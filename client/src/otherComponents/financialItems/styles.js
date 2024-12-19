import { StyleSheet } from 'react-native';
import { fontSizes, windowWidth, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: windowWidth(14),
    paddingVertical: windowHeight(12),
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  amount: {
    fontFamily: appFonts.mulishBold,
    color: appColors.primary,
    fontSize: fontSizes.FONT19,
  },
  details: {
    fontFamily: appFonts.mulish,
    color: appColors.category,
    marginTop: windowHeight(6),
    fontSize: fontSizes.FONT17,
    width: windowWidth(230)
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  type: {
    fontFamily: appFonts.mulish,
    textAlign: 'center',
    borderRadius: 20,
    paddingVertical: windowHeight(2),
    paddingHorizontal: windowWidth(16),
  },
  dateText: {
    fontFamily: appFonts.mulish,
    color: appColors.category,
    marginTop: windowHeight(6),
    fontSize: fontSizes.FONT16,
    textAlign: 'right',
  },
  mt_2: {
    marginTop: windowHeight(2)
  }
});
