import React from 'react';
import {FlatList} from 'react-native';
import {ProductLoader} from '@commonComponents/product/loader';
import {useValues} from '@utils/context';
import {NoDataFound} from '@otherComponents';
import images from '@utils/images';
import styles from './styles';
import Items from './items/index';

export default productView = ({navigation, showLoader, data, onPress}) => {
  const {isDark} = useValues();

  const gotoList = () => {
    navigation.goBack();
  };

  return showLoader ? (
    <ProductLoader />
  ) : data?.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.product}
      data={data}
      renderItem={({item}) => (
        <Items item={item} increaseValue={onPress} decreaseValue={onPress} />
      )}
    />
  ) : (
    <NoDataFound
      onPress={gotoList}
      img={isDark ? images.noProductsDark : images.noProducts}
      title={"Oops! It's Empty"}
      subTitle={'There Are No Products Under This Category Right Now.'}
      btnText={'Check Other Category'}
    />
  );
};
