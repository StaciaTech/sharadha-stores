import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Input } from "@commonComponents";
import { SafeAreaView } from "react-native";
import { AnimatedAlert, Button } from "@commonComponents";
import styles from "./styles";
import { Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalStyle } from "@style";

export default function AuthAddressForm() {
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [userInfo, setUserInfo] = useState();
  const navigation = useNavigation();
  const tenDigitRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    }
  };

  const SaveAddress = async (addressObj) => {
    console.log(addressObj);
    try {
      await AsyncStorage.setItem("addresses", JSON.stringify([addressObj]));
      console.log("Address saved", [addressObj]);
    } catch (error) {
      console.log(error);
    }
  };

  const Nexthandler = () => {
    let isValid = true;
    if (formStep === 1) {
      if (!form.name) {
        setErrors((prev) => {
          return { ...prev, name: "Enter Name" };
        });
        isValid = false;
      } else if (!form.phone) {
        setErrors((prev) => {
          return { ...prev, phone: "Enter Number" };
        });
        isValid = false;
      } else if (!tenDigitRegex.test(form.phone)) {
        setErrors((prev) => {
          return { ...prev, phone: "Enter valid Number" };
        });
        isValid = false;
      } else if (!form.email) {
        setErrors((prev) => {
          return { ...prev, email: "Enter Email" };
        });
        isValid = false;
      } else if (!emailRegex.test(form.email)) {
        setErrors((prev) => {
          return { ...prev, email: "Enter valid Email" };
        });
        isValid = false;
      }
      if (isValid) {
        setFormStep(2);
      }
    } else if (formStep === 2) {
      if (!form.title) {
        setErrors((prev) => {
          return { ...prev, title: "Enter House Number" };
        });
        isValid = false;
      } else if (!form.buildingName) {
        setErrors((prev) => {
          return { ...prev, buildingName: "Enter Building Name" };
        });
        isValid = false;
      } else if (!form.city) {
        setErrors((prev) => {
          return { ...prev, city: "Enter City Name" };
        });
        isValid = false;
      } else if (!form.pincode) {
        setErrors((prev) => {
          return { ...prev, pincode: "Enter Pin Code" };
        });
        isValid = false;
      } else if (!form.state_id) {
        setErrors((prev) => {
          return { ...prev, state_id: "Enter State Name" };
        });
        isValid = false;
      }
      if (isValid) {
        console.log(form);
        navigation.navigate("Tab");
        SaveAddress(form);
      }
    }
  };

  const CloseHandler = () => {
    if (formStep === 1) {
      navigation.navigate("Login");
    } else if (formStep === 2) {
      setFormStep(1);
    }
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem("googleUserInfo");
      return userInfo != null ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error("Error retrieving user info:", error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      const storedAddress = await AsyncStorage.getItem("addresses");
      const parsedAddress = storedAddress ? JSON.parse(storedAddress) : {};

      setUserInfo(userInfo?.data?.user || {});
      setForm({
        name: userInfo?.data?.user?.name || "",
        email: userInfo?.data?.user?.email || "",
        phone: "",
        houseNo: parsedAddress.houseNo || "",
        buildingName: parsedAddress.buildingName || "",
        address: parsedAddress.address || "",
        city: parsedAddress.city || "",
        pinCode: parsedAddress.pinCode || "",
        state: parsedAddress.state || "",
        country: parsedAddress.country || "",
      });
    };

    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <View style={styles.addressFromContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View>
            <View>
              <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitleBlue}>Saradtha</Text>
                <Text style={styles.mainTitleBlack}>Stores</Text>
              </View>
              <Text style={styles.mainDescription}>
                Please provide your basic information to proceed with accessing your account.
              </Text>
            </View>

            {formStep === 1 ? (
              <View>
                <Text style={styles.addressInputTitles}>Name</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "name", value });
                  }}
                  value={form.name}
                  error={errors.name}
                  top={1}
                />
                <Text style={styles.addressInputTitles}>Phone Number</Text>
                <Input
                  keyboardType={"numeric"}
                  onChangeText={(value) => {
                    onChange({ name: "phone", value });
                  }}
                  value={form.phone}
                  top={1}
                  error={errors.phone}
                />
                <Text style={styles.addressInputTitles}>Email</Text>
                <Input
                  keyboardType={"email"}
                  onChangeText={(value) => {
                    onChange({ name: "email", value });
                  }}
                  value={form.email}
                  error={errors.email}
                  top={1}
                />
              </View>
            ) : (
              <View>
                <Text style={styles.addressInputTitles}>Address Type</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "title", value });
                  }}
                  placeholder={'Title (Home, Office, Work)'}
                  error={errors.title}
                  top={1}
                />
                <Text style={styles.addressInputTitles}>Building Name (Optional)</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "buildingName", value });
                  }}
                  top={1}
                  error={errors.buildingName}
                />
                <Text style={styles.addressInputTitles}>Address</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "street", value });
                  }}
                  top={1}
                  error={errors.address}
                />
                <Text style={styles.addressInputTitles}>City</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "city", value });
                  }}
                  top={1}
                  error={errors.city}
                />
                <Text style={styles.addressInputTitles}>Pin code</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "pincode", value });
                  }}
                  top={1}
                  error={errors.pinCode}
                />
                <Text style={styles.addressInputTitles}>State</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "state_id", value });
                  }}
                  top={1}
                  error={errors.state}
                />
                <Text style={styles.addressInputTitles}>Country</Text>
                <Input
                  onChangeText={(value) => {
                    onChange({ name: "country_id", value });
                  }}
                  top={1}
                  error={errors.state}
                />
              </View>
            )}
          </View>
          <View style={styles.addressFormbtnContainer}>
            <Pressable onPress={CloseHandler}>
              <View style={styles.addressCancelBtn}>
                <Text style={{ color: "#17349D" }}>
                  {formStep === 1 ? "Cancel" : "Back"}
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={Nexthandler}>
              <View style={styles.addressNextBtn}>
                <Text style={{ color: "#fff" }}>
                  {formStep === 1 ? "Next" : "Submit"}
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
