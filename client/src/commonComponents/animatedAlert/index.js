import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Text, Animated, TouchableOpacity } from 'react-native';
import appColors from '@theme/appColors';
import { useValues } from '@utils/context';
import styles from './styles';

export const AnimatedAlert = forwardRef((props, ref) => {
  const animated = useRef(new Animated.Value(100)).current;
  const duration = 1000;
  const { viewRTLStyle } = useValues();
  useImperativeHandle(ref, () => ({
    animate: () => {
      animate();
    },
  }));

  const animate = () => {
    setTimeout(() => {
      slideIn();
    }, 1000);
    setTimeout(() => {
      slideOut();
    }, 5000);
  };

  const slideIn = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: props.val || 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const slideOut = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 100,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.mainContainer,
        {
          backgroundColor: props.color
            ? props.color
            : props.success
              ? appColors.primary
              : appColors.highLight,
          transform: [{ translateY: animated }],
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text style={styles.text}>{props.text}</Text>
      <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
        <Text style={styles.text}>{props.subText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
});
