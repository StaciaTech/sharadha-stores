import React from 'react';
import { FlatList, View } from 'react-native';
import { Loader } from '@commonComponents';
import styles from './styles';

export default categoryLoader = () => {
  let category = Array.from({ length: 27 }).map((_, i) => i);

  return (
    <>
      <FlatList
        data={category}
        numColumns={4}
        renderItem={() => (
          <Loader
            view={
              <View style={styles.listView}>
                <View style={styles.imageView} />
                <View style={styles.textView} />
              </View>
            }
          />
        )}
      />
    </>
  );
};
