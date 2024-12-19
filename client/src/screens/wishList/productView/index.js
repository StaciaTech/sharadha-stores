import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductLoader} from '@commonComponents/product/loader';
import {SwipeToDelete} from '@otherComponents';
import styles from './styles';
import Items from './items';

export default productView = ({
  navigation,
  showLoader,
  colors,
  removeFromWishlist,
  data,
  onPress,
}) => {
  const goToDetail = id => {
    navigation.navigate('ProductsDetails', {id});
  };

  return showLoader ? (
    <ProductLoader />
  ) : (
    <FlatList
      data={data}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => (
        <SwipeToDelete
          colors={colors}
          visibleDeleteModal={() => removeFromWishlist(item)}
          content={
            <Items
              onPress={() => goToDetail(item.id)}
              item={item}
              toCart={() => onPress(item)}
            />
          }
        />
      )}
    />
  );
};
