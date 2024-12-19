import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NoImage} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default items = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.imgView}>
      <View style={styles.itemImg}>
        {item?.category_image ? (
          <FastImage
            style={styles.categoryImg}
            source={{uri: item?.category_image?.original_url}}
          />
        ) : (
          <NoImage height={windowHeight(40)} width={windowWidth(40)} />
        )}
      </View>
      <Text style={styles.nameTxt}>{item.name}</Text>
    </TouchableOpacity>
  );
};
