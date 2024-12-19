import React from 'react';
import {Image, Text, View} from 'react-native';
import images from '@utils/images';
import {Info} from '@utils/icons';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useValues} from '@utils/context';

export default balanceView = ({imageTitle, amount, name}) => {
  const {currSymbol, currValue} = useSelector(state => state.other);
  const {viewRTLStyle} = useValues();

  return (
    <View style={styles.balanceContainer}>
      <Image
        source={images.wallet}
        style={styles.walletBg}
        resizeMode="stretch"
      />
      <View style={styles.detailContainer}>
        <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
          <Text style={styles.title}>{imageTitle}</Text>
          <Text style={styles.amount}>
            {currSymbol}
            {(currValue * amount).toFixed(2)}
          </Text>
        </View>
        {name && (
          <View style={styles.pointsContainer}>
            <Info />
            <Text style={styles.points}>1 Point : $0.03 Balance</Text>
          </View>
        )}
      </View>
    </View>
  );
};
