import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import {NoImage} from '@utils/icons';
import styles from './styles';

export default brands = ({data, navigation}) => {
  const {colors} = useTheme();

  const goToList = (title, slug) => {
    navigation.navigate('ProductsList', {
      title: title,
      slug: slug,
      from: 'brand',
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <Text
        style={[
          styles.brands,
          {
            color: colors.text,
          },
        ]}>
        Biggest Deals On Top Brands
      </Text>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentStyle}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => goToList(item.slug, item.name, 'brand')}
            style={[
              styles.mainContainer,
              {
                borderColor: colors.border,
                backgroundColor: colors.background,
              },
            ]}>
            {item?.brand_image?.original_url ? (
              <Image
                source={{uri: item.brand_image.original_url}}
                style={styles.img}
              />
            ) : (
              <NoImage width={windowWidth(110)} height={windowHeight(60)} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
