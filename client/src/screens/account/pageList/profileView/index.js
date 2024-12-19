import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme, useFocusEffect} from '@react-navigation/native';
import {Edit} from '@utils/icons';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';
import {getValue} from '@utils/localStorage';
import styles from './styles';

export default profileView = props => {
  const {self} = useSelector(state => state.account);
  const name = self?.name?.charAt(0);
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();

  const [imageUri, setImageUri] = useState(null);
  useEffect(() => {
    self && setImageUri(self?.profile_image?.original_url);
  }, []);
  useFocusEffect(
    React.useCallback(() => {
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
    }),
  );

  return (
    <TouchableOpacity
      onPress={props.goToEdit}
      activeOpacity={0.8}
      style={[
        styles.profileView,
        {
          borderBottomColor: colors.border,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={[styles.detailContainer, {flexDirection: viewRTLStyle}]}>
        <View
          style={[
            styles.profileImg,
            {backgroundColor: isDark ? appColors.darkDrawer : appColors.white},
          ]}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <Text style={[styles.text, {color: colors.text}]}>{name || 'b'}</Text>
          )}
        </View>
        <View style={styles.dataView}>
          <Text
            style={[
              styles.name,
              {color: props.colors.text, textAlign: textRTLStyle},
            ]}>
            {self?.name || 'baskar'}
          </Text>
          <Text style={[styles.email, {textAlign: textRTLStyle}]}>
            {self?.email || 'example@example.com'}
          </Text>
        </View>
      </View>
      <View>
        <Edit color={isDark ? 'white' : 'black'} />
      </View>
    </TouchableOpacity>
  );
};
