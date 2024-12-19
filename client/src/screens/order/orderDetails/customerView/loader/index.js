import React from 'react';
import { View } from 'react-native';
import { Loader } from '@commonComponents';
import styles from './styles';

export default customerViewLoader = props => {
  const details = Array.from({ length: 5 }).map((_, i) => i);

  return (
    <>
      <Loader view={<View style={styles.mainTitleLoader} />} />
      {details.map((_, key) => (
        <View
          key={key}
          style={[
            styles.orderLoader,
            {
              flexDirection: props.viewAlign,
            },
          ]}>
          <Loader view={<View style={styles.title} />} />
          <Loader view={<View style={styles.title} />} />
        </View>
      ))}
    </>
  );
};
