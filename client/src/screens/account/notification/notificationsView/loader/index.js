import React from 'react';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import {Loader} from '@commonComponents';
import styles from './styles';

const notifications = [{}, {}, {}, {}];

export default dataLoader = props => {
  return (
    <View>
      {notifications.map((_, key) => (
        <View
          key={key}
          style={[
            styles.mainView,
            {
              backgroundColor: props.isDark
                ? appColors.darkDrawer
                : appColors.gray,
              flexDirection: props.viewAlign,
            },
          ]}>
          <View style={styles.txtLeft}>
            <Loader view={<View style={styles.titleLoader} />} />
            <Loader view={<View style={styles.txtLoader} />} />
            <Loader view={<View style={styles.titleLoader} />} />
          </View>
        </View>
      ))}
    </View>
  );
};
