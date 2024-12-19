import React, { useCallback, useRef, useState } from "react";
import { View, SafeAreaView } from "react-native";
import DetailsView from "./detailsView";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useValues } from "@utils/context";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogin,
  selfData,
  cartData,
  settingsData,
} from "@api/store/actions";
import { AuthContainer } from "@otherComponents";
import { GlobalStyle } from "@style";
import { AnimatedAlert } from "@commonComponents";
import { setValue, deleteValue } from "@utils/localStorage";
import SkipView from "./skipView";
import { updateLoading } from "@api/store/reducers/authReducer";

export function Login(props) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const messageRef = useRef();
  const [message, setMessage] = useState();
  const { textRTLStyle, isRTL, setToken } = useValues();
  useFocusEffect(
    useCallback(() => {
      dispatch(updateLoading(false));
      return () => {};
    }, [])
  );

  const goToHome = () => {
    setValue("isGuest", "true");
    props.navigation.replace("Tab");
  };

  const goToRegister = () => {
    props.navigation.navigate("Registration");
  };

  const goToForgotPassword = () => {
    props.navigation.navigate("ForgotPassword");
  };

  const handleLogin = async (form) => {
    let payload = {
      email: form.email,
      password: form.password,
    };
    dispatch(userLogin(payload))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          updateLoading(true);
          setValue("token", res.access_token);
          setValue("email", form.email);
          setToken(res.access_token);
          dispatch(selfData());
          dispatch(cartData());
          dispatch(settingsData());
          deleteValue("isGuest");
          setTimeout(() => {
            props.navigation.replace("Tab");
          }, 1000);
        } else {
          messageRef.current.animate();
          if (res.message.includes("Connection")) {
            setMessage("Something Went Wrong Please Try Again Later");
          } else {
            setMessage(res.message);
          }
        }
      });
  };

  return (
    <SafeAreaView style={GlobalStyle.authMainView}>
      <AuthContainer
        title="Sign in / Sign Up"
        description={
          " Discover a treasure trove of flavors at our traditional food store app, where every dish tells a story."
        }
        container={
          <View>
            <DetailsView
              colors={colors}
              textAlign={textRTLStyle}
              isRTL={isRTL}
              goToRegister={goToRegister}
              goToForgotPassword={goToForgotPassword}
              handleLogin={handleLogin}
              loading={loading}
            />
            {/* <SkipView onPress={goToHome} /> */}
          </View>
        }
      />
      <AnimatedAlert text={message} ref={messageRef} />
    </SafeAreaView>
  );
}
