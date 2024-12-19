import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {Increase, Decrease} from '@utils/icons';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './styles';

export default counterView = props => {
  const {viewRTLStyle, isDark} = useValues();
  const {colors} = useTheme();
  const [showCounter, setShowCounter] = useState(false);
  const [counterVal, setCounterVal] = useState(1);

  return (
    !props.showLoader && (
      <View
        style={[
          styles.counterView,
          {
            flexDirection: viewRTLStyle,
            bottom: props.bottom ? props.bottom : windowHeight(80),
            backgroundColor: colors.background,
          },
        ]}>
        <View
          style={[
            styles.counter,
            {
              backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
            },
          ]}>
          {props.quantity === 0 ? (
            <View style={styles.cartContainer}>
              <Text style={styles.cart}>Out of Stock</Text>
            </View>
          ) : !showCounter ? (
            <TouchableOpacity
              onPress={() => {
                setShowCounter(!showCounter);
                props.addDataToCart('cart', 'counter', '', 1, 'increase');
              }}
              style={styles.cartContainer}>
              <Text style={styles.cart}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.counterContainer}>
              <TouchableOpacity
                style={styles.decrease}
                onPress={() => {
                  if (counterVal === 1) {
                    setShowCounter(!showCounter);
                  } else {
                    setCounterVal(counterVal - 1);
                    props.addDataToCart(
                      'cart',
                      'counter',
                      '',
                      counterVal - 1,
                      'decrease',
                    );
                  }
                }}>
                <Decrease
                  color={appColors.primary}
                  width={windowWidth(18)}
                  height={windowHeight(18)}
                />
              </TouchableOpacity>
              <Text style={styles.val}>{counterVal}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (counterVal < props.quantity) {
                    setCounterVal(counterVal + 1);
                    props.addDataToCart(
                      'cart',
                      'counter',
                      '',
                      counterVal + 1,
                      'increase',
                    );
                  }
                }}
                style={[
                  styles.decrease,
                  {opacity: counterVal === props.quantity ? 0.4 : 1},
                ]}>
                <Increase
                  color={appColors.primary}
                  width={windowWidth(18)}
                  height={windowHeight(18)}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            props.addDataToCart(
              'buyNow',
              'counter',
              '',
              counterVal + 1,
              'increase',
            );
          }}
          activeOpacity={0.9}
          style={styles.buynowContainer}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    )
  );
};
