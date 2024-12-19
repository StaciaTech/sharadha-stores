import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header} from '@commonComponents';
import {useNavigation} from '@react-navigation/native';
import Data from '@utils/json';
import {EmptyRating, Rating} from '@utils/icons';
import {windowWidth, windowHeight} from '@theme/appConstant';
import styles from './styles';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

const SellerList = ({route}) => {
  const data = route.params.data;
  const {navigate} = useNavigation();
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  const {colors} = useTheme();

  const gotoList = slugName => {
    navigate('ProductsList', {
      title: 'title Our Best Sellers',
      slug: slugName,
      from: 'seller',
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}
      onPress={() => gotoList(item.slug)}>
      <Image source={{uri: item.store_logo.original_url}} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.storeName,
            {textAlign: textRTLStyle, color: colors.text},
          ]}>
          {item.store_name}
        </Text>
        <View style={[styles.ratings, {flexDirection: viewRTLStyle}]}>
          {Data.reviewStar.map((_, key) =>
            key + 1 <= item.reviews_count ? (
              <Rating width={windowWidth(18)} height={windowHeight(18)} />
            ) : (
              <EmptyRating width={windowWidth(18)} height={windowHeight(18)} />
            ),
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Header isText titleText={'Our Best Sellers'} />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  );
};

export default SellerList;
