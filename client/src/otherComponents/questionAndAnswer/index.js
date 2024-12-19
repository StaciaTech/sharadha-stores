import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {
  LikeAnswer,
  LikedAnswer,
  DisLikeAnswer,
  DislikedAnswer,
  OpenQuestion,
  CloseQuestion,
} from '@utils/icons';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import styles from './styles';

export function QuestionAndAnswer({onPress, item, questionColor}) {
  const {colors} = useTheme();
  const [showAnswer, setShowAnswer] = useState(false);

  const getAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: questionColor,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: appColors.line,
        },
      ]}>
      <TouchableOpacity
        style={styles.questionsContainer}
        onPress={getAnswer}
        activeOpacity={0.8}>
        <Text
          style={[
            styles.question,
            {
              color: colors.text,
              fontFamily: questionColor ? appFonts.mulishBold : appFonts.mulish,
            },
          ]}>
          {item.question}
        </Text>
        <View style={styles.questions}>
          {showAnswer ? <CloseQuestion /> : <OpenQuestion />}
        </View>
      </TouchableOpacity>
      {showAnswer && (
        <View>
          <View
            style={[
              styles.reaction,
              {
                marginTop: windowHeight(4),
              },
            ]}>
            <Text
              style={[
                styles.answer,
                {
                  color: colors.text,
                },
              ]}>
              {item.answer}
            </Text>
          </View>
          <View style={styles.reactionContainer}>
            <TouchableOpacity
              onPress={() => onPress(item.id, 'liked')}
              activeOpacity={0.7}
              style={[
                styles.reaction2,
                {
                  marginHorizontal: windowWidth(10),
                  backgroundColor: colors.background,
                },
              ]}>
              {item.reaction == 'liked' ? <LikedAnswer /> : <LikeAnswer />}
              <Text style={styles.reactionText}>{item.total_likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onPress(item.id, 'disliked')}
              style={[styles.reaction2, {backgroundColor: colors.background}]}>
              {item.reaction == 'disliked' ? (
                <DislikedAnswer />
              ) : (
                <DisLikeAnswer />
              )}
              <Text style={styles.reactionText}>{item.total_dislikes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
