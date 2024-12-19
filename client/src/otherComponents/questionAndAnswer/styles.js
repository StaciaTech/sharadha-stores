import { StyleSheet } from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';

export default styles = StyleSheet.create({
  seeAll: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
  },
  container: {
    marginTop: windowHeight(10),
    borderRadius: 6,
    paddingVertical: windowWidth(10),
    paddingHorizontal: windowWidth(20),
  },
  questionTitle: {
    fontFamily: appFonts.mulish,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: windowWidth(6),
    paddingVertical: windowHeight(3),
    borderRadius: 4,
  },
  question: {
    flex: 1,
  },
  questionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(10),
  },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reaction2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight(32),
    width: windowWidth(48),
    borderRadius: windowWidth(25),
    paddingLeft: windowWidth(5),
  },
  reactionText: {
    color: 'gray',
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(2),
  },
  answer: {
    fontFamily: appFonts.mulish,
    width: '86%',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  post: {
    backgroundColor: appColors.primary,
    borderRadius: 4,
    padding: 10,
    width: windowWidth(180),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(10),
  },
  postText: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
  },
  questions: {
    width: windowWidth(50),
    alignItems: 'flex-end',
  },
});
