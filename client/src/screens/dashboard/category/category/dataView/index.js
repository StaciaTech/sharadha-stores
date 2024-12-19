import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Loader from './loader';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';
import {NoDataFound} from '@otherComponents';
import images from '@utils/images';
import CategoryList from './categoryList/index';
import styles from './styles';

export default dataView = props => {
  const {colors} = useTheme();
  const {isDark, textRTLStyle} = useValues();

  const matchValue = (id, arr, item) => {
    props.getValue(arr, item);
  };

  return (
    <View style={styles.container}>
      {props.showLoader ? (
        <Loader />
      ) : props.data.length > 0 ? (
        <>
          <Text
            style={[
              styles.categoryText,
              {
                color: props.colors.text,
                textAlign: textRTLStyle,
              },
            ]}>
            Shop By Category
          </Text>
          <FlatList
            data={props.data}
            contentContainerStyle={styles.contentStyle}
            numColumns={4}
            renderItem={({item, index}) => (
              <CategoryList
                item={item}
                isDark={isDark}
                appColors={appColors}
                colors={colors}
                matchValue={matchValue}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      ) : (
        <NoDataFound
          img={images.noProducts}
          title={'No Categories Found'}
          subTitle={"Oops!! We Didn't Find Any Data."}
          btnText={'Refresh'}
          onPress={props.getData}
        />
      )}
    </View>
  );
};
