import React, { useState } from "react";
import { View, Text, } from "react-native";
import styles from "./styles";
import { HeaderArrow } from "@utils/icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "@commonComponents";
export function Profile() {
  const { goBack } = useNavigation();
  const [form, setForm] = useState({
    name: props.data.name,
    email: props.data.email,
    phone: props.data.phone.toString(),
  });
  const [errors, setErrors] = useState({});

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    }
  };
  return (
    <View style={styles.profile}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={() => goBack()}>
          <HeaderArrow />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Profile</Text>
        <Text style={styles.profileRight}>Store</Text>
        {/* <HeaderArrow color={"#ffffff"} /> */}
      </View>
      <Text>Name</Text>
      <Input
        placeholder={"Andrea Joanne"}
        value={form.name}
        onChangeText={(value) => {
          onChange({ name: "name", value });
        }}
        error={errors.name}
        rightIcon={<Profile />}
      />
    </View>
  );
}
