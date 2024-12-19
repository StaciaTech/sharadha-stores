import React from 'react';
import {View, Text} from 'react-native';
import Data from '@utils/json';
import styles from './styles';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {Rating, EmptyRating} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';

const Ratings = ({variation, details}) => {
  const {viewRTLStyle} = useValues();
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.ratingsView,
        {flexDirection: viewRTLStyle, justifyContent: 'space-between'},
      ]}>
      <View style={{flexDirection: viewRTLStyle}}>
        <View style={{flexDirection: viewRTLStyle}}>
          {Data.reviewStar.map((_, key) =>
            key + 1 <= details?.rating_count ? (
              <Rating width={windowWidth(18)} height={windowHeight(18)} />
            ) : (
              <EmptyRating width={windowWidth(18)} height={windowHeight(18)} />
            ),
          )}
        </View>
        <Text style={[styles.ratings, {color: colors.text}]}>
          ({details?.reviews_count} Ratings)
        </Text>
      </View>
      <View style={styles.offer}>
        {variation?.discount ? (
          <Text style={styles.discount}>{variation?.discount}% off </Text>
        ) : (
          <Text style={styles.discount}>{details?.discount}% off </Text>
        )}
      </View>
    </View>
  );
};

export default Ratings;
