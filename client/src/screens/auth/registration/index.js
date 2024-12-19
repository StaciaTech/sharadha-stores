import React, {useRef, useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from '../login/detailsView/styles';
import {useTheme} from '@react-navigation/native';
import DetailsView from './detailsView';
import {useValues} from '@utils/context';
import {useDispatch, useSelector} from 'react-redux';
import {userRegistration, cartData, selfData} from '@api/store/actions';
import {AuthContainer} from '@otherComponents';
import {GlobalStyle} from '@style';
import {AnimatedAlert} from '@commonComponents';
import {setValue} from '@utils/localStorage';
import {updateLoading} from '@api/store/reducers/authReducer';

export function Registration(props) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const messageRef = useRef();
  const [message, setMessage] = useState();

  const {textRTLStyle, isDark, setToken} = useValues();

  const goToHome = () => {
    setTimeout(() => {
      props.navigation.replace('Tab');
    }, 1000);
  };

  const goToPage = () => {
    props.navigation.goBack();
  };

  const handleRegister = form => {
    let payload = {
      name: form.fullName,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
      country_code: form.code || '1',
      phone: form.phone,
    };
    dispatch(userRegistration(payload))
      .unwrap()
      .then(res => {
        if (res?.success) {
          updateLoading(true);
          setValue('token', res.access_token);
          setToken(res.access_token);
          dispatch(selfData());
          dispatch(cartData());
          goToHome();
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

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <AuthContainer
        title="Register Account"
        container={
          <View>
            <DetailsView
              colors={colors}
              textAlign={textRTLStyle}
              isDark={isDark}
              loading={loading}
              handleRegister={handleRegister}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={goToPage}>
              <Text style={styles.createAcc}>
                Already Have An Account?{' '}
                <Text style={styles.signUp}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
