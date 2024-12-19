import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '@utils/images';
import styles from './styles';
import {useValues} from '@utils/context';

export default noResult = () => {
  const {colors} = useTheme();
  const {isDark} = useValues();

  return (
    <View style={styles.container}>
      <Image
        source={isDark ? images.noSearchDark : images.noSearch}
        style={styles.noSearch}
      />
      <Text
        style={[
          styles.noResult,
          {
            color: colors.text,
          },
        ]}>
        No Result To Show
      </Text>
      <Text style={styles.tryAgain}>No Results Found. Please Try Again.</Text>
    </View>
  );
};
