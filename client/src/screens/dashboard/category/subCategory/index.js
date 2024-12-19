import React, {useEffect, useState, useCallback, useRef} from 'react';
import {View} from 'react-native';
import {
  productsData,
  productsFilterData,
  filterBrands,
  addToCart,
} from '@api/store/actions';
import {useDispatch, useSelector} from 'react-redux';
import ProductsView from '../../../products/productList/productsView/index';
import {CommonModal, ProductFilter, ProductListHeader} from '@otherComponents';
import {useValues} from '@utils/context';
import ItemsList from './itemsList/index';
import {useFocusEffect} from '@react-navigation/native';
import {getValue, setValue} from '@utils/localStorage';
import {updateCartValue} from '@api/store/reducers/cartReducer';
import {manageDetails, removeData} from '@utils/helper';
import {AnimatedAlert} from '@commonComponents';
import appColors from '@theme/appColors';

export function SubCategory({navigation, route}) {
  const {products, loading, brands, productsFilter} = useSelector(
    state => state.product,
  );

  const subCategory = route.params.data;
  const title = route.params.name;
  const dispatch = useDispatch();
  const [total, setTotal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filterParams, setFilterParams] = useState();
  const [filteredArr, setFilteredArr] = useState(productsFilter);
  const {viewRTLStyle} = useValues();
  const [message, setMessage] = useState('');
  const messageRef = useRef();

  useEffect(() => {
    dispatch(productsFilterData());
    dispatch(filterBrands());
    getData();
  }, []);

  useEffect(() => {
    setFilteredArr(productsFilter);
  }, [productsFilter]);

  const getData = async (filterParams, arr, total) => {
    setShowModal(false);
    setTotal(total == 0 || total == undefined ? false : true);
    const slug = '?category=' + route.params.slug;
    var url = slug;
    if (filterParams) {
      setFilterParams(filterParams);
      url = slug + '&' + filterParams;
      setFilteredArr(arr);
    }
    await dispatch(productsData(url));
  };

  const modalVisible = () => {
    setShowModal(!showModal);
  };

  useFocusEffect(
    useCallback(() => {
      getData(filterParams, filteredArr, total);
    }, [filterParams, filteredArr, total]),
  );

  const goToCart = () => {
    navigation.navigate('CartList');
  };

  const addDataToCart = async (val, quantity, valueType) => {
    addCart(val.id, valueType);
    const cartData = await getValue('cartData');
    if (cartData) {
      messageRef.current.animate();
      setMessage('Product Added To Cart');
      var list = JSON.parse(cartData);
      const index = list.findIndex(item => {
        return item.id === val.id;
      });

      if (index !== -1) {
        if (quantity === 0 && valueType != 'increase') {
          const updatedItems = removeData(list, '', val.id);
          storeCart(updatedItems);
          setMessage('Your Cart is Updated');
        } else {
          const updatedProducts = [...list];
          updatedProducts[index].quantity = quantity;
          storeCart(updatedProducts);
        }
      } else {
        const details = manageDetails({}, val);
        list = [...list, details];
        storeCart(list);
      }
    } else {
      const data = manageDetails({}, val);
      storeCart([data]);
      setMessage('Product Added To Cart');
    }
  };

  const addCart = async (id, valueType) => {
    const data = {
      product_id: id,
      variation_id: '',
      quantity: valueType ? 1 : -1,
    };
    await dispatch(addToCart(data));
  };

  const storeCart = data => {
    dispatch(updateCartValue(data));
    setValue('cartData', JSON.stringify(data));
  };

  return (
    <View>
      <ProductListHeader
        title={title}
        viewRTLStyle={viewRTLStyle}
        modalVisible={modalVisible}
        total={total}
      />
      <ItemsList subCategory={subCategory} />
      <ProductsView
        showLoader={loading}
        data={products}
        navigation={navigation}
        onPress={addDataToCart}
      />
      <CommonModal
        modal={
          <ProductFilter
            filterParams={filterParams}
            showModal={modalVisible}
            filters={filteredArr}
            onPress1={modalVisible}
            onPress2={getData}
            brands={brands}
          />
        }
        showModal={showModal}
        visibleModal={modalVisible}
      />
      <AnimatedAlert
        text={message}
        ref={messageRef}
        val={-50}
        color={appColors.primary}
        subText={'View All'}
        onPress={goToCart}
      />
    </View>
  );
}
