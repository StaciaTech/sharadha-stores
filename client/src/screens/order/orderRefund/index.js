import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Button, AnimatedAlert} from '@commonComponents';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import {useDispatch, useSelector} from 'react-redux';
import appFonts from '@theme/appFonts';
import {UnSelect, Selected} from '@utils/icons';
import {useValues} from '@utils/context';
import {refundOrder} from '@api/store/actions';
import styles from './styles';

export function OrderRefund({navigation, route}) {
  const {colors} = useTheme();
  const [isSelected, setIsSelected] = useState(0);
  const [refund, setRefund] = useState('');
  const [slug, setSlug] = useState('');
  const {viewRTLStyle} = useValues();
  const {currSymbol, currValue} = useSelector(state => state.other);
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.order);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const messageRef = useRef();

  const options = [
    {title: 'Wallet', slug: 'wallet'},
    {title: 'Paypal', slug: 'paypal'},
    {title: 'Bank', slug: 'bank'},
  ];

  const item = route.params.item;

  const getRefund = async () => {
    const id = item.id;
    const data = {
      product_id: id,
      reason: refund,
      payment_type: slug,
    };
    const res = await dispatch(refundOrder(data));
    if (res != 'error') {
      refundRes('Refund Requested Successful', true);
      route.params.getData();
      setTimeout(() => {
        navigation.goBack();
      }, 3000);
    } else {
      refundRes('Something Went Wrong, Please Try Again Later', false);
    }
  };

  const refundRes = (message, status) => {
    messageRef.current.animate();
    setMessage(message);
    setSuccess(status);
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header isText titleText={'Refund Order'} />
      <View style={{alignItems: 'center'}}>
        {item?.product_thumbnail?.original_url && (
          <Image
            source={{
              uri: item?.product_thumbnail?.original_url,
            }}
            style={styles.refundImg}
          />
        )}
        <Text
          style={[
            styles.name,
            {
              color: colors.text,
            },
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.amount,
            {
              color: colors.text,
            },
          ]}>
          {currSymbol} {(currValue * item.order_amount).toFixed(2)}
        </Text>
      </View>
      <View style={styles.ph_20}>
        <Text style={[styles.customFont, {color: colors.text}]}>Reason*</Text>
        <TextInput
          value={refund}
          onChangeText={val => setRefund(val)}
          multiline
          style={[
            styles.input,
            {
              color: colors.text,
            },
          ]}
        />
        <Text
          style={[
            styles.paymentOption,
            {
              color: colors.text,
            },
          ]}>
          Payment Option
        </Text>
        {options.map((item, key) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setSlug(item.slug);
              setIsSelected(key);
            }}
            key={key}
            style={[
              styles.clickSelect,
              {
                flexDirection: viewRTLStyle,
              },
            ]}>
            <Text
              style={{
                color: colors.text,
                fontFamily: appFonts.mulish,
              }}>
              {item.title}
            </Text>
            {isSelected == key ? <Selected /> : <UnSelect />}
          </TouchableOpacity>
        ))}
        <Button
          onPress={getRefund}
          loading={loading}
          text={'Refund'}
          disable={!refund}
          color={appColors.white}
          style={styles.refBtn}
        />
      </View>
      <AnimatedAlert text={message} ref={messageRef} success={success} />
    </SafeAreaView>
  );
}
