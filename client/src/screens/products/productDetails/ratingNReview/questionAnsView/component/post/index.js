import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const Post = ({onPress}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.noQuestionContainer}>
      <Text
        style={[
          styles.noQuestion,
          {marginTop: windowHeight(3), color: colors.text},
        ]}>
        There Are Currently No Question For This Product
      </Text>
      <TouchableOpacity
        style={styles.post}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.postText}>Post Your Question</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
