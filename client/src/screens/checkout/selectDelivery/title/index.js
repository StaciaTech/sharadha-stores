import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

export default title = ({ onPress, viewRTLStyle, defaultAddress }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text
        style={[
          styles.address,
          {
            color: colors.text,
          },
        ]}>
        Address
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.addressContainer}>
        <Text style={styles.addressText}>
          {defaultAddress ? 'Change Address' : 'Select Address'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
