import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles';
import Details from '../../details/index';
import {useTheme} from '@react-navigation/native';

const Unit = ({details}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.secondDetail}>
      <Details name={'Unit'} />
      <Text style={[{color: colors.text}, styles.detailValue]}>
        {details?.unit}
      </Text>
    </View>
  );
};

export default Unit;
