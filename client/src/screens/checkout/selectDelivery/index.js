import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Header, Button} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import {useSelector} from 'react-redux';
import {Address} from '@otherComponents';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import Title from './title';
import DefaultDelivery from './defaultDelivery';
import Intervals from './intervals';
import styles from './styles';

export function SelectDelivery({navigation, route}) {
  const {colors} = useTheme();
  const {defaultAddress} = useSelector(state => state.account);

  const {settings} = useSelector(state => state.other);
  const [deliveryType, setDeliveryType] = useState(0);
  const [expressSlot, setExpressSlot] = useState(0);
  const [deliveryDesc, setdeliveryDesc] = useState(
    settings?.delivery.default.title +
      ' | ' +
      settings?.delivery.default.description,
  );
  const [deliveryInterval, setDeliveryInterval] = useState('');
  const data = route?.params?.form;
  const {token, viewRTLStyle} = useValues();

  const gotoPayment = () => {
    navigation.navigate('SelectPayment', {
      deliveryDesc,
      deliveryInterval,
      data,
      from: 'delivery',
    });
  };
  const gotoAddress = () => {
    navigation.navigate('SelectAddress', {from: 'delivery'});
  };
  const goToAdd = () => {
    navigation.navigate('AddAddress', {add: defaultAddress});
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header image isText titleText={'Select Delivery'} />
      {token && (
        <Title
          defaultAddress={defaultAddress}
          viewRTLStyle={viewRTLStyle}
          onPress={gotoAddress}
        />
      )}
      {defaultAddress && (
        <Address
          editPress={goToAdd}
          borderColor={appColors.primary}
          city={defaultAddress.city}
          country={defaultAddress.country.name}
          onPress={''}
          phone={defaultAddress.phone}
          pincode={defaultAddress.pincode}
          street={defaultAddress.street}
          title={defaultAddress.title}
        />
      )}
      <View style={styles.options}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Delivery Options
        </Text>

        {settings?.delivery.default_delivery == 1 && (
          <DefaultDelivery
            onPress={() => {
              const desc =
                settings?.delivery.default.title +
                ' | ' +
                settings?.delivery.default.description;
              setDeliveryType(0);
              setdeliveryDesc(desc);
              setDeliveryInterval('');
            }}
            colors={colors}
            deliveryType={deliveryType == 0}
            viewRTLStyle={viewRTLStyle}
            title={
              settings?.delivery.default.title +
              ' | ' +
              settings?.delivery.default.description
            }
          />
        )}
        {settings?.delivery.same_day_delivery && (
          <DefaultDelivery
            onPress={() => {
              const desc =
                settings?.delivery.same_day.title +
                ' | ' +
                settings?.delivery.same_day.description;
              setDeliveryType(1);
              setdeliveryDesc(desc);
            }}
            colors={colors}
            deliveryType={deliveryType == 1}
            viewRTLStyle={viewRTLStyle}
            title={
              settings?.delivery.same_day.title +
              ' | ' +
              settings?.delivery.same_day.description
            }
          />
        )}
        {deliveryType == 1 && (
          <Intervals
            data={settings?.delivery.same_day_intervals}
            onPress={(index, item) => {
              setExpressSlot(index);
              setDeliveryInterval(item.description);
            }}
            expressSlot={expressSlot}
          />
        )}
      </View>
      <Button
        text={'Proceed To Payment'}
        style={[
          styles.btn,
          {
            backgroundColor: appColors.primary,
          },
        ]}
        disable={token && !defaultAddress}
        color={appColors.white}
        onPress={gotoPayment}
      />
    </SafeAreaView>
  );
}
