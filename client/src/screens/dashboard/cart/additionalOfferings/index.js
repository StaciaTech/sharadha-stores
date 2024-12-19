import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Linking, Alert } from "react-native";
import { Call } from "@utils/icons";
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native-gesture-handler";
import images from "@utils/images";
import FastImage from "react-native-fast-image";
import { windowHeight, windowWidth } from "@theme/appConstant";
import appColors from "@theme/appColors";
import { Button } from "@commonComponents";
import axios from "axios";

// import { google } from "googleapis";

export default additionalOfferings = ({
  setOpenAddressModal,
  openAddressModal,
  placeOrder,
  item,
  defaultAddress
}) => {
  const [name, setName] = useState("raju bhai");
  const [email, setEmail] = useState("rajubhai@gmail.com");
  const [address, setAddress] = useState("padi");

  console.log("78787878787", defaultAddress);
  // https://sheets.googleapis.com/v4/spreadsheets/1mLKjCq0azrghc4pklSFtpSuwE_59huN2rsCaMTVZcXE/values/Sheet1:append?valueInputOption=USER_ENTERED&key=AIzaSyCSemj26tnLqXdVtKHrvQU-BfY0_NnnTgYz
  const sheetUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/1mLKjCq0azrghc4pklSFtpSuwE_59huN2rsCaMTVZcXE/values/Sheet1:append?valueInputOption=USER_ENTERED&key=AIzaSyCSemj26tnLqXdVtKHrvQU-BfY0_NnnTgY";
  const data = [
    {
      id: 1,
      img: images.sambarPodi,
    },
    {
      id: 2,
      img: images.sambarPodi,
    },
    {
      id: 3,
      img: images.sambarPodi,
    },
    {
      id: 4,
      img: images.sambarPodi,
    },
  ];

  const getCustomerDetails = async () => {
    try {
      const res = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/1mLKjCq0azrghc4pklSFtpSuwE_59huN2rsCaMTVZcXE/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyCSemj26tnLqXdVtKHrvQU-BfY0_NnnTgY`
      );
      if (res.status === 200) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const payload = {
    values: [[name, email, address]],
  };

  // const sheets = google.sheets("v4");

  // const appendDataToSheet = async () => {
  //   try {
  //     const response = await sheets.spreadsheets.values.append({
  //       auth: "AIzaSyCSemj26tnLqXdVtKHrvQU-BfY0_NnnTgY",
  //       spreadsheetId: "1mLKjCq0azrghc4pklSFtpSuwE_59huN2rsCaMTVZcXE",
  //       range: "Sheet1",
  //       valueInputOption: "RAW",
  //       resource: {
  //         values: [
  //           ["name", "email", "address"],
  //           [name, email, address],
  //         ],
  //       },
  //     });

  //     console.log("Data added to sheet:", response.data);
  //   } catch (error) {
  //     console.error("Error adding data:", error);
  //   }
  // };

  const addUserAndProductDetails = async () => {
    try {
      const res = await axios.patch(`${sheetUrl}`, payload);
      if (res.status === 200) {
        Alert("Customer details added!!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const makePhoneCall = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl).catch(err =>
      console.error('Error occurred while trying to make a phone call:', err)
    );
  };
  return (
    <View style={styles.additionalOfferings}>
      <Text style={styles.title}>Additional Offerings!</Text>
      <Text style={styles.desc}>
        Did you know? Our store also offers a variety of{" "}
        <Text style={styles.provisions}>provisions</Text> to meet your daily
        needs. For more details, feel free to contact us at:
      </Text>
      <View style={styles.callContainer}>
        <View style={styles.callBox}>
          <Call />
        </View>
        <TouchableOpacity onPress={() => makePhoneCall(`+91${defaultAddress?.phone}`)}>
          <Text style={styles.number}>+91 {defaultAddress?.phone} </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {data?.map((item) => (
          <View key={item.id} style={styles.variety}>
            <FastImage
              source={item.img}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.varietyTxt}>Rice Variety's</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.address}>
        <Text style={styles.addressTxt}>Address</Text>
        <View
          style={[
            { height: 1, overflow: "hidden", marginTop: windowHeight(8) },
          ]}
        >
          <View
            style={[
              {
                height: 2,
                borderWidth: 2,
                borderColor: "#CCCCCC",
                borderStyle: "dashed",
              },
            ]}
          ></View>
        </View>
        <TouchableOpacity onPress={() => setOpenAddressModal(true)}>
          <Text style={styles.addressDesc}>
            {[
              defaultAddress?.street,
              defaultAddress?.country_id,
              defaultAddress?.state_id,
              defaultAddress?.city,
              defaultAddress?.pincode,
            ]
              .filter(Boolean)
              .join(", ")}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        text={"Place Order"}
        style={styles.btn}
        color={appColors.white}
        onPress={placeOrder}
      />
      <View style={styles.cod}>
        <Text style={styles.codTxt}>Only Cash On Delivery available</Text>
      </View>
    </View>
  );
};
