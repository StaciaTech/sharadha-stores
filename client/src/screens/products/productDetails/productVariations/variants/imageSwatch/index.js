import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export function ImageSwatch(props) {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.mainContainer,
        {
          borderColor: colors.border,
        },
      ]}>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}>
        {props.title}
      </Text>
      <View style={styles.container}>
        {props?.data?.map((item, key) => {
          const disabled = item?.disabled;
          const isSelected = props.selectedAttributes.some(
            selectedAttr =>
              selectedAttr.attribute_id === props.id &&
              selectedAttr.value_id === item.id,
          );
          return (
            <TouchableOpacity
              activeOpacity={disabled ? 0.3 : 0.9}
              key={key}
              onPress={() => !disabled && props.onPress(props.id, item.id)}
              style={[
                styles.detailContainer,
                isSelected
                  ? {
                      borderColor: appColors.primary,
                    }
                  : {
                      borderColor: appColors.variantUnSelectedBorder,
                    },
                disabled && {opacity: 0.4},
              ]}>
              <FastImage
                style={styles.img}
                resizeMode="contain"
                source={{uri: item.variation_image.original_url}}
              />
              {disabled && <View style={styles.line} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
