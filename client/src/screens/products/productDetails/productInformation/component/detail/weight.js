import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import styles from '../../styles';
import Details from '../../details/index';

const Weight = ({details}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.secondDetail}>
      <Details name={'Weight'} />
      <Text style={[{color: colors.text}, styles.detailValue]}>
        {details?.weight}
      </Text>
    </View>
  );
};

export default Weight;
