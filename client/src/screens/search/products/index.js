import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {Product} from '@commonComponents';

export default products = ({filteredProduct, goToDetail}) => {
  return (
    <FlatList
      style={styles.list}
      data={filteredProduct}
      renderItem={({item}) => (
        <Product
          from={'cart'}
          id={item?.id}
          image={item?.product_thumbnail?.original_url}
          name={item.name}
          weight={item.weight}
          price={item.price}
          sale_price={item.sale_price}
          discount={item.discount}
          totalQuantity={item.quantity}
          paddingRight={windowHeight(10)}
          onPress={() => goToDetail(item)}
          quantity={1}
          show={true}
          increaseVal={() => {}}
          decreaseVal={() => {}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: windowHeight(6),
  },
});
