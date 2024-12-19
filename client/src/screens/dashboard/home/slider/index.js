import React from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import { useValues } from "@utils/context";
import Carousel from "react-native-snap-carousel";
import { URL } from "@api/config";
import styles from "./styles";

const { width: screenWidth } = Dimensions.get("window");
const data = [
  {
    name: "",
    img: "https://m.media-amazon.com/images/I/6180uMjzwZL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "",
    img: "https://m.media-amazon.com/images/I/51TVt9Qe8pL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "",
    img: "https://www.kroger.com/product/images/large/left/0002840020132",
  },
];

export default function Slider({ gotoPage }) {
  const { imageRTLStyle } = useValues();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={1}
      // onPress={() =>
      //   gotoPage(item.redirect_link?.link_type, item?.redirect_link?.link)
      // }
    >
      <Image
        source={{
          uri: item.img,
        }}
        style={[
          styles.image,
          {
            transform: imageRTLStyle,
          },
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainView}>
      {data && (
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
        />
      )}
    </View>
  );
}
