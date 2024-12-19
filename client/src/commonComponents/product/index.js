import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Counter } from "../";
import { useValues } from "@utils/context";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import appColors from "@theme/appColors";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { Increase, NoImage } from "@utils/icons";
import styles from "./styles";
import images from "@utils/images";

export function Product(props) {
  const { colors } = useTheme();
  const { currSymbol, currValue } = useSelector((state) => state.other);
  const { textRTLStyle, viewRTLStyle, isDark, isRTL, token, viewSelfRTLStyle } =
    useValues();
  const [show, setShow] = useState(props.show);
  const { cartList } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(props.quantity);

  useEffect(() => {
    props.from != "cart" && checkValue();
  }, []);

  const checkValue = () => {
    const id = props.id;
    cartList?.map((item) => {
      if (item?.id === id) {
        setShow(false);
        setQuantity(item.quantity);
      }
    });
  };

  const viewPress = () => {
    setShow(!show);
    props.increaseVal(1);
  };

  const maxLength = 25;
  const truncatedName =
    props?.name?.length > maxLength
      ? `${props.name.substring(0, maxLength)}...`
      : props.name;

  return (
    <View
      style={[
        styles.mainView,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: props.showColor
            ? colors.background
            : isDark
            ? appColors.darkDrawer
            : appColors.gray,
        },
        props.style,
      ]}
    >
      {props.sale === 1 ? (
        <View style={styles.saleContainer}>
          <ImageBackground source={images.sale} style={styles.saleImage}>
            <Text style={styles.saleText}>Sale</Text>
          </ImageBackground>
        </View>
      ) : null}
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        style={[styles.imageContainer, { flexDirection: viewRTLStyle }]}
      >
        {props.image ? (
          <FastImage
            source={props.image}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <NoImage />
        )}
        <View
          style={[
            styles.lineView,
            {
              backgroundColor: isDark
                ? appColors.darkBorder
                : appColors.separator,
            },
          ]}
        />
      </TouchableOpacity>
      <View style={styles.counterView}>
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
          <View
            style={[
              styles.nameContainer,
              {
                flexDirection: viewRTLStyle,
                alignSelf: isRTL ? "flex-end" : "flex-start",
              },
            ]}
          >
            <Text
              numberOfLines={2}
              style={[
                styles.name,
                {
                  color: colors.text,
                  textAlign: textRTLStyle,
                },
              ]}
            >
              {truncatedName}
            </Text>
          </View>
          <Text style={{ color: '#8D8D8D', fontSize: 16 }}>{props.weight}g</Text>
          <Text
            style={[
              styles.price,
              {
                color: colors.text,
                textAlign: textRTLStyle,
              },
            ]}
          >
            {currSymbol}
            {(currValue * props.sale_price).toFixed(2)}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.priceView,
            {
              paddingRight: props.paddingRight,
              flexDirection: viewRTLStyle,
            },
          ]}
        >
          <View
            style={[
              styles.discountPriceView,
              {
                flexDirection: viewRTLStyle,
              },
            ]}
          >
            {props?.discount != null && props?.discount != 0 && (
              <Text
                style={[
                  styles.weight,
                  {
                    textAlign: textRTLStyle,
                  },
                ]}
              >
                {currSymbol}
                {(currValue * props.price).toFixed(2)}
              </Text>
            )}
            {props?.discount != null && props?.discount != 0 && (
              <View
                style={[
                  styles.discountView,
                  {
                    flexDirection: viewRTLStyle,
                  },
                ]}
              >
                <Text style={styles.discount}>{props?.discount}% off</Text>
              </View>
            )}
          </View>
          {props.totalQuantity === 0 ? (
            <View style={[styles.noStock, { alignItems: viewSelfRTLStyle }]}>
              <Text style={styles.noStockTitle}>Out Of Stock</Text>
            </View>
          ) : (
            <View style={[styles.addCart, { alignItems: viewSelfRTLStyle }]}>
              {props.view ? (
                props.view
              ) : show ? (
                <View style={{ alignItems: viewSelfRTLStyle }}>
                  <TouchableOpacity
                    style={[styles.increase, { alignSelf: viewRTLStyle }]}
                    activeOpacity={0.7}
                    onPress={viewPress}
                  >
                    <Increase
                      height={windowHeight(16)}
                      width={windowWidth(16)}
                      color={appColors.white}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <Counter
                    isRTL={isRTL}
                    viewAlign={viewRTLStyle}
                    height={windowHeight(24)}
                    width={windowWidth(100)}
                    quantity={quantity}
                    totalQuantity={props?.totalQuantity}
                    setShow={setShow}
                    increaseVal={props.increaseVal}
                    decreaseVal={props.decreaseVal}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
