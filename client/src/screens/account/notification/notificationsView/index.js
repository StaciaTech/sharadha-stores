import React from 'react';
import { View, FlatList } from 'react-native';
import Loader from './loader';
import { useValues } from '@utils/context';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import NotificationItem from './notificationItem/index';

export default notificationsView = props => {
  const { viewRTLStyle, viewSelfRTLStyle, isDark } = useValues();
  const { colors } = useTheme();

  return props.showLoader ? (
    <Loader
      isDark={isDark}
      viewAlign={viewRTLStyle}
      selfAlign={viewSelfRTLStyle}
    />
  ) : (
    <FlatList
      data={props.data}
      ItemSeparatorComponent={() => (
        <View style={[styles.separator, { backgroundColor: colors.border }]} />
      )}
      contentContainerStyle={styles.list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <NotificationItem
          item={item}
          colors={props.colors}
          textRTLStyle={props.textRTLStyle}
        />
      )}
    />
  );
};
