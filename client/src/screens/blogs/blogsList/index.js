import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '@commonComponents';
import {useNavigation, useTheme} from '@react-navigation/native';
import styles from './styles';

export function BlogList({route}) {
  const {navigate} = useNavigation();
  const {colors} = useTheme();

  const data = route.params.data;

  const goToDetails = id => {
    navigate('BlogDetails', {id});
  };

  return (
    <SafeAreaView>
      <Header isText titleText={'Blogs'} />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.contentStyle}
        data={data}
        renderItem={({item}) => (
          <View
            style={[
              styles.mainView,
              {
                backgroundColor: colors.background,
              },
            ]}>
            <Image
              style={styles.img}
              source={{uri: item.blog_thumbnail.original_url}}
            />
            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}>
              {item.title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => goToDetails(item.id)}
              style={styles.readMoreContainer}>
              <Text style={styles.readmore}>Read More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
