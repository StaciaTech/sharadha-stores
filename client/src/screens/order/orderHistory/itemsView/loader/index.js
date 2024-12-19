import React from 'react';
import {FlatList, View} from 'react-native';
import appColors from '@theme/appColors';
import OrderStyles from '../orderListItem/styles';
import {Loader} from '@commonComponents';
import styles from './styles';

const orderHistory = [{}, {}, {}, {}, {}];

export default itemsLoader = props => {
  return (
    <FlatList
      data={orderHistory}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={() => (
        <View
          style={[
            OrderStyles.listView,
            {
              backgroundColor: props.isDark
                ? appColors.darkDrawer
                : appColors.gray,
            },
          ]}>
          <View style={OrderStyles.subView}>
            <View style={styles.direction}>
              <Loader view={<View style={styles.idLoader} />} />
              <Loader view={<View style={styles.status} />} />
            </View>
            <Loader view={<View style={styles.idLoader} />} />
          </View>
          <View style={styles.direction}>
            <Loader view={<View style={styles.orderAgainLoader} />} />
            <Loader view={<View style={styles.orderAgainLoader} />} />
          </View>
        </View>
      )}
    />
  );
};
