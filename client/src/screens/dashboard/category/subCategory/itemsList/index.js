import React from 'react';
import { FlatList, View } from 'react-native';
import { emptyProducts } from '@api/store/reducers/productReducer';
import Items from './items';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useDispatch } from 'react-redux';

export default itemsList = ({ subCategory }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const goToList = item => {
    dispatch(emptyProducts());
    navigate('ProductsList', {
      title: item.name,
      slug: item.slug,
      icon: item?.category_icon,
    });
  };

  return (
    <View>
      <FlatList
        data={subCategory}
        numColumns={4}
        style={styles.containerStyle}
        columnWrapperStyle={styles.columnStyle}
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item, index }) => (
          <Items onPress={() => goToList(item)} item={item} />
        )}
      />
    </View>
  );
};
