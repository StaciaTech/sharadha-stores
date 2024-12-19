import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Selected, UnSelect} from '@utils/icons';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export function RadioButtonVariant(props) {
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
              onPress={() => !disabled && props.onPress(props.id, item.id)}>
              <View
                style={[
                  styles.detailContainer,
                  disabled && {
                    opacity: 0.4,
                  },
                ]}>
                {isSelected ? <Selected /> : <UnSelect />}
                <Text style={styles.textContainer}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
