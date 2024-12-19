import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default addNew = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.newAddView, {flexDirection: props.viewAlign}]}>
      <Text style={styles.addAdd}>+</Text>
      <Text style={styles.addAdd}> {props.text}</Text>
    </TouchableOpacity>
  );
};
