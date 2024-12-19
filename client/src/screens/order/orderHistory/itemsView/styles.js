import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  list: {
    height: '90%',
  },
  orderAgain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(10),
  },
  rateNReview: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    color: appColors.content,
  },
  paid: {
    color: appColors.primary,
  },
  containerStyle: {
    paddingBottom: windowHeight(70),
    // borderTopColor: '#000000',
    // borderTopWidth: 1,
  },
  separator: {
    height: windowHeight(20),
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: '4%',
    marginBottom: windowHeight(10),
  },
  searchBox: {
    width: '57%',
  },
  searchInput: {
    height: 40,
    borderColor: appColors.line,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: '2%',
    fontFamily: appFonts.mulish,
  },
  dropdown: {
    height: 40,
    width: '34%',
    borderColor: appColors.line,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontFamily: appFonts.mulish,
  },
  placeholderStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  selectedTextStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
  },
  dropdownStyle: {
    backgroundColor: appColors.error,
  },
  itemTextStyle: {
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(10),
    fontFamily: appFonts.mulish,
  },
  listItemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: appColors.line,
    paddingVertical: 8,
  },

});
