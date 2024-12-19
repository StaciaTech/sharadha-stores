import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import styles from '../styles';

const CouponData = ({item}) => {
  const {colors} = useTheme();
  const {textRTLStyle} = useValues();
  return (
    <View style={styles.details}>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            textAlign: textRTLStyle,
          },
        ]}>
        {item.title}
      </Text>
      <Text
        style={[
          styles.desc,
          {
            textAlign: textRTLStyle,
          },
        ]}
        numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  );
};

export default CouponData;
