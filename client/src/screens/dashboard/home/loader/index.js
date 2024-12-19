import React from 'react';
import { FlatList, View } from 'react-native';
import { Loader } from '@commonComponents';
import CategoryStyles from '../shopByCategory/styles';
import styles from './styles';

export default loader = ({ colors }) => {
  const category = Array.from({ length: 8 }).map((_, i) => i);
  const lowestPrice = Array.from({ length: 3 }).map((_, i) => i);

  return (
    <View>
      <Loader view={<View style={styles.view} />} />
      <Loader view={<View style={styles.categoryTextView} />} />
      <FlatList
        data={category}
        numColumns={4}
        style={[CategoryStyles.list, styles.categorySpace]}
        ItemSeparatorComponent={() => <View style={CategoryStyles.separator} />}
        renderItem={() => (
          <Loader
            view={
              <View style={styles.categoryList}>
                <View style={CategoryStyles.listView}>
                  <View style={CategoryStyles.imageView} />
                  <View style={styles.categoryView} />
                </View>
              </View>
            }
          />
        )}
      />
      <View>
        <View style={styles.offersView}>
          <Loader view={<View style={styles.offerTitle} />} />
          <View style={styles.lowestPrice}>
            {lowestPrice.map((item, key) => (
              <Loader view={<View style={styles.priceView} />} key={key} />
            ))}
          </View>
        </View>
        <View
          style={[
            styles.emptyView,
            {
              backgroundColor: colors.background,
            },
          ]}
        />
      </View>
    </View>
  );
};
