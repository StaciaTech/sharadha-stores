import React from 'react';
import {View} from 'react-native';
import OrderStyles from '../styles';
import {Loader} from '@commonComponents';
import styles from './styles';

const items = [{}, {}, {}, {}];

export default ItemsLoader = props => {
  return (
    <>
      <Loader view={<View style={styles.mainTitleLoader} />} />
      {items.map((_, key) => (
        <View
          key={key}
          style={[OrderStyles.listView, {flexDirection: props.viewAlign}]}>
          <Loader view={<View style={styles.quantityLoader} />} />
          <View style={[styles.dataView, {flexDirection: props.viewAlign}]}>
            <View style={OrderStyles.nameView}>
              <Loader view={<View style={styles.titleLoader} />} />
              <Loader view={<View style={styles.titleLoader} />} />
              <Loader
                view={
                  <View
                    style={[styles.gramLoader, {alignSelf: props.selfAlign}]}
                  />
                }
              />
            </View>
            <Loader view={<View style={styles.priceLoader} />} />
          </View>
        </View>
      ))}
    </>
  );
};
