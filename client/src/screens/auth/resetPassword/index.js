import React, { useRef, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContainer } from '@otherComponents';
import { GlobalStyle } from '@style';
import appColors from '@theme/appColors';
import { Button, Input, AnimatedAlert } from '@commonComponents';
import { updatePassword } from '@api/store/actions';
import { HidePassword, ShowPassword } from '@utils/icons';

export function ResetPassword(props) {
  const dispatch = useDispatch();
  const { loading, email } = useSelector(state => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const messageRef = useRef();
  const [message, setMessage] = useState();

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const visibleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: 'Password is Required' };
      });
      isValid = false;
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return { ...prev, password: 'Password Should Be 8 Characters' };
      });
      isValid = false;
    }
    if (!form.confirmPassword) {
      setErrors(prev => {
        return { ...prev, confirmPassword: 'Confirm Password Is Required' };
      });
      isValid = false;
    } else if (form.confirmPassword && form.password != form.confirmPassword) {
      setErrors(prev => {
        return { ...prev, confirmPassword: "Didn't Match To Password." };
      });
      isValid = false;
    }
    if (isValid) {
      handleUpdatePassword(form);
    }
  };

  const handleUpdatePassword = () => {
    const otp = props.route.params.otp;
    let payload = {
      token: otp,
      email: email,
      password: form.password,
      password_confirmation: form.confirmPassword,
    };
    dispatch(updatePassword(payload))
      .unwrap()
      .then(res => {
        if (res?.success) {
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        } else {
          messageRef.current.animate();
          setMessage(res.message);
        }
      });
  };

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <AuthContainer
        title="Reset Password"
        container={
          <View>
            <Input
              placeholder={'Password'}
              rightIcon={showPassword ? <ShowPassword /> : <HidePassword />}
              onChangeText={value => {
                onChange({ name: 'password', value });
              }}
              onPress={visiblePassword}
              error={errors.password}
            />
            <Input
              placeholder={'Confirm Password'}
              rightIcon={
                showConfirmPassword ? <ShowPassword /> : <HidePassword />
              }
              onChangeText={value => {
                onChange({ name: 'confirmPassword', value });
              }}
              onPress={visibleConfirmPassword}
              error={errors.confirmPassword}
            />
            <Button
              style={GlobalStyle.authButton}
              text="Reset Password"
              color={appColors.white}
              loading={loading}
              onPress={getData}
            />
          </View>
        }
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
