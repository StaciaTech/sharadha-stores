import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {questionAnswerFeedback} from '@api/store/actions';
import {QuestionAndAnswer} from '@otherComponents';
import appColors from '@theme/appColors';
import Post from './component/post/index';
import PostQue from './component/postQue/index';
import {useValues} from '@utils/context';
import styles from './styles';

export default questionAnsView = ({productId, getData, onPress}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {questionAnswersData} = useSelector(state => state.product);
  const {navigate} = useNavigation();
  const {isDark} = useValues();

  const giveFeedback = async (id, react) => {
    const data = {
      question_and_answer_id: id,
      reaction: react,
    };
    const params = {
      data,
      productId,
      dispatch,
    };
    dispatch(questionAnswerFeedback(params));
    getData();
  };

  const gotoList = () => {
    navigate('Faq', {questionAnswersData, getData});
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <View style={styles.postContainer}>
          {questionAnswersData?.length == 0 && <Post onPress={onPress} />}
          {questionAnswersData?.length > 2 && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.seeAllContainer}
              onPress={gotoList}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          )}
        </View>
        {questionAnswersData.length > 0 &&
          questionAnswersData
            ?.slice(0, 2)
            .map((item, key) => (
              <QuestionAndAnswer
                onPress={giveFeedback}
                item={item}
                key={key}
                questionColor={isDark ? appColors.darkDrawer : appColors.gray}
              />
            ))}
      </View>
      {questionAnswersData?.length != 0 && <PostQue onPress={onPress} />}
    </View>
  );
};
