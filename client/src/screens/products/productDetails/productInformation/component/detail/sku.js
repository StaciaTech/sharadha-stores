import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles';
import Details from '../../details/index';
import {useTheme} from '@react-navigation/native';

const Sku = ({variation, details}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.subContainer}>
      <Details name={'SKU'} />
      <Text style={[{color: colors.text}, styles.detailValue]}>
        {variation?.sku || details?.sku}
      </Text>
    </View>
  );
};

export default Sku;
