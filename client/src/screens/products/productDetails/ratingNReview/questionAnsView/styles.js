import { StyleSheet } from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  seeAll: {
    color: appColors.primary,
    fontFamily: appFonts.mulish,
  },
  container: {
    paddingVertical: windowHeight(6),
  },
  questionTitle: {
    fontFamily: appFonts.mulish,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: windowWidth(6),
    paddingVertical: windowHeight(3),
    borderRadius: 4,
  },
  question: {
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(10),
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
  reactionText: {
    color: 'gray',
    fontFamily: appFonts.mulish,
    marginHorizontal: windowWidth(2),
  },
  answer: {
    fontFamily: appFonts.mulish,
    width: '86%',
    marginHorizontal: windowWidth(10),
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  seeAllContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
});
