import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from '@commonComponents';
import appColors from '@theme/appColors';
import { ShowPassword, HidePassword, ChangePasswordLock } from '@utils/icons';
import { useDispatch } from 'react-redux';
import { updatePassword } from '@api/store/actions';
import styles from './styles';

export function ChangePassword() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
    }
  };

  const getData = () => {
    let isValid = true;
    if (!form.oldPass) {
      setErrors(prev => {
        return { ...prev, oldPass: 'Password is Required' };
      });
      isValid = false;
    }
    if (!form.newPass) {
      setErrors(prev => {
        return { ...prev, newPass: 'New Password is Required' };
      });
      isValid = false;
    }
    if (form.newPass && form.newPass.length < 8) {
      setErrors(prev => {
        return { ...prev, newPass: 'Password Should Be 8 Characters' };
      });
      isValid = false;
    }
    if (!form.confirmPass) {
      setErrors(prev => {
        return { ...prev, confirmPass: 'Confrim Password is Required' };
      });
      isValid = false;
    }
    if (form.newPass && form.newPass != form.confirmPass) {
      setErrors(prev => {
        return { ...prev, confirmPass: "Didn't Match To Password." };
      });
      isValid = false;
    }
    if (isValid) {
      updatePass();
    }
  };

  const updatePass = () => {
    const data = {
      current_password: form.oldPass,
      password: form.newPass,
      password_confirmation: form.confirmPass,
    };
    dispatch(updatePassword(data));
  };

  return (
    <View>
      <Header isText titleText="ChangePassword" showImage />
      <Input
        placeholder={'Old Password'}
        leftIcon={<ChangePasswordLock />}
        onChangeText={value => onChange({ name: 'oldPass', value })}
        rightIcon={showOldPassword ? <ShowPassword /> : <HidePassword />}
        error={errors.oldPass}
        onPress={() => setShowOldPassword(!showOldPassword)}
        secureTextEntry={!showOldPassword}
        errStyle={styles.err}
      />
      <Input
        placeholder={'New Password'}
        leftIcon={<ChangePasswordLock />}
        onChangeText={value => onChange({ name: 'newPass', value })}
        rightIcon={showNewPassword ? <ShowPassword /> : <HidePassword />}
        error={errors.newPass}
        onPress={() => setShowNewPassword(!showNewPassword)}
        secureTextEntry={!showNewPassword}
        errStyle={styles.err}
      />
      <Input
        placeholder={'Confirm Password'}
        leftIcon={<ChangePasswordLock />}
        onChangeText={value => onChange({ name: 'confirmPass', value })}
        rightIcon={showConfirmPassword ? <ShowPassword /> : <HidePassword />}
        error={errors.confirmPass}
        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        secureTextEntry={!showConfirmPassword}
        errStyle={styles.err}
      />
      <Button
        style={styles.button}
        onPress={getData}
        text={'Change Password'}
        color={appColors.white}
      />
    </View>
  );
}
