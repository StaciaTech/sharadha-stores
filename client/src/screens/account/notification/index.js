import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '@commonComponents';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import NotificationsView from './notificationsView';
import {useDispatch, useSelector} from 'react-redux';
import {readNotification} from '@api/store/actions';

export function Notification({}) {
  const {colors} = useTheme();
  const {notifications, loading} = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      dispatch(readNotification(dispatch));
    }
  }, [isFocused]);

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header image isText titleText={'Notification'} />
      <NotificationsView
        colors={colors}
        showLoader={loading}
        data={notifications}
      />
    </SafeAreaView>
  );
}
