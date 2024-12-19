import React, { useState, useEffect } from "react";
import { View, FlatList, RefreshControl, TextInput, Text } from "react-native";
import Loader from "./loader";
import { useValues } from "@utils/context";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "@api/store/reducers/orderReducer";
import OrderListItem from "./orderListItem/index";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "@react-navigation/native";
import appColors from "@theme/appColors";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemsView = ({ showLoader, navigation, data, onPress }) => {
  const { isDark, viewRTLStyle, viewSelfRTLStyle } = useValues();
  const { currSymbol, currValue } = useSelector((state) => state.other);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [orderHistory, setOrderHistory] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(null); // Store phone as a string
  const { colors } = useTheme();

  const getPhone = async () => {
    try {
      const data = await AsyncStorage.getItem("addresses");
      if (data) {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setPhoneNumber(parsedData[0].phone); // Store phone number directly
          console.log("Phone number:", parsedData[0].phone);
        } else {
          console.warn("No valid addresses found");
        }
      } else {
        console.warn("No data found in AsyncStorage for 'addresses'");
      }
    } catch (error) {
      console.error("Error retrieving addresses from AsyncStorage:", error);
    }
  };

  const getPastOrders = async (phone) => {
    console.log("Fetching past orders for phone:", phone);
    if (!phone) {
      console.warn("Phone number is not set yet");
      return;
    }
    try {
      const res = await axios.get(
        `http://192.168.0.115:7000/user/order-history/CUST-${phone.slice(6, 10)}`
      );
      setOrderHistory(res.data.docs);
      console.log("Fetched orders:", res.data.docs);
    } catch (err) {
      console.error("Error fetching past orders:", err);
    }
  };

  useEffect(() => {
    const fetchPhoneAndOrders = async () => {
      await getPhone();
    };

    fetchPhoneAndOrders();
  }, []);

  useEffect(() => {
    if (phoneNumber) {
      getPastOrders(phoneNumber);
    }
  }, [phoneNumber]);

  useEffect(() => {
    filterData();
  }, [searchQuery, statusFilter, data]);

  const filterData = () => {
    let updatedData = data;

    if (searchQuery) {
      updatedData = updatedData.filter((item) =>
        item.order_number.toString().includes(searchQuery)
      );
    }

    if (statusFilter) {
      updatedData = updatedData.filter(
        (item) =>
          item.order_status.name.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    setFilteredData(updatedData);
  };

  const goToAddress = (item) => {
    navigation.navigate("OrderDetails", {
      item,
    });
  };

  return (
    <>
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
          renderItem={({ item, index }) => (
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

export default ItemsView;
