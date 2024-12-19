import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import appColors from '@theme/appColors';
import {AnimatedAlert, Button, Header} from '../../../commonComponents';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fontSizes, windowHeight, windowWidth} from '../../../theme/appConstant';
import appFonts from '../../../theme/appFonts';
import {Rating, EmptyRating} from '../../../utils/icons';
import {
  editReviewData,
  productDetails,
  reviewData,
} from '../../../api/store/actions';
import Data from '../../../utils/json';
import {formatDate} from '../../../utils/helper';

export function Reviews({navigation}) {
  const {isDark} = useValues();
  const {colors} = useTheme();
  const {productDetail} = useSelector(state => state.product);

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark ? appColors.darkDrawer : colors.background,
      }}>
      <Header titleText={'Reviews'} isText />
      <FlatList
        data={productDetail?.reviews}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'black'}}>
                  {item.consumer.name.charAt(0)}
                </Text>
                <View>
                  <Text style={{color: 'black'}}>{item.consumer.name}</Text>
                  {Data}
                </View>
              </View>
              <Text style={{color: 'black'}}>
                {formatDate(item.created_at)}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
