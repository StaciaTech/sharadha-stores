import React from 'react';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import {MenuItem} from '@otherComponents';
import SwitchToggle from 'toggle-switch-react-native';
import {Rtl, Dark} from '@utils/icons';
import styles from './styles';

export default switchs = props => {
  return (
    <View style={[styles.switchView, {flexDirection: props.viewRTLStyle}]}>
      <MenuItem
        text={props.from ? 'RTL' : 'Dark'}
        icon={props.from ? <Rtl /> : <Dark />}
        showSwitch={true}
        width={'87%'}
      />
      <View style={styles.switch}>
        <SwitchToggle
          isOn={props.isOn}
          onToggle={props.onToggle}
          icon={props.switchIcon}
          onColor={appColors.gray}
          thumbOnStyle={props.isOn ? styles.onStyle : styles.trackOnStyle}
          trackOnStyle={styles.trackOnStyle}
        />
      </View>
    </View>
  );
};
