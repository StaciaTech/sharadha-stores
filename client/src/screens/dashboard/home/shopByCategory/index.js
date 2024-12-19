import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { emptyProducts } from "@api/store/reducers/productReducer";
import { useDispatch } from "react-redux";
import { useValues } from "@utils/context";
import appColors from "@theme/appColors";
import { NoImage } from "@utils/icons";
import { windowHeight, windowWidth } from "@theme/appConstant";
import styles from "./styles";
import images from "@utils/images";

const categoryData = [
  {
    id: 1,
    name: "Podi Items",
    type: "podiItems",
    img: images.podiItems,
  },
  {
    id: 2,
    name: "Vathal",
    type: "vathal",
    img: images.vathal,
  },
  {
    id: 3,
    name: "Vadam",
    type: "vadam",
    img: images.vadagam,
  },
  {
    id: 4,
    name: "Dairy Products",
    type: "dairy",
    img: images.milk,
  },
  {
    id: 5,
    name: "Appalam",
    type: "appalam",
    img: images.appalam,
  },
  {
    id: 6,
    name: "Pickels",
    type: "pickels",
    img: images.pickel,
  },
  {
    id: 7,
    name: "Special",
    type: "spl",
    img: images.spl,
  },
  {
    id: 8,
    name: "Pooja Items",
    type: "poojaItems",
    img: images.poojaItems,
  },
  {
    id: 9,
    name: "Sweets & Savories",
    type: "sweets",
    img: images.sweets,
  },
];

const renderItem = ({ item, goToList }) => (
  <TouchableOpacity style={styles.itemBox} onPress={() => goToList(item)}>
    <View style={styles.item}>
      <View style={styles.catImg}>
        {item?.img ? (
          <Image
            style={styles.img}
            // source={{
            //   uri: item.img,
            // }}
            source={item.img}
          />
        ) : (
          <NoImage height={windowHeight(40)} width={windowWidth(50)} />
        )}
      </View>
    </View>
    <Text style={[styles.name]}>{item.name.slice(0, 25)}</Text>
  </TouchableOpacity>
);

export default shopByCategory = (props) => {
  const { colors } = useTheme();
  const { isDark } = useValues();
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const goToList = (name, slug, icon) => {
  //   dispatch(emptyProducts());
  //   props.navigation.navigate("ProductsList", {
  //     title: name,
  //     slug: slug,
  //     icon: icon,
  //   });
  // };

  // const data = [{}];

  const goToList = (item) => {
    dispatch(emptyProducts());
    navigation.navigate("ProductsList", {
      title: item?.type,
      slug: item?.type,
      // icon: icon || "",
    });
  };

  return (
    <View>
      {props?.title.includes("Browse") ? (
        <View style={styles.category}>
          <View
            style={[
              styles.line,
              {
                backgroundColor: isDark
                  ? appColors.darkBorder
                  : appColors.separator,
              },
            ]}
          />
          <Text
            style={[
              styles.shopByCategory,
              {
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
          >
            {props?.title}
          </Text>
        </View>
      ) : (
        <View style={styles.traditional}>
          <Text style={styles.traditionalTxt}>{props?.title}</Text>
        </View>
      )}

      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {/* <FlatList
          data={data}
          // numColumns={Math.ceil(data.length / 2)}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.listView}
              activeOpacity={0.7}
              onPress={() => goToList(item.name, 1, item?.img)}
            >
              <View
                style={[
                  styles.imageView,
                  // {
                  //   backgroundColor: colors.primary,
                  // },
                ]}
              >
                <View style={styles.catImg}>
                  {item?.img ? (
                    <Image
                      style={styles.img}
                      source={{
                        uri: item.img,
                      }}
                    />
                  ) : (
                    <NoImage
                      height={windowHeight(40)}
                      width={windowWidth(50)}
                    />
                  )}
                </View>
              </View>
              <Text style={[styles.name, { color: colors.text }]}>
                {item.name.slice(0, 25)}
              </Text>
            </TouchableOpacity>
          )}
        /> */}
      </ScrollView>
      <FlatList
        data={categoryData}
        renderItem={({ item }) => renderItem({ item, goToList })}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};
