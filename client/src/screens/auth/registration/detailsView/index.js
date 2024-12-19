import React, {useState} from 'react';
import {View} from 'react-native';
import {Input} from '@commonComponents';
import {HidePassword, ShowPassword, FullName, AtSign} from '@utils/icons';
import {emailValidate} from '@utils/helper';
import appColors from '@theme/appColors';
import {Button} from '@commonComponents';
import PhoneNumberInput from './phoneNumberInput';
import {GlobalStyle} from '@style';

export default detailsView = props => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const visibleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const getData = () => {
    let isValid = true;
    if (!form.fullName) {
      setErrors(prev => {
        return {...prev, fullName: 'Full Name is Required.'};
      });
      isValid = false;
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Email is Required'};
      });
      isValid = false;
    } else if (!emailValidate.test(form.email)) {
      setErrors(prev => {
        return {...prev, email: 'Enter valid email address'};
      });
      isValid = false;
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Password is Required'};
      });
      isValid = false;
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return {...prev, password: 'Password should be 8 characters'};
      });
      isValid = false;
    }
    if (!form.phone) {
      setErrors(prev => {
        return {...prev, phone: 'Phone Number is Required'};
      });
      isValid = false;
    }
    if (form.password && form.password != form.confirmPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: "Didn't match to password."};
      });
      isValid = false;
    }
    if (isValid) {
      props.handleRegister(form);
    }
  };

  return (
    <View style={{paddingBottom: 50}}>
      <Input
        placeholder={'Full Name'}
        onChangeText={value => {
          onChange({name: 'fullName', value});
        }}
        rightIcon={<FullName />}
        error={errors.fullName}
      />
      <Input
        placeholder={'Email Address'}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        rightIcon={<AtSign />}
        error={errors.email}
      />
      <PhoneNumberInput
        isDark={props.isDark}
        phone={form.phone}
        onChange={onChange}
      />
      <Input
        placeholder={'Password'}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
        rightIcon={showPassword ? <ShowPassword /> : <HidePassword />}
        error={errors.password}
        onPress={visiblePassword}
        secureTextEntry={!showPassword}
      />
      <Input
        placeholder={'Confirm Password'}
        onChangeText={value => {
          onChange({name: 'confirmPassword', value});
        }}
        rightIcon={showConfirmPassword ? <ShowPassword /> : <HidePassword />}
        error={errors.confirmPassword}
        onPress={visibleConfirmPassword}
        secureTextEntry={!showConfirmPassword}
      />
      <Button
        text={'Sign Up'}
        style={GlobalStyle.authButton}
        color={appColors.white}
        onPress={getData}
        loading={props.loading}
      />
    </View>
  );
};
