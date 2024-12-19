import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import appColors from '@theme/appColors';
import {Header} from '@commonComponents';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {QuestionAndAnswer} from '@otherComponents';
import {useDispatch} from 'react-redux';
import {questionAnswerFeedback} from '@api/endpoints';
import {GlobalStyle} from '@style';

export function Faq({route}) {
  const {isDark} = useValues();
  const {colors} = useTheme();

  const data = route.params.questionAnswersData;
  const dispatch = useDispatch();

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
    route.params.getData();
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyle.container,
        {
          backgroundColor: isDark ? appColors.darkDrawer : colors.background,
        },
      ]}>
      <Header titleText={'Q&A'} isText />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <QuestionAndAnswer
            item={item}
            onPress={giveFeedback}
            questionColor={isDark ? appColors.dark : '#f2fffd'}
          />
        )}
      />
    </SafeAreaView>
  );
}
