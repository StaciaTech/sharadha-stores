import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useValues } from "@utils/context";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrency } from "@api/store/reducers/otherReducer";
import { Header } from "@commonComponents";
import { Selected, UnSelect } from "@utils/icons";
import { windowHeight, windowWidth } from "@theme/appConstant";
import { getValue, setValue } from "@utils/localStorage";
import styles from "./styles";

export function ChangeCurrency(props) {
  const { colors } = useTheme();
  const { viewRTLStyle, setCurrSymbol, setCurrValue, currValue } = useValues();
  const { currency } = useSelector((state) => state.other);
  const { settings } = useSelector((state) => state.other);
  const dispatch = useDispatch();
  const [selectedSymbol, setSelectedSymbol] = useState(
    settings?.general?.default_currency.symbol || []
  );

  useEffect(() => {
    const fetchSelectedSymbol = async () => {
      const storedSymbol = await getValue("CurrSymbol");
      if (storedSymbol) {
        setSelectedSymbol(storedSymbol);
      }
    };
    fetchSelectedSymbol();
  }, []);

  const changeCurrency = (key, value, code) => {
    setCurrSymbol(key);
    setCurrValue(value);
    setSelectedSymbol(key);
    const curr = {
      symbol: key,
      value: value,
    };
    dispatch(updateCurrency(curr));
    setValue("CurrCode", code);
    setValue("CurrSymbol", key);
    setValue("CurrValue", value.toString());
  };

  return (
    <View>
      <Header isText titleText="Change Currency" showImage />
      {currency.map((item, index) => (
        <View key={index} style={styles.currency}>
          <TouchableOpacity
            style={styles.items}
            activeOpacity={0.8}
            onPress={() =>
              changeCurrency(item.symbol, item.exchange_rate, item.code)
            }
          >
            <View style={[styles.icon, { flexDirection: viewRTLStyle }]}>
              <View style={[styles.symbol, { borderColor: colors.text }]}>
                <Text style={[styles.logo]}>{item.symbol}</Text>
              </View>
              <Text
                style={[
                  styles.text,
                  { color: colors.text, marginHorizontal: windowWidth(12) },
                ]}
              >
                {item.code}
              </Text>
            </View>
            <View style={styles.selected}>
              {item.symbol === selectedSymbol ? (
                <Selected width={windowWidth(26)} height={windowHeight(26)} />
              ) : (
                <UnSelect width={windowWidth(26)} height={windowHeight(26)} />
              )}
            </View>
          </TouchableOpacity>
          {index !== currency.length - 1 && <View style={styles.border} />}
        </View>
      ))}
    </View>
  );
}
