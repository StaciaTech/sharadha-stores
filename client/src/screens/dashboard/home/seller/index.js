import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import Data from '@utils/json';
import SeeAllHeader from '../seeAllHeader';
import {NoImage, EmptyRating, Rating} from '@utils/icons';
import styles from './styles';

export default sellers = ({data, title, subtitle, navigation}) => {
  const {colors} = useTheme();

  const goToList = (title, slug) => {
    navigation.navigate('ProductsList', {
      title: title,
      slug: slug,
      from: 'seller',
    });
  };

  const goToSellerList = () => {
    navigation.navigate('SellerList', {data});
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <SeeAllHeader
        title={title}
        subtitle={subtitle}
        showAll={data.length > 3}
        onPress={goToSellerList}
      />
      <FlatList
        data={data?.slice(0, 4)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => goToList(item.store_name, item.slug, 'store')}
            style={[
              styles.mainView,
              {
                backgroundColor: colors.background,
              },
            ]}>
            {item?.store_logo?.original_url ? (
              <Image
                source={{uri: item?.store_logo?.original_url}}
                style={styles.logo}
              />
            ) : (
              <NoImage width={windowWidth(54)} height={windowHeight(46)} />
            )}
            <View
              style={[
                styles.line,
                {
                  backgroundColor: colors.border,
                },
              ]}
            />
            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}>
              {item.store_name}
            </Text>
            <View style={styles.ratings}>
              {Data.reviewStar.map((_, key) =>
                key + 1 <= item.reviews_count ? (
                  <Rating width={windowWidth(18)} height={windowHeight(18)} />
                ) : (
                  <EmptyRating
                    width={windowWidth(18)}
                    height={windowHeight(18)}
                  />
                ),
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
