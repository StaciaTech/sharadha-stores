import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  listView: {
    marginHorizontal: windowWidth(24),
    // paddingVertical: windowHeight(10),
    // paddingHorizontal: windowWidth(20),
    // borderRadius: windowWidth(12),
    borderBottomWidth:  1,
    borderBottomColor: '#000000',
    paddingBottom: windowHeight(15),
  },
  idView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    color: appColors.white,
    fontWeight: '600'
  },
  paid: {
    color: '#000000',
    fontFamily: appFonts.mulish,
    fontWeight: "500",
  },
  add: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    color: appColors.content,
    marginTop: windowHeight(4),
    width: '100%',
  },
  border: {
    borderBottomWidth: 1,
    marginVertical: 10,
    borderStyle: 'dashed',
    borderColor: '#E5E5E5',
    marginBottom: windowHeight(15)
  },
  paidView: {
    // marginTop: windowHeight(4),
    justifyContent: 'space-between',
  },
  data1: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
    color: appColors.white,
    marginTop: windowHeight(5),
  },
  status: {
    height: windowHeight(26),
    // width: windowWidth(130),
    width: '48%',
   backgroundColor: appColors.primary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusTitle: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
  },
  viewDetails:{
    backgroundColor: '#EEF2FF',
    height: windowHeight(26),
    width: '48%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#17349d',
  }
});
