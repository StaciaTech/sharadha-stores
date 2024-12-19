import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useNavigation, useTheme} from '@react-navigation/native';
import SeeAllHeader from '../seeAllHeader';
import {formatDate} from '@utils/helper';
import {NoImage} from '@utils/icons';
import styles from './styles';

export default blogs = ({data, title, subtitle}) => {
  const {colors} = useTheme();

  const {navigate} = useNavigation();

  const goToDetails = id => {
    navigate('BlogDetails', {id});
  };

  const goToList = () => {
    navigate('BlogList', {data});
  };

  return (
    <View style={styles.container}>
      <SeeAllHeader
        title={title}
        subtitle={subtitle}
        showAll={data.length > 3}
        onPress={goToList}
      />
      <FlatList
        data={data?.slice(0, 3)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => goToDetails(item.id)}
            activeOpacity={0.9}
            style={[
              styles.mainView,
              {
                borderColor: colors.border,
                backgroundColor: colors.background,
              },
            ]}>
            {item?.blog_thumbnail?.original_url ? (
              <Image
                source={{uri: item.blog_thumbnail.original_url}}
                style={styles.img}
              />
            ) : (
              <NoImage width={windowWidth(250)} height={windowHeight(100)} />
            )}
            <Text
              numberOfLines={1}
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}>
              {item.title}
            </Text>
            <Text style={styles.date}>{formatDate(item.created_at)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
