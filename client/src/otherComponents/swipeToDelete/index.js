import React from 'react';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import Swipeout from 'react-native-swipeout';
import {Delete} from '@utils/icons';
import styles from './styles';

export function SwipeToDelete(props) {
  var swipeoutBtns = [
    {
      text: <Delete />,
      backgroundColor: appColors.primary,
      onPress: () => props.visibleDeleteModal(),
    },
  ];

  return (
    <Swipeout
      buttonWidth={windowWidth(65)}
      openLeft={false}
      right={swipeoutBtns}
      style={[styles.swipeOut, {backgroundColor: props.colors.background}]}>
      {props.content}
    </Swipeout>
  );
}
