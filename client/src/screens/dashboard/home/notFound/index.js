import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import appColors from '@theme/appColors';
import { useValues } from '@utils/context';
import images from '@utils/images';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const capitalizeEachWord = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

export default notFound = props => {
  const { textRTLStyle, imageRTLStyle, isRTL } = useValues();
  const navigation = useNavigation();
  const capitalizedStatus = capitalizeEachWord(props?.values?.title);

  const gotoCategory = () => {
    navigation.navigate('Category');
  }

  return (
    <View style={styles.mainView}>
      <Image style={[styles.bottomImg, { transform: imageRTLStyle }]} source={images.homeBottom} />
      <Text style={[styles.didntFind, { textAlign: textRTLStyle }]}>
        {capitalizedStatus}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.textView, { backgroundColor: appColors.primary, alignSelf: isRTL ? 'flex-end' : 'flex-start', }]}
        onPress={() => (navigation.navigate('CategoryScreen'))}>
        <Text style={styles.text}>{props?.values?.button_text}</Text>
      </TouchableOpacity>
    </View>
  );
};
