import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {CommonActions} from '@react-navigation/native';

export function Payment({navigation, route}) {
  const handleResponse = data => {
    if (data.url.includes('order/details?order_number')) {
      const orderNum = data.url.split('?')[1].split('&')[0].split('=')[1];
      removeScreens(orderNum);
    }
  };

  const removeScreens = orderNum => {
    navigation.dispatch(state => {
      const routes = state.routes.slice(0, -3);
      const index = routes.length - 1;
      return CommonActions.reset({
        index,
        routes,
      });
    });
    navigation.navigate('OrderDetails', {
      id: orderNum,
      email: route?.params?.email,
    });
  };

  return (
    <WebView
      style={styles.modalview}
      startInLoadingState={true}
      incognito={true}
      androidLayerType="hardware"
      cacheEnabled={false}
      cacheMode={'LOAD_NO_CACHE'}
      source={{uri: route.params.url}}
      onNavigationStateChange={data => handleResponse(data)}
    />
  );
}

const styles = StyleSheet.create({
  modalview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
