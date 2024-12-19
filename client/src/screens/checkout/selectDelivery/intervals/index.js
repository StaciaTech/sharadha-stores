import React from 'react';
import {FlatList} from 'react-native';
import {Button} from '@commonComponents';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {GlobalStyle} from '@style';

export default intervals = ({data, expressSlot, onPress}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      columnWrapperStyle={GlobalStyle.spaceBetween}
      renderItem={({item, index}) => (
        <Button
          top={windowHeight(10)}
          onPress={() => onPress(index, item)}
          fontSize={fontSizes.FONT17}
          style={[
            {
              width: '48%',
            },
            expressSlot == index
              ? {
                  backgroundColor: appColors.primary,
                }
              : {
                  borderWidth: 1.5,
                  borderColor: appColors.primary,
                },
          ]}
          color={expressSlot == index ? appColors.white : appColors.primary}
          text={item.description}
        />
      )}
    />
  );
};
