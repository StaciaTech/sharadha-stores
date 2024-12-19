import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SearchArrow } from "@utils/icons";
import { useSelector } from "react-redux";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NoImage } from "@utils/icons";
import { useValues } from "@utils/context";
import styles from "./styles";

export default searchedProduct = ({
  filteredVal,
  SearchingProducts,
  addProduct,
}) => {
  const { colors } = useTheme();
  const { currSymbol, currValue } = useSelector((state) => state.other);
  const { viewRTLStyle } = useValues();
  const { navigate } = useNavigation();

  const goToHomepage = (id) => {
    navigate("ProductsDetails", { id });
  };

  const goToProductDetails = (item) => {
    navigate("ProductsDetails", { item: item });
  };

  return (
    <FlatList
      data={SearchingProducts}
      style={styles.spaceTop}
      ItemSeparatorComponent={() => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.border,
            },
          ]}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            addProduct(item.name);
            goToProductDetails(item);
            // console.log(item);
          }}
          style={styles.click}
        >
          <View style={styles.mainContainer}>
            {item?.original_url ? (
              <View style={styles.imageView}>
                <Image source={item?.original_url} style={styles.image} />
              </View>
            ) : (
              <NoImage width={windowWidth(60)} height={windowHeight(50)} />
            )}
            <View style={styles.detailView}>
              <Text
                style={[
                  styles.listName,
                  {
                    color: colors.text,
                  },
                ]}
                numberOfLines={2}
              >
                {item?.name}
              </Text>
              <Text style={{ color: "#4C5988" }}>{item?.weight}g</Text>
              <View
                style={[
                  styles.subDetail,
                  {
                    flexDirection: viewRTLStyle,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.listDiscount,
                    {
                      color: colors.text,
                    },
                  ]}
                >
                  {currSymbol}
                  {(currValue * item?.sale_price).toFixed(2)}
                </Text>
                {item?.discount != null && item?.discount != 0 && (
                  <Text style={styles.price}>
                    {currSymbol}
                    {(currValue * item?.price).toFixed(2)}
                  </Text>
                )}
                {item?.discount != null && item?.discount != 0 && (
                  <Text style={styles.percentage}>
                    {(item?.discount).toString()}% Off
                  </Text>
                )}
              </View>
            </View>
          </View>
          <SearchArrow />
          {/* <View>
            <Text>-</Text>
          </View> */}
        </TouchableOpacity>
      )}
    />
  );
};
