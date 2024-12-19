import React from 'react';
import {FlatList, View} from 'react-native';
import {GlobalStyle} from '@style';
import styles from './styles';
import CouponListItem from './couponListItem/index';
import {windowHeight} from '@theme/appConstant';

const CouponsView = ({data, copyCode, onPress}) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={[
        GlobalStyle.mainView,
        {marginBottom: windowHeight(50)},
      ]}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) =>
        item.is_expired == 0 && (
          <CouponListItem item={item} onPress={onPress} copyCode={copyCode} />
        )
      }
    />
  );
};

export default CouponsView;
