import React from 'react';
import {FlatList, View} from 'react-native';
import {Loader} from '@commonComponents';
import {useValues} from '@utils/context';
import styles from './styles';

export default loader = () => {
  const category = Array.from({length: 8}).map((_, i) => i);
  const {isDark} = useValues();

  return (
    <View>
      <Loader view={<View style={styles.view} />} />
      <Loader view={<View style={styles.categoryTextView} />} />
      <FlatList
        data={category}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={() => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor: isDark ? appColors.dark : appColors.gray,
              },
            ]}>
            <View>
              <Loader view={<View style={styles.item1} />} />
              <Loader view={<View style={styles.item2} />} />
            </View>
            <View style={styles.container}>
              <Loader view={<View style={styles.item3} />} />
              <Loader view={<View style={styles.item4} />} />
            </View>
          </View>
        )}
      />
    </View>
  );
};
