import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import appColors from '@theme/appColors';
import {useIsFocused, useTheme, useFocusEffect} from '@react-navigation/native';
import {MenuItem} from '@otherComponents';
import {Header} from '@commonComponents';
import ProfileView from './profileView';
import {SignOut} from '@utils/icons';
import {clearValue, setValue} from '@utils/localStorage';
import {useValues} from '@utils/context';
import {useDispatch, useSelector} from 'react-redux';
import {windowHeight} from '@theme/appConstant';
import {financialState} from '@api/store/reducers/accountReducer';
import {resetState} from '@api/store/reducers';
import Data from '@utils/json';
import Switch from './switch';
import styles from './styles';
import images from '@utils/images';
import {DrawerArrow} from '@utils/icons';

export function PageList(props) {
  const {setIsDark, setIsRTL, isDark, viewRTLStyle, isRTL, token} = useValues();
  const dispatch = useDispatch();
  const {notifications} = useSelector(state => state.notification);
  const [count, setCount] = useState();

  const {colors} = useTheme();
  const isFocused = useIsFocused();

  const goToScreen = (screen, val) => {
    if (screen) {
      props.navigation.navigate(screen);
      dispatch(financialState(val));
    }
  };

  useEffect(() => {
    checkCount();
  }, []);

  useEffect(() => {
    if (!isFocused) {
      checkCount();
    }
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      checkCount();

      return () => {};
    }, [isFocused]),
  );

  const checkCount = () => {
    var count = 0;
    notifications?.map(item => {
      if (item.read_at == null) count = count + 1;
      setCount(count);
    });
    count > 0 && setCount(count);
  };

  const clearData = () => {
    clearValue();
    setIsRTL();
    setIsDark();
    dispatch(resetState());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const logout = async () => {
    if (token) {
      clearValue();
    }
    setIsRTL();
    setIsDark();
    dispatch(resetState());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const visibleCurrencyModal = () => {
    props.navigation.navigate('ChangeCurrency');
  };

  const goToEdit = () => {
    props.navigation.navigate('EditProfile');
  };

  const handleToggleDarkMode = async isOn => {
    try {
      setIsDark(isOn);
      await setValue('Dark', isOn.toString());
    } catch (error) {
      console.error('Error toggling dark mode:', error);
    }
  };

  const handleToggleRTL = async isOn => {
    try {
      setIsRTL(isOn);
      await setValue('RTL', isOn.toString());
    } catch (error) {
      console.error('Error toggling RTL mode:', error);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header isText titleText={'Account'} height={windowHeight(50)} image />
        {/* <View style={styles.header}>
          <Text style={styles.headerTxt}>Account</Text>
        </View> */}
        {/* <View style={styles.account}>
          <Image 
          source={images.defaultPro}
          />
          <View>
            <Text style={styles.username}>Devil</Text>
            <Text style={styles.userMobile}>+91 9876543210</Text>
          </View>
        </View> */}
        <View style={styles.mainView}>
          {/* <TouchableOpacity style={styles.mainViewEdit} onPress={() => props.navigation.navigate('EditProfile')}>
            <Text style={styles.mainViewEditTitle}>Profile</Text>
            <DrawerArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainViewEdit} onPress={() => props.navigation.navigate('Address')}>
            <Text style={styles.mainViewEditTitle}>Address</Text>
            <DrawerArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainViewEdit}>
            <Text style={styles.mainViewEditTitle}>Order History</Text>
            <DrawerArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainViewEdit}>
            <Text style={styles.mainViewEditTitleLog}>Log out</Text>
            {/* <DrawerArrow /> */}
          {/* </TouchableOpacity> */} 
          {/* {token && ( */}
            <View style={styles.pageList}>
              <ProfileView colors={colors} goToEdit={goToEdit} />
              {Data.accountData.map((item, key) => (
                <MenuItem
                  width={'100%'}
                  icon={item.icon}
                  text={item.title}
                  navigationProps={props}
                  onPress={() => goToScreen(item.screen, item.val)}
                  fill={isDark ? appColors.white : appColors.black}
                  count={count}
                />
              ))}
            </View>
          {/* )} */}
          {/* <View style={styles.menu}>
            <MenuItem
              width={'100%'}
              text={'Change Currency'}
              navigationProps={props}
              onPress={visibleCurrencyModal}
              fill={isDark ? appColors.white : appColors.black}
            />
          </View>
          <Switch
            from
            viewRTLStyle={viewRTLStyle}
            isOn={isRTL}
            onToggle={handleToggleRTL}
          />
          <Switch
            viewRTLStyle={viewRTLStyle}
            isOn={isDark}
            onToggle={handleToggleDarkMode}
          />
          <TouchableOpacity
            onPress={logout}
            activeOpacity={0.7}
            style={[
              styles.signOutView,
              {
                backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
                flexDirection: viewRTLStyle,
                alignSelf: isRTL ? 'flex-end' : 'flex-start',
              },
            ]}>
            <SignOut />
            <Text style={[styles.signOut, {color: colors.text}]}>
              {token ? 'Sign Out' : 'Sign In'}
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
