import React, { useRef, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContainer } from '@otherComponents';
import { Button, Input, AnimatedAlert } from '@commonComponents';
import { AtSign } from '@utils/icons';
import appColors from '@theme/appColors';
import { forgotPass } from '@api/store/actions';
import { emailValidate } from '@utils/helper';
import { updateEmail } from '@api/store/reducers/authReducer';
import { GlobalStyle } from '@style';

export function ForgotPassword({ navigation }) {
  const dispatch = useDispatch();
  const messageRef = useRef();
  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('test@gmail.com');
  const [emailErrors, setEmailErrors] = useState('');
  const [message, setMessage] = useState();

  const checkEmail = () => {
    if (!email) {
      setEmailErrors('Please Enter Email');
    } else if (!emailValidate.test(email)) {
      setEmailErrors('Please Enter Email');
    } else {
      handleForgotpassword();
    }
  };

  const handleForgotpassword = () => {
    let payload = {
      email: email,
    };
    dispatch(forgotPass(payload))
      .unwrap()
      .then(res => {
        if (res?.success) {
          dispatch(updateEmail(email));
          goToOtp();
        } else {
          messageRef.current.animate();
          if (res.message.includes('Connection')) {
            setMessage('Something Went Wrong Please Try Again Later');
          } else {
            setMessage(res.message);
          }
        }
      });
  };

  const goToOtp = () => {
    navigation.replace('VerifyOtp');
  };

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <AuthContainer
        title="Forgot Password"
        container={
          <View>
            <Input
              rightIcon={<AtSign />}
              placeholder={'Email Address'}
              error={emailErrors}
              onChangeText={value => {
                setEmail(value);
              }}
            />
            <Button
              loading={loading}
              onPress={checkEmail}
              style={GlobalStyle.authButton}
              text="Forgot Password"
              color={appColors.white}
            />
          </View>
        }
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
