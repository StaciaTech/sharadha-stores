import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles';

const SubDetails = () => {
  return (
    <View style={styles.titleView}>
      <View>
        <Text style={styles.orderNo}>O.N/Date</Text>
      </View>
      <Text style={styles.orderNo}>Total Amount</Text>
      <Text style={styles.orderNo}>Status</Text>
    </View>
  );
};

export default SubDetails;
