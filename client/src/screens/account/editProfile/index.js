import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, ToastAndroid } from "react-native";
import { Header, AnimatedAlert } from "@commonComponents";
import { useTheme } from "@react-navigation/native";
import { GlobalStyle } from "@style";
import ProfileView from "./profileView/index";
import DetailsView from "./detailsView";
import { useDispatch, useSelector } from "react-redux";
import { getValue, setValue } from "@utils/localStorage";
import { updateLoading } from "@api/store/reducers/accountReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function EditProfile({}) {
  const { colors } = useTheme();
  const { self, loading } = useSelector((state) => state.account);
  const [profileImg, setProfileImage] = useState();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState();
  const messageRef = useRef();

  const update = async (form) => {
    dispatch(updateLoading(true));
    const token = await getValue("token");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("country_code", form.code);
      formData.append("phone", form.phone);
      formData.append("_method", "PUT");
      if (profileImg) {
        formData.append("profile_image", {
          uri: profileImg.uri,
          type: profileImg.type,
          name: profileImg.fileName,
        });
      }

      // Perform the upload using fetch
      const response = await fetch("YOUR_API_KEY", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(updateLoading(false));
      if (!response.ok) {
        messageRef.current.animate();
      }
      console.log("response", response);
      const responseData = await response.json();
      ToastAndroid.showWithGravity(
        "Profile Updated Successfully.",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );

      if (profileImg) {
        setValue("profile_image_uri", profileImg.uri);
      }
    } catch (error) {
      messageRef.current.animate();
    }
  };

  const getData = (img) => {
    setProfileImage(img);
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
      setUserInfo(userInfo.data.user);
    };

    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header isText titleText={"Edit Profile"} />
        <ProfileView colors={colors} data={self} storeProfile={getData} />
        <DetailsView data={userInfo} updateProfile={update} loading={loading} />
      </ScrollView>
      <AnimatedAlert
        text={"Something Went Wrong. Please Try Again Later."}
        ref={messageRef}
        success={false}
      />
    </SafeAreaView>
  );
}
