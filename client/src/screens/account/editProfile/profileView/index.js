import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import {getValue, setValue} from '@utils/localStorage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileView = props => {
  const char = props.data?.name.charAt(0);
  const {colors} = useTheme();
  const {isDark} = useValues();
  const [imageUri, setImageUri] = useState(null);

  const [userInfo, setUserInfo] = useState();  
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
      setUserInfo( userInfo.data.user);
    };

    fetchUserInfo();
  }, []);


  useEffect(() => {
    const loadImageUri = async () => {
      try {
        const storedUri = await getValue('profile_image_uri');
        if (storedUri) {
          setImageUri(storedUri);
        } else {
          const img = props?.data?.profile_image?.original_url;
          if (img) {
            setImageUri(img);
          }
        }
      } catch (error) {
        console.error('Failed to load image URI from AsyncStorage:', error);
      }
    };

    loadImageUri();
  }, []);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const selectedImage = response?.assets[0];
        if (selectedImage) {
          props.storeProfile(selectedImage);
          const source = {uri: selectedImage.uri};
          setImageUri(source.uri);
          try {
            setValue('profile_image_uri', source.uri);
          } catch (error) {
            console.error('Failed to save image URI to AsyncStorage:', error);
          }
        }
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.dataView}
      activeOpacity={0.8}
      onPress={selectImage}>
      <View
        style={[
          styles.img,
          {backgroundColor: isDark ? appColors.darkDrawer : appColors.white},
        ]}>
        {userInfo?.photo ? (
          <Image source={{uri: userInfo?.photo}} style={styles.image} />
        ) : (
          <Text style={[styles.char, {color: colors.text}]}>{char || 'b'}</Text>
        )}
      </View>
      <Text style={[styles.name, {color: props.colors.text}]}>
        {/* {props.data?.name || 'baskar'} */} {userInfo?.name}
      </Text>
      <Text style={styles.demoMail}>
        {/* {props.data?.email || 'example@example.com'} */}
        {userInfo?.email}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileView;
