import React from "react";
import { View, Image, ScrollView } from "react-native";
import Images from "@utils/images";
import { useTheme } from "@react-navigation/native";
import { AuthTitle } from "./authTitle";
import styles from "./styles";

export function AuthContainer(props) {
  const { colors } = useTheme();
  return (
    <View>
      <Image
        source={Images.login}
        resizeMode="stretch"
        style={styles.loginView}
      />
      <View style={[styles.subView, { backgroundColor: colors.background }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AuthTitle title={props.title} description={props.description} />
          {props.container}
        </ScrollView>
      </View>
    </View>
  );
}
