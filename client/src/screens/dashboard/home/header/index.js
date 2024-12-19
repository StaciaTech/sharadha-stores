import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Images from "@utils/images";
import { useValues } from "@utils/context";
import { useSelector } from "react-redux";
import { windowHeight } from "@theme/appConstant";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getValue } from "@utils/localStorage";
import styles from "./styles";
import { Location } from "@utils/icons";
import { Cart } from "../../../../assets/icons/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default header = (props) => {
  const { viewRTLStyle, isDark } = useValues();
  const { self } = useSelector((state) => state.account);
  const name = self?.name?.charAt(0);
  const navigation = useNavigation();
  const [location, setLocation] = useState("Guindy");
  const [imageUri, setImageUri] = useState(null);
  const [openLoc, setOpenLoc] = useState(false);
  useEffect(() => {
    self && setImageUri(self?.profile_image?.original_url);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const loadImageUri = async () => {
        try {
          const storedUri = await getValue("profile_image_uri");
          if (storedUri) {
            setImageUri(storedUri);
          } else {
            const img = props?.data?.profile_image?.original_url;
            if (img) {
              setImageUri(img);
            }
          }
        } catch (error) {
          console.error("Failed to load image URI from AsyncStorage:", error);
        }
      };
      loadImageUri();
    })
  );

  const setShopLocation = async (newLocation) => {
    try {
      await AsyncStorage.setItem('shop_location', newLocation);
      setLocation(newLocation); 
      setOpenLoc(false);
    } catch (error) {
      console.error("Failed to store location in AsyncStorage:", error);
    }
  };
  return (
    //   <View
    //     style={[
    //       styles.mainView,
    //       // {
    //       //   flexDirection: viewRTLStyle,
    //       //   marginVertical: name ? 0 : windowHeight(14),
    //       // },
    //     ]}
    //   >
    //     <View style={styles.header}>
    //       <View style={styles.location}>
    //         <Location />
    //       </View>
    //       <Text>Saradtha</Text>
    //     </View>
    //     <TouchableOpacity
    //       activeOpacity={0.8}
    //       onPress={() => navigation.navigate("EditProfile")}
    //       style={[
    //         styles.view,
    //         {
    //           flexDirection: viewRTLStyle,
    //           marginVertical: name ? windowHeight(10) : 0,
    //         },
    //       ]}
    //     >
    //       <Text>Cart</Text>
    //       {/* {imageUri ? (
    //         <View style={styles.imageContainer}>
    //           <Image source={{ uri: imageUri }} style={styles.image} />
    //         </View>
    //       ) : (
    //         <View style={styles.nameContainer}>
    //           <Text style={styles.name}>{name}</Text>
    //         </View>
    //       )} */}
    //     </TouchableOpacity>
    //   </View>
    // );
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={styles.leftHeader}
          onPress={() => setOpenLoc(!openLoc)}
        >
          {/* <TouchableOpacity onPress={() => setOpenLoc(!openLoc)}> */}
          <Location />
          {/* </TouchableOpacity> */}
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Saradtha Stores</Text>
          <Text style={{ color: '#8d8d8d' }}>{location}</Text>
        </View>
        {openLoc && (
          <View style={styles.changeLoc}>
            <TouchableOpacity
              style={styles.leftHeader}
              onPress={() => setOpenLoc(!openLoc)}
            >
              <Location />
            </TouchableOpacity>
            <Text style={styles.headerTitle}  onPress={() => setShopLocation(location == 'Guindy' ? 'West Mambalam' : 'Guindy' )}>{ location == 'Guindy' ? 'West Mambalam' : 'Guindy' }</Text>
          </View>
        )}
      </View>
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('CartList')}>
          <Cart color={"#17349D"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
