import React, { useRef, useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AuthContainer } from "@otherComponents";
import { GlobalStyle } from "@style";
import OTPTextView from "react-native-otp-textinput";
import appColors from "@theme/appColors";
import { useTheme } from "@react-navigation/native";
import { AnimatedAlert, Button } from "@commonComponents";
import { verifyOtp } from "@api/store/actions";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function VerifyOtp(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, email } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const { colors } = useTheme();
  const messageRef = useRef();
  const [message, setMessage] = useState();

  const PhoneNumberPassed = props.route.params.phoneNumber;
  // console.log(PhoneNumberPassed);

  const handleOTPChange = (otp) => {
    setOtp(otp);
  };

  const checkOtp = () => {
    if (otp.length != 4) {
      setOtpError("Please Enter Valid OTP");
    } else {
      handleVerifyOtp();
      //this is post call
    }
  };

  const handleVerifyOtp = async () => {
    try {
      res = await axios.post("http://192.168.0.115:7000/user/verify-otp", {
        phoneNumber: `+91${PhoneNumberPassed}`,
        otp: otp,
      });
      console.log(res.data.token);
      if (res.data.success) {
        navigation.navigate("AuthAddressForm");
        saveLoginToken(res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveLoginToken = async (Token) => {
    try {
      await AsyncStorage.setItem("LoginToken", Token);
      console.log("token saved");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleVerifyOtp = () => {
  //   let payload = {
  //     email: email,
  //     token: otp,
  //   };
  //   dispatch(verifyOtp(payload))
  //     .unwrap()
  //     .then((res) => {
  //       if (res?.success) {
  //         goToReset();
  //       } else {
  //         messageRef.current.animate();
  //         if (res.message.includes("Connection")) {
  //           setMessage("Something Went Wrong Please Try Again Later");
  //         } else {
  //           setMessage(res.message);
  //         }
  //       }
  //     });
  // };

  const goToReset = (otp) => {
    props.navigation.replace("ResetPassword", { otp });
  };

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <AuthContainer
        description="Enter the One-Time Password (OTP) sent to your mobile number to access your account."
        container={
          <View>
            <OTPTextView
              autoFocus
              tintColor={appColors.primary}
              textInputStyle={[
                styles.otpInput,
                {
                  color: "#17349D",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                },
              ]}
              containerStyle={{
                justifyContent: "center",
              }}
              handleTextChange={handleOTPChange}
              inputCount={4}
              keyboardType="numeric"
            />
            {otpError && <Text style={styles.otpError}>{otpError}</Text>}
            <View style={styles.buttonSpacing}>
              <Button
                onPress={checkOtp}
                style={GlobalStyle.authButton}
                text="Submit"
                loading={loading}
                color={appColors.white}
              />
            </View>
          </View>
        }
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
