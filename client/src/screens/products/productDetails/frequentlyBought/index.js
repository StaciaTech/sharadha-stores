import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {useSelector} from 'react-redux';
import {windowWidth} from '@theme/appConstant';
import {Check} from '@utils/icons';
import styles from './styles';

export default FrequentlyBought = ({
  cross_products,
  colors,
  viewRTLStyle,
  textRTLStyle,
  getData,
}) => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {currSymbol, currValue} = useSelector(state => state.other);
  const { cartList } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   selectPro();
  // }, []);

  // const selectPro = () => {
  //   const pro = cross_products.map(val => ({...val, selected: false}));
  //   setProducts(pro);
  // };

  // const changeSelected = id => {
  //   var total = 0;
  //   const pro = products.map(item => {
  //     if (item?.id === id) {
  //       return {...item, selected: !item.selected};
  //     } else {
  //       return item;
  //     }
  //   });
  //   const select = pro.filter(item => item.selected);
  //   getData(select);
  //   pro.filter(item => {
  //     if (item.selected) {
  //       total = total + item.sale_price;
  //     }
  //   });
  //   setTotalPrice(total.toFixed(2));
  //   setSelected(select.length);
  //   setProducts(pro);
  // };

  // useEffect(() => {
  //   checkValue();
  // }, [cartList]);

  // const checkValue = () => {
  //   const id = item.id;
  //   if (cartList?.length > 0) {
  //     const matchedItem = cartList.find((val) => val.id === id);
  //     if (matchedItem) {
  //       setShow(true);
  //       setQuantity(matchedItem.quantity);
  //     } else {
  //       setShow(false);
  //     }
  //   } else {
  //     setShow(false);
  //   }
  // };

  // const addDataToCart = async (item, newQuantity, valueType) => {
  //   try {
  //     // Dispatch an action to update the backend
  //     await updateCartInBackend(item.id, valueType);

  //     // Get current cart data from local storage
  //     const cartData = await getValue("cartData");
  //     const parsedCart = cartData ? JSON.parse(cartData) : [];

  //     // Find if the item already exists in the cart
  //     const itemIndex = parsedCart.findIndex(
  //       (cartItem) => cartItem.id === item.id
  //     );

  //     let updatedCart;

  //     if (itemIndex !== -1) {
  //       // If item exists in the cart
  //       if (newQuantity === 0 && valueType !== "increase") {
  //         // Remove item if quantity is 0
  //         updatedCart = removeItemFromCart(parsedCart, item.id);
  //       } else {
  //         // Update quantity of existing item
  //         updatedCart = updateItemQuantity(parsedCart, itemIndex, newQuantity);
  //       }
  //     } else {
  //       // Add new item to the cart
  //       updatedCart = addItemToCart(parsedCart, item, newQuantity);
  //     }

  //     // Save the updated cart to Redux and local storage
  //     storeCart(updatedCart);
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //   }
  // };

  // const updateCartInBackend = async (id, valueType) => {
  //   const payload = {
  //     product_id: id,
  //     variationId: "",
  //     quantity: valueType === "increase" ? 1 : -1,
  //   };
  //   await dispatch(addToCart(payload));
  // };

  // const removeItemFromCart = (cart, itemId) => {
  //   return cart.filter((cartItem) => cartItem.id !== itemId);
  // };

  // const updateItemQuantity = (cart, itemIndex, quantity) => {
  //   const updatedCart = [...cart];
  //   updatedCart[itemIndex].quantity = quantity;
  //   return updatedCart;
  // };

  // const addItemToCart = (cart, item, quantity) => {
  //   const newItem = { ...item, quantity };
  //   return [...cart, newItem];
  // };

  // const storeCart = (cart) => {
  //   dispatch(updateCartValue(cart));
  //   setValue("cartData", JSON.stringify(cart));
  // };


  return (
    <View style={styles.container}>
      <Text
        style={[
          {
            color: colors.text,
            textAlign: textRTLStyle,
          },
          styles.title,
        ]}>
        Frequently Bought Together
      </Text>
      {cartList.map((item, key) => (
        <View
          style={[
            {
              borderBlockColor: colors.border,
            },
            styles.listContainer,
          ]}
          key={key}>
          <View style={styles.listSubContainer}>
            <View style={styles.imageView}>
              <Image
                source={{uri: item?.product_thumbnail?.original_url}}
                style={styles.images}
                resizeMode="contain"
              />
            </View>
            <View style={styles.details}>
              <Text
                numberOfLines={2}
                style={[
                  {
                    color: colors.text,
                  },
                  styles.nameValue,
                ]}>
                {item?.name}
              </Text>
              <Text
                style={[
                  {
                    color: colors.text,
                  },
                  styles.brandValue,
                ]}>
                By: {item?.brand?.name}
              </Text>
              <View style={styles.amountView}>
                <Text style={[{color: colors.text}, styles.amountSale]}>
                  {currSymbol}
                  {(currValue * item.sale_price).toFixed(2)}
                </Text>
                <Text style={styles.amount}>
                  {currSymbol}
                  {(currValue * item.price).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => changeSelected(item.id)}
            activeOpacity={0.7}
            style={[
              item.selected && {backgroundColor: appColors.primary},
              styles.checkBox,
            ]}>
            <Check
              color={'white'}
              width={windowWidth(18)}
              height={windowHeight(18)}
            />
          </TouchableOpacity>
        </View>
      ))}
      <View
        style={[
          {
            flexDirection: viewRTLStyle,
          },
          styles.mainContainer,
        ]}>
        {selected == 0 ? (
          <Text style={styles.buy}>Select Items You Want To Buy</Text>
        ) : (
          <View style={styles.selectView}>
            <View>
              <Text style={styles.totalPrice}>Total Price</Text>
              <Text style={styles.selectedValue}>
                ({selected} {selected > 1 ? 'items' : 'item'})
              </Text>
            </View>
            <Text style={styles.totalPrice1}>
              {' '}
              {currSymbol}
              {(currValue * totalPrice).toFixed(2)}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
