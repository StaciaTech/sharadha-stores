import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import styles from './styles';
import {NotificationTime} from '@utils/icons';
import {formatDate} from '@utils/helper';
import {useNavigation} from '@react-navigation/native';

const NotificationItem = ({item, colors, textRTLStyle}) => {
  const {navigate} = useNavigation();

  const gotoNext = id => {
    id && navigate('OrderDetails', {id});
  };

  return (
    <TouchableOpacity
      onPress={() => gotoNext(item.data.order_number)}
      activeOpacity={0.8}
      style={[
        styles.dataView,
        {
          backgroundColor:
            item.read_at == null ? appColors.notifications : colors.background,
        },
      ]}>
      <Text style={[styles.title, {color: colors.text}]}>
        • {item.data.title}
      </Text>
      <Text style={[styles.subTxt, {textAlign: textRTLStyle}]}>
        {item.data.message}
      </Text>
      <View style={styles.timeContainer}>
        <NotificationTime />
        <Text style={styles.date}>{formatDate(item.updated_at)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
