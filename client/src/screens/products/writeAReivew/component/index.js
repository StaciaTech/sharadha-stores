import {Text, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';

const ReviewProduct = ({productDetail}) => {
  const {colors} = useTheme();

  return (
    <>
      <Image
        source={{uri: productDetail.product_thumbnail.original_url}}
        style={styles.img}
      />
      <Text
        style={[
          styles.name,
          {
            color: colors.text,
          },
        ]}>
        {productDetail.name}
      </Text>
      <Text
        style={[
          styles.product,
          styles.spaceTop,
          {
            color: colors.text,
          },
        ]}>
        How was the Product?
      </Text>
    </>
  );
};

export default ReviewProduct;
