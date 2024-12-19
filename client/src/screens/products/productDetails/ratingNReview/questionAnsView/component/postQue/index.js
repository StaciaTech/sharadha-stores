import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const PostQue = ({onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={styles.postQuestionContainer}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.postQuestion,
          {
            color: colors.text,
          },
        ]}>
        Post Your Question
      </Text>
    </TouchableOpacity>
  );
};

export default PostQue;
