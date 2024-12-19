import React, {useState} from 'react';
import {View} from 'react-native';
import {Input} from '@commonComponents';
import {AtSign, Profile} from '@utils/icons';
import PhoneNumberInput from '../../../auth/registration/detailsView/phoneNumberInput';
import {Button} from '@commonComponents';
import appColors from '@theme/appColors';
import styles from './styles';

export default detailsView = props => {
  const [form, setForm] = useState({
    name: props.data?.name,
    email: props.data?.email,
    phone: props.data?.phone.toString(),
  });
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder={'Andrea Joanne'}
        value={form.name}
        onChangeText={value => {
          onChange({name: 'name', value});
        }}
        error={errors.name}
        rightIcon={<Profile />}
      />
      <Input
        placeholder={'andreajoanne@gmail.com'}
        value={form.email}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        error={errors.email}
        rightIcon={<AtSign />}
      />
      <View style={styles.phoneInput}>
        <PhoneNumberInput onChange={onChange} phone={form.phone} />
      </View>
      <Button
        text={'Update Profile'}
        style={styles.button}
        color={appColors.white}
        onPress={() => props.updateProfile(form)}
        loading={props.loading}
      />
    </View>
  );
};
