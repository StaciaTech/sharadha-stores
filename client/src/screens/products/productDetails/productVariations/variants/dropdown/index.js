import React, {useState} from 'react';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {useValues} from '@utils/context';
import {View, Text} from 'react-native';
import styles from './styles';

export function DropDownVariation(props) {
  const {colors} = useTheme();
  const {isDark} = useValues();
  const [selected, setSelected] = useState(props?.data[0]?.slug);

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
      <Dropdown
        style={[
          styles.dropdown,
          {
            backgroundColor: isDark ? colors.primary : appColors.gray,
          },
        ]}
        placeholderStyle={[
          styles.placeholderStyle,
          {
            color: isDark ? colors.text : appColors.content,
          },
        ]}
        itemTextStyle={[
          styles.selectedTextStyle,
          {
            color: colors.text,
          },
        ]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {
            color: colors.text,
          },
        ]}
        data={props.data.map(option => ({
          value: option.slug,
          label: option.value,
          id: option.id,
        }))}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Choose Litre'}
        value={selected}
        errStyle={styles.err}
        onChange={item => {
          props.onPress(props.id, item.id);
          setSelected(item.value);
        }}
      />
    </View>
  );
}
