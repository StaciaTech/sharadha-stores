import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Details from '../../details/index';
import styles from '../../styles';

const Stock = ({variation, details}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.secondDetail}>
      <Details name={'Stock Status'} />
      <Text style={[{color: colors.text}, styles.detailValue]}>
        {variation?.stock_status === 'in_stock' ||
        details.stock_status === 'in_stock'
          ? 'In Stock'
          : 'Out of Stock'}
      </Text>
    </View>
  );
};

export default Stock;
