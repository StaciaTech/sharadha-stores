import React from 'react';
import {View, Text} from 'react-native';
import {formatDate} from '@utils/helper';
import {useTheme} from '@react-navigation/native';
import appFonts from '@theme/appFonts';

const SubDetailData = ({item}) => {
  const {colors} = useTheme();

  return (
    <View>
      <Text
        style={{
          color: colors.text,
          fontFamily: appFonts.mulish,
        }}>
        #{item.order_number}
      </Text>
      <Text
        style={{
          color: colors.text,
          fontFamily: appFonts.mulish,
        }}>
        {formatDate(item.created_at)}
      </Text>
    </View>
  );
};

export default SubDetailData;
