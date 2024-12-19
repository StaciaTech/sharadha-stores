import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  spaceTop: {
    marginTop: windowHeight(10),
  },
  container: {
    height: 1,
    width: '92%',
    alignSelf: 'center',
    marginVertical: windowHeight(10),
  },
  click: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth(20),
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageView: {
    width: windowWidth(60),
    height: windowHeight(40),
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth(60),
    height: windowHeight(60),
    resizeMode: 'contain',
  },
  detailView: {
    flex: 1,
    marginHorizontal: windowWidth(20),
  },
  listName: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17HALF,
  },
  subDetail: {
    alignItems: 'center',
    marginTop: windowHeight(4),
  },
  listDiscount: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17HALF,
  },
  price: {
    color: appColors.content,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(10),
    textDecorationLine: 'line-through',
  },
  percentage: {
    color: appColors.white,
    backgroundColor: appColors.primary,
    borderRadius: 10,
    fontSize: fontSizes.FONT14,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    fontFamily: appFonts.mulish,
  },
});
