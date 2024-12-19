import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl, TextInput, Text} from 'react-native';
import Loader from './loader';
import {useValues} from '@utils/context';
import {useDispatch, useSelector} from 'react-redux';
import {updateDetails} from '@api/store/reducers/orderReducer';
import OrderListItem from './orderListItem/index';
import {Dropdown} from 'react-native-element-dropdown';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';
import styles from './styles';
import axios from 'axios';

export default itemsView = ({showLoader, navigation, data, onPress}) => {
  const {isDark, viewRTLStyle, viewSelfRTLStyle} = useValues();
  const {currSymbol, currValue} = useSelector(state => state.other);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [orderHistory, setOrderHistory] = useState([]);
  const {colors} = useTheme();

  useEffect(() => {
    filterData();
  }, [searchQuery, statusFilter, data]);

  orderHistory.forEach((ele) => {
    console.log("(************************");
    console.log(ele);

  })

  const filterData = () => {
    let updatedData = data;

    if (searchQuery) {
      updatedData = updatedData.filter(item =>
        item.order_number.toString().includes(searchQuery),
      );
    }

    if (statusFilter) {
      updatedData = updatedData.filter(
        item =>
          item.order_status.name.toLowerCase() === statusFilter.toLowerCase(),
      );
    }

    setFilteredData(updatedData);
  };

  const goToAddress = item => {
    // const details = {
    //   subTotal: item?.amount,
    //   shipping: item?.shipping_total,
    //   tax: item?.tax_total,
    //   total: item?.total,
    //   orderNo: item?.order_number,
    // };
    // if (item?.payment_status === 'FAILED') {
    //   navigation.navigate('SelectPayment', {from: 'failed', item: details});
    // } else {
    //   dispatch(updateDetails(item));
      navigation.navigate('OrderDetails', {
        item
      });
    // }
  };

  const getPastOrders = async () => {
    try{
      const res = await axios.get(`http://sharadha-stores-1279781826.ap-south-1.elb.amazonaws.com/user/order-history/${9876543210}`);
      setOrderHistory(res.data.docs);
      console.log(res.data);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getPastOrders();
  }, []);

  return (
    <>
      {/* <View style={styles.filterContainer}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search By Order Number"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={[styles.searchInput, {color: colors.text}]}
            placeholderTextColor={isDark ? colors.text : appColors.content}
            keyboardType="numeric"
          />
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={[
            styles.placeholderStyle,
            {color: isDark ? colors.text : appColors.content},
          ]}
          selectedTextStyle={[styles.selectedTextStyle, {color: colors.text}]}
          itemTextStyle={[
            styles.itemTextStyle,
            {color: isDark ? colors.text : appColors.content},
          ]}
          data={[
            {label: 'All', value: ''},
            {label: 'Pending', value: 'pending'},
            {label: 'Processing', value: 'processing'},
            {label: 'Shipped', value: 'shipped'},
            {label: 'Out For Delivery', value: 'out for delivery'},
            {label: 'Delivered', value: 'delivered'},
          ]}
          labelField="label"
          valueField="value"
          placeholder="Status"
          value={statusFilter}
          onChange={item => setStatusFilter(item.value)}
          dropdownStyle={[styles.dropdownStyle]}
          renderItem={item => (
            <View
              style={[
                styles.listItemContainerStyle,
                {
                  backgroundColor: isDark
                    ? appColors.subDark
                    : colors.background,
                },
              ]}>
              <Text style={[styles.itemTextStyle, {color: colors.text}]}>
                {item.label}
              </Text>
            </View>
          )}
        />
      </View> */}
      {showLoader ? (
        <Loader
          isDark={isDark}
          viewAlign={viewRTLStyle}
          selfAlign={viewSelfRTLStyle}
        />
      ) : (
        <FlatList
          style={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerStyle}
          refreshControl={
            <RefreshControl refreshing={showLoader} onRefresh={onPress} />
          }
          data={orderHistory}
          renderItem={({item, index}) => (
            <OrderListItem
              item={item}
              isDark={isDark}
              currSymbol={currSymbol}
              currValue={currValue}
              goToDetail={goToAddress}
              goToAddress={goToAddress}
              viewRTLStyle={viewRTLStyle}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </>
  );
};
