import { Image, Text, View } from "react-native";
import appColors from "@theme/appColors";
import { Button } from "@commonComponents";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

export function NoDataFound({ title, img, subTitle, btnText, onPress }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            color: "#969696",
          },
        ]}
      >
        {subTitle}
      </Text>
      <Button
        onPress={onPress}
        style={styles.button}
        text={btnText}
        color={appColors.white}
      />
    </View>
  );
}
