import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '@utils/images';
import styles from './styles';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';

const NoInternet = ({isDark}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Image
        source={isDark ? images.noInternetDark : images.noInternet}
        style={styles.image}
      />
      <Text style={[styles.noInternet, {color: colors.text}]}>No Internet</Text>
      <Text
        style={[
          styles.message,
          {color: isDark ? appColors.category : appColors.content},
        ]}>
        Please Check Your Internet Connection
      </Text>
    </View>
  );
};
export default NoInternet;
