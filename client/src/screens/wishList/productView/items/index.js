import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Product} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {useSelector} from 'react-redux';
import styles from './styles';

const ProductView = ({onPress, item, toCart}) => {
  const {cartList} = useSelector(state => state.cart);
  const [showCart, setShowCart] = useState(true);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    const matchingCartItem = cartList?.find(
      cartItem => cartItem.id === item.id,
    );
    setShowCart(!matchingCartItem);
  };

  return (
    <Product
      from={''}
      id={item?.id}
      image={item?.thumbnail}
      name={item?.name}
      weight={item?.weight}
      price={item?.price}
      sale_price={item?.sale_price}
      discount={item?.discount}
      paddingRight={windowHeight(10)}
      onPress={onPress}
      quantity={item?.quantity}
      style={styles.productStyle}
      view={
        showCart ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.cartContainer}
            onPress={() => toCart(item)}>
            <Text style={styles.cart}>Move To Cart</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )
      }
    />
  );
};

export default ProductView;
