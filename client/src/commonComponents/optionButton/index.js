import React from 'react';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import {Button} from '@commonComponents';
import {useValues} from '@utils/context';
import {windowHeight} from '@theme/appConstant';
import styles from './styles';

export function OptionButton(props) {
  const {viewRTLStyle} = useValues();

  return (
    <View
      style={[props.style || styles.mainView, {flexDirection: viewRTLStyle}]}>
      <Button
        text={props.txt1}
        style={styles.closeBtn}
        height={windowHeight(36)}
        color={appColors.primary}
        onPress={props.onPress1}
      />
      <Button
        text={props.txt2}
        style={styles.applyBtn}
        height={windowHeight(36)}
        color={appColors.white}
        onPress={props.onPress2}
      />
    </View>
  );
}
