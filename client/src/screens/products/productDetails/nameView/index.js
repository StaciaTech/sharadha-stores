import React from 'react';
import {View, NativeModules, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import Brand from './component/brand/index';
import Seller from './component/seller/index';
import Ratings from './component/rating/index';

export default nameView = ({productName, quantity, price}) => {
  const {currSymbol, currValue} = useSelector(state => state.other);
  const {UIManager} = NativeModules;

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  return (
    <View style={styles.container}>
      {/* <Brand
        currSymbol={currSymbol}
        currValue={currValue}
        details={details}
        variation={variation}
      />
      <Seller
        currSymbol={currSymbol}
        currValue={currValue}
        details={details}
        variation={variation}
      /> */}
      <View>
      <Text style={{ color: "#000000", fontWeight: "400", fontSize: 20, fontFamily: 'Poppins' }}>{productName}</Text>
      <Text style={{ color: "#4C5988", fontWeight: "400", fontSize: 14, fontFamily: 'Poppins' }}>{quantity}g</Text>
      </View>
      <Text style={{ color: "#000000", fontWeight: "700", fontSize: 20, fontFamily: 'Poppins' }}>{currSymbol}{price}</Text>
      {/* <Ratings details={details} variation={variation} /> */}
    </View>
  );
};
