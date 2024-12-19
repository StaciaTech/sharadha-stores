import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import styles from './styles';

export default seeAllHeader = props => {
  const {colors} = useTheme();
  const {isRTL} = useValues();

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: isRTL ? 'row-reverse' : 'row',
        },
      ]}>
      <View style={styles.details}>
        <Text
          style={[
            styles.title,
            {color: colors.text, textAlign: isRTL ? 'right' : 'left'},
          ]}>
          {props.title}
        </Text>
        {props.subtitle && (
          <Text style={styles.subTitle}>{props.subtitle}</Text>
        )}
      </View>
      {props.showAll && (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
          <Text style={styles.seeAll}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
