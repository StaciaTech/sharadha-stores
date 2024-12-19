import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import ReviewView from './reviewView';
import QuestionAnsView from './questionAnsView';
import styles from './styles';

export default RatingNReview = ({ loading, id, getData, onPress }) => {
  const { colors } = useTheme();
  const [tab, setTab] = useState(0);
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: colors.border,
        },
      ]}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => setTab(0)}
          style={[
            styles.option,
            {
              borderBottomColor:
                tab == 0 ? appColors.primary : colors.background,
            },
          ]}>
          <Text
            style={[
              styles.optionText,
              {
                color: colors.text,
              },
            ]}>
            Review
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          style={[
            styles.option,
            {
              borderBottomColor:
                tab == 1 ? appColors.primary : colors.background,
            },
          ]}>
          <Text
            style={[
              styles.optionText,
              {
                color: colors.text,
              },
            ]}>
            Q&A
          </Text>
        </TouchableOpacity>
      </View>
      {tab == 0 ? (
        <ReviewView showLoader={loading} />
      ) : (
        <QuestionAnsView productId={id} getData={getData} onPress={onPress} />
      )}
    </View>
  );
};
