import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import styles from './styles';

export default items = ({image, name, catName, id}) => {
  const {colors} = useTheme();
  const {navigate} = useNavigation();

  const goToDetail = () => {
    navigate('ProductsDetails', {id});
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.img}
      />
      <TouchableOpacity style={styles.categoryContainer} onPress={goToDetail}>
        <Text
          style={[
            styles.categoryName,
            {
              color: colors.text,
            },
          ]}>
          {name}
        </Text>
        <Text
          style={[
            styles.categoryName,
            {
              color: colors.text,
            },
          ]}>
          {catName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
