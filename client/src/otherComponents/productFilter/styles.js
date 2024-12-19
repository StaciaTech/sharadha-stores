import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
    borderBottomWidth: 1,
    paddingBottom: windowHeight(10),
  },
  itemContainer: {
    width: windowWidth(160),
    height: windowHeight(50),
    paddingHorizontal: windowWidth(12),
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  subCategory: {
    marginHorizontal: windowWidth(20),
    width: '62%',
  },
  detailContainer: {
    height: windowHeight(50),
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  colorContainer: {
    height: windowHeight(18),
    width: windowWidth(44),
    marginLeft: windowWidth(10),
  },
  value: {
    marginLeft: windowWidth(10),
    fontSize: fontSizes.FONT18,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    height: windowWidth(90),
    bottom: 0,
    elevation: 10,
    paddingTop: windowHeight(6),
  },
  btn: {
    marginTop: -20,
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(20),
  },
  filter: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT21,
    marginHorizontal: windowWidth(10),
  },
  clearAll: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    marginLeft: windowWidth(10),
    flexDirection: 'row',
  },
  filterAlign: {
    alignItems: 'center',
  },
  container: {
    paddingBottom: 220,
  },
});
