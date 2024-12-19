import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Button, Header, Input, AnimatedAlert} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {addPaymentAccount, getPaymentAccount} from '@api/store/actions';
import {emailValidate} from '@utils/helper';
import styles from './styles';

export function BankDetails({}) {
  const {colors} = useTheme();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const messageRef = useRef();
  const dispatch = useDispatch();
  const {loading, accountDetails} = useSelector(state => state.account);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  useEffect(() => {
    dispatch(getPaymentAccount());
  }, []);

  useEffect(() => {
    if (accountDetails != 'Error') {
      setForm({
        accountNo: accountDetails?.bank_account_no,
        bankName: accountDetails?.bank_name,
        holderName: accountDetails?.bank_holder_name,
        swift: accountDetails?.swift,
        ifsc: accountDetails?.ifsc,
        paypalEmail: accountDetails?.paypal_email,
      });
    }
  }, [accountDetails]);

  const addAccount = async () => {
    const data = {
      bank_account_no: form.accountNo,
      bank_name: form.bankName,
      bank_holder_name: form.holderName,
      swift: form.swift,
      ifsc: form.ifsc,
      status: 1,
      paypal_email: form.paypalEmail,
    };
    const res = await dispatch(addPaymentAccount(data));
    if (res.payload != 'Error') {
      showAlert(true, 'Details Updated Successfully.');
    } else {
      showAlert(false, 'Something went wrong please try again.');
    }
  };

  const showAlert = (type, message) => {
    setSuccess(type);
    messageRef.current.animate();
    setMessage(message);
  };

  const onSubmit = () => {
    let isValid = true;
    if (!emailValidate.test(form.paypalEmail)) {
      setErrors(prev => {
        return {...prev, paypalEmail: 'Enter valid email address'};
      });
      isValid = false;
    }
    if (isValid) {
      addAccount();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header image isText titleText="Bank Details" />
      <ScrollView>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Bank Details
        </Text>
        <Input
          keyboardType={'number-pad'}
          placeholder="Bank Account No"
          value={form.accountNo}
          onChangeText={value => {
            onChange({name: 'accountNo', value});
          }}
          errStyle={styles.err}
          error={errors.accountNo}
        />
        <Input
          placeholder="Bank Name"
          value={form.bankName}
          onChangeText={value => {
            onChange({name: 'bankName', value});
          }}
          errStyle={styles.err}
          error={errors.bankName}
        />
        <Input
          placeholder="Holder Name"
          value={form.holderName}
          onChangeText={value => {
            onChange({name: 'holderName', value});
          }}
          errStyle={styles.err}
          error={errors.holderName}
        />
        <Input
          placeholder="Swift"
          value={form.swift}
          onChangeText={value => {
            onChange({name: 'swift', value});
          }}
          errStyle={styles.err}
          error={errors.swift}
        />
        <Input
          placeholder="IFSC"
          value={form.ifsc}
          onChangeText={value => {
            onChange({name: 'ifsc', value});
          }}
          errStyle={styles.err}
          error={errors.ifsc}
        />
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
              marginTop: windowHeight(20),
            },
          ]}>
          Paypal Details
        </Text>
        <Input
          keyboardType={'email-address'}
          placeholder="Paypal Email"
          value={form.paypalEmail}
          onChangeText={value => {
            onChange({name: 'paypalEmail', value});
          }}
          errStyle={styles.err}
          error={errors.paypalEmail}
        />
        <Button
          onPress={onSubmit}
          text={'Save'}
          color={appColors.white}
          style={styles.button}
          loading={loading}
        />
      </ScrollView>
      <AnimatedAlert text={message} ref={messageRef} success={success} />
    </SafeAreaView>
  );
}
