import React, {useEffect} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import styles from './styles';

export default phoneNumberInput = props => {
  const {colors} = useTheme();
  const {isDark} = useValues();

  useEffect(() => {
    sentValue('91');
  }, []);
  const sentValue = code => {
    props.val == 'user'
      ? props.onChange({
          name: 'userCountryCode',
          value: code,
        })
      : props.onChange({name: 'code', value: code});
  };
  return (
    <PhoneInput
      containerStyle={[
        styles.containerStyle,
        {
          borderColor: isDark ? appColors.dark : appColors.drawer,
        },
      ]}
      textInputProps={{
        placeholderTextColor: props.isDark ? colors.text : appColors.content,
      }}
      disableArrowIcon={true}
      codeTextStyle={[styles.codeStyle, {color: colors.text}]}
      value={props.value}
      textContainerStyle={[
        styles.textContainer,
        {backgroundColor: isDark ? appColors.darkDrawer : appColors.gray},
      ]}
      countryPickerButtonStyle={[
        styles.pickerStyle,
        {backgroundColor: isDark ? appColors.darkDrawer : appColors.gray},
      ]}
      textInputStyle={[styles.inputStyle, {color: colors.text}]}
      defaultValue={props.phone}
      defaultCode="IN"
      // onChangeCountry={value => {
      //   sentValue(value.callingCode[0]);
      // }}
      layout="second"
      onChangeText={text => {
        props.val == 'user'
          ? props.onChange({name: 'userPhone', value: text})
          : props.onChange({name: 'phone', value: text});
      }}
    />
  );
};
