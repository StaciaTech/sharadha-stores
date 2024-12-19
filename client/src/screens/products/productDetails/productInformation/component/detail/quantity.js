import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {useTheme} from '@react-navigation/native';
import Details from '../../details/index';

const Quantity = ({variation, details}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.spaceTop}>
      <Details name={'Quantity'} />
      <Text
        style={[
          {
            color: colors.text,
          },
          styles.detailValue,
        ]}>
        {variation?.quantity || details?.quantity} Items Left
      </Text>
    </View>
  );
};

export default Quantity;
