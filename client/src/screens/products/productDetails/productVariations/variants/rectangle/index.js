import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export function RectangleVariant(props) {
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
      <ScrollView style={styles.container} horizontal>
        {props.data.map((item, key) => {
          const disabled = item?.disabled;
          const isSelected = props.selectedAttributes.some(
            selectedAttr =>
              selectedAttr.attribute_id === props.id &&
              selectedAttr.value_id === item.id,
          );
          return (
            <TouchableOpacity
              key={key}
              activeOpacity={disabled ? 0.3 : 0.9}
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
              <View
                style={[
                  styles.borderContainer,
                  isSelected
                    ? {
                        backgroundColor: appColors.primary,
                      }
                    : {
                        backgroundColor: appColors.variantUnselected,
                      },
                ]}>
                <Text
                  style={[
                    styles.textContainer,
                    isSelected
                      ? {
                          color: appColors.white,
                        }
                      : {
                          color: appColors.title,
                        },
                  ]}>
                  {item.value}
                </Text>
              </View>
              {disabled && <View style={styles.line} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
