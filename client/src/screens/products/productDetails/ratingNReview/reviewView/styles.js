import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  txt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
  seeAll: {
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.mulish,
    color: appColors.primary,
    marginHorizontal: windowWidth(6),
  },
  list: {
    marginBottom: windowHeight(20),
  },
  review: {
    marginTop: windowHeight(20),
    padding: windowWidth(20),
    borderRadius: windowHeight(10),
  },
  reviewDetail: {
    alignItems: 'center',
  },
  reviewNameViewRight: {
    marginHorizontal: windowWidth(14),
  },
  reviewName: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  reviewTxt: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.mulish,
    color: appColors.content,
    width: '100%',
  },
  profileContainer: {
    height: windowWidth(56),
    width: windowWidth(56),
    borderRadius: windowWidth(56),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  container: {
    padding: windowWidth(20),
    width: '100%',
  },
  reviewText: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.mulish,
  },
  post: {
    backgroundColor: appColors.primary,
    borderRadius: 4,
    padding: 10,
    width: windowWidth(180),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(16),
  },
  postText: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
  },
  align: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  spaceTop: {
    marginTop: windowHeight(10)
  },
  ratingContainer: {
    alignItems: 'center',
    borderRightWidth: 1,
    paddingRight: windowWidth(10),
  },
  ratingView: {
    height: windowHeight(65),
    width: windowWidth(100),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT19,
  },
  mt_2: {
    marginTop: windowHeight(2),
  },
  jc_s: {
    justifyContent: 'space-between'
  },
  listView: {
    alignItems: 'center',
    marginHorizontal: windowWidth(10),
    justifyContent: 'space-between',
    width: '85%',
  },
  fd: {
    flexDirection: 'row'
  },
  rate: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(3),
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewSubContainer: {
    width: '79%',
    height: windowHeight(6),
    backgroundColor: '#e8eaee',
    borderRadius: windowWidth(16),
    overflow: 'hidden',
  },
  itemContainer: {
    borderRadius: windowWidth(16),
    backgroundColor: appColors.primary,
    height: windowHeight(6),
  },
  itemView: {
    color: appColors.black,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT15,
    marginHorizontal: windowWidth(10),
  },
  ai_center: {
    alignItems: 'center'
  },
  reviewTitle: {
    width: '100%',
    alignItems: 'center'
  },
  reviewProduct: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
  },
  other: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    flex: 1,
    textAlign: 'center',
  },
  writeReview: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT16,
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
    textDecorationLine: 'underline',
    textAlign: 'right',
  }
});
