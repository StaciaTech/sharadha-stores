import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import Images from '@utils/images';
import {useValues} from '@utils/context';
import {GlobalStyle} from '@style';
import {useDispatch, useSelector} from 'react-redux';
import {categoryData} from '@api/store/actions';
import DataView from './dataView';
import {emptyProducts} from '@api/store/reducers/productReducer';
import styles from './styles';
import CategoryHeader from './categoryHeader';
import ShopByCategory from '../../home/shopByCategory';
export function CategoryScreen({navigation}) {
  const {colors} = useTheme();
  const {categories, loading} = useSelector(state => state.category);
  const dispatch = useDispatch();

  const {textRTLStyle} = useValues();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const params = '?type=product';
    dispatch(categoryData(params));
  };

  const getValue = (arr, item) => {
    if (arr.length > 0) {
      navigation.navigate('SubCategory', {
        data: arr,
        name: item.name,
        slug: item.slug,
      });
    } else {
      goToList(item);
    }
  };

  const goToList = item => {
    dispatch(emptyProducts());
    navigation.navigate('ProductsList', {
      title: item.name,
      slug: item.slug,
      icon: item?.category_icon?.original_url,
    });
  };

  return (
    <SafeAreaView style={GlobalStyle.mainView}>
      {/* <Header
        darkImage={Images.fastKartDark}
        lightImage={Images.splashLogo}
        darkStyle={styles.darkStyle}
        lightStyle={styles.darkStyle}
        showImage
        image
      /> */}
      <CategoryHeader />
      <ShopByCategory title={'Traditional & Homemade Items '} />
      {/* <DataView
        showLoader={loading}
        textAlign={textRTLStyle}
        colors={colors}
        data={categories}
        getValue={getValue}
        id={categories[0]?.id}
        getData={getData}
      /> */}
    </SafeAreaView>
  );
}
