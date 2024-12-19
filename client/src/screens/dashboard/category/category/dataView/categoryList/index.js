import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {NoImage} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import styles from './styles';

const CategoryList = ({item, isDark, appColors, colors, matchValue}) => {
  return (
    <TouchableOpacity
      onPress={() => matchValue(item.id, item.subcategories, item)}
      activeOpacity={0.8}
      style={styles.itemContainer}>
      <View
        style={[
          styles.categoryView,
          {
            backgroundColor: isDark
              ? appColors.darkDrawer
              : appColors.categoryBg,
          },
        ]}>
        {item?.category_image ? (
          <FastImage
            style={styles.categoryImg}
            source={{uri: item?.category_image?.original_url}}
            resizeMode={FastImage.resizeMode.contain}
          />
        ) : (
          <NoImage height={windowHeight(50)} width={windowWidth(50)} />
        )}
      </View>
      <Text style={[styles.name, {color: colors.text}]}>
        {item.name.slice(0, 24)}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryList;
