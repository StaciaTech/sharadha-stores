import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export function ColorVariant(props) {
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
              disabled={disabled}
              style={[
                styles.detailContainer,
                isSelected
                  ? {
                      borderColor: appColors.title,
                    }
                  : {
                      borderColor: appColors.variantUnSelectedBorder,
                    },
              ]}>
              <View
                style={[
                  styles.borderContainer,
                  {backgroundColor: item.hex_color},
                  disabled && {opacity: 0.4},
                ]}
              />
              {disabled && <View style={styles.line} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
