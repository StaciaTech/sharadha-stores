import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Button, Input } from "@commonComponents";
import { HidePassword, ShowPassword, AtSign } from "@utils/icons";
import appColors from "@theme/appColors";
import { emailValidate } from "@utils/helper";
import { GlobalStyle } from "@style";
import styles from "./styles";
import Images from "../../../../utils/images";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Pressable } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import PhoneNumberInput from "../../registration/detailsView/phoneNumberInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default detailsView = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const [type, setType] = useState();
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

   React.useEffect(() => {
     GoogleSignin.configure({
       webClientId:
         "323778747839-4e0g91eg4mpp4vucqgolcmh5mm78o9vs.apps.googleusercontent.com",
       // offlineAccess: true,
     });
   }, []);
 
  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens(); 
      console.log(userInfo.data.user);
      await AsyncStorage.setItem("@idToken", tokens.idToken);
      await AsyncStorage.setItem("googleUserInfo", JSON.stringify(userInfo));
      // console.log('User Info:', userInfo);
      // console.log('Tokens:', tokens.accessToken); 
      Alert.alert('Logged in successfully');
      navigation.navigate("AuthAddressForm");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'User cancelled the login flow.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Sign-In is already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Google Play Services not available.');
      } else {
        Alert.alert('Error', error.message);
      }
  }
  };
  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    }
  };

  const PostNumber = async () => {
    try {
      const res = await axios.post("http://192.168.0.115:7000/user/login", {
        phoneNumber: `+91${form.phone}`,
      });
      console.log(res.data.success);
      if (res.data.success) {
        navigation.navigate("VerifyOtp", { phoneNumber: form.phone });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    let isValid = true;

    if (!form.phone) {
      setErrors((prev) => {
        return { ...prev, phone: "Number is Required" };
      });
      isValid = false;
    } else if (form.phone.length != 10) {
      setErrors((prev) => {
        return { ...prev, phone: "invalid number" };
      });
      isValid = false;
    }
    // else if (!form.email) {
    //   setErrors((prev) => {
    //     return { ...prev, email: "Email is Required" };
    //   });
    //   isValid = false;
    // } else if (!emailValidate.test(form.email)) {
    //   setErrors((prev) => {
    //     return { ...prev, email: "Enter Valid Email Address" };
    //   });
    //   isValid = false;
    // }
    // if (!form.password) {
    //   setErrors((prev) => {
    //     return { ...prev, password: "Password is Required" };
    //   });
    //   isValid = false;
    // } else if (form.password.length < 8) {
    //   setErrors((prev) => {
    //     return { ...prev, password: "Password Should Be 8 Characters" };
    //   });
    //   isValid = false;
    // }
    if (isValid) {
      console.log("submitted");

      props.handleLogin(form);
      // console.log("submitted");
      PostNumber();
    }
  };

  // console.log(form.phone);

  return (
    <View>
      {/* <Input
        placeholder={"Enter Mobile Number"}
        // rightIcon={<AtSign />}
        keyboardType={"numeric"}
        onChangeText={(value) => {
          onChange({ name: "phone", value });
        }}
        error={errors.phone}
      /> */}
      <PhoneNumberInput onChange={onChange} val={"phone"} />
      {/* <PhoneInput /> */}
      {/* <Input
        placeholder={"Password"}
        rightIcon={showPassword ? <ShowPassword /> : <HidePassword />}
        onChangeText={(value) => {
          onChange({ name: "password", value });
        }}
        error={errors.password}
        onPress={visiblePassword}
        secureTextEntry={!showPassword}
      /> */}
      {/* <TouchableOpacity onPress={props.goToForgotPassword}>
        <Text
          style={[
            styles.forgotPassword,
            { textAlign: props.isRTL ? 'left' : 'right' },
          ]}>
          Forgot Password?
        </Text>
      </TouchableOpacity> */}
      <Button
        text={"Continue"}
        style={GlobalStyle.authButton}
        color={appColors.white}
        onPress={onSubmit}
        loading={props.loading}
      />
      {/* <TouchableOpacity activeOpacity={0.8} onPress={props.goToRegister}>
        <Text style={styles.createAcc}>
          Don't Have Account? <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </TouchableOpacity> */}
      <View style={styles.authSeperation}>
        <View
          style={[
            {
              height: 2,
              borderWidth: 1,
              borderColor: "#ddd",
              borderStyle: "dashed",
              width: "43%",
            },
          ]}
        ></View>
        <Text style={{ color: "#ACACAC" }}>or</Text>
        <View
          style={[
            {
              height: 2,
              borderWidth: 1,
              borderColor: "#ddd",
              borderStyle: "dashed",
              width: "43%",
            },
          ]}
        ></View>
      </View>
      <Pressable onPress={GoogleSingUp}>
        <View style={styles.googleAuthContainerParent}>
          <View style={styles.googleAuthContainer}>
            <Image source={Images.googleLogo} />
            <Text style={styles.googleAuthtext}>sign in with Google</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
