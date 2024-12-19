import React, { useEffect, useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Header, Input, Button, AnimatedAlert } from "@commonComponents";
import { useTheme } from "@react-navigation/native";
import { GlobalStyle } from "@style";
import { useValues } from "@utils/context";
import appColors from "@theme/appColors";
import { windowHeight } from "@theme/appConstant";
import PhoneNumberInput from "../auth/registration/detailsView/phoneNumberInput";
import { useDispatch, useSelector } from "react-redux";
import { countryStateData, createAdd, updateAdd } from "@api/store/actions";
import { updateState } from "@api/store/reducers/otherReducer";
import Data from "@utils/json";
import { emailValidate } from "@utils/helper";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addAddress,
  loadAddresses,
  saveAddresses,
} from "../../api/store/reducers/deliveryAddReducer";
export function AddAddress({ navigation, route }) {
  const addresses = useSelector((state) => state.delivery.addresses);
  const [form, setForm] = useState({
    title: route?.params?.add.title,
    street: route?.params?.add.street,
    countryValue: route?.params?.add.country_id,
    stateValue: route?.params?.add.state_id,
    city: route?.params?.add.city,
    pincode: route?.params?.add.pincode,
    phone: route?.params?.add.phone,
    code: route?.params?.add.code,
    countryCode: route?.params?.add.country_code || "1",
    userCountryCode: "US",
  });
  const text = route?.params?.add?.title ? "Update" : "Add";
  const id = route?.params?.add?.id;

  const [errors, setErrors] = useState({});
  const { colors } = useTheme();
  const [countryFocus, setCountryFocus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const { isDark, token } = useValues();
  const dispatch = useDispatch();
  const { country, state } = useSelector((state) => state.other);
  const { loading } = useSelector((state) => state.delivery);
  const { self } = useSelector((state) => state.account);
  const messageRef = useRef();

  useEffect(() => {
    dispatch(countryStateData());
    const mappedCountryCode =
      Data.countryCodes[route?.params?.add?.country_code];
    onChange({ name: "phone", value: mappedCountryCode });
    updateStat();
  }, []);

  const updateStat = () => {
    if (route?.params?.add && country) {
      const stateData = country.filter((item) => {
        return item.id === form.countryValue;
      });
      if (stateData.length > 0) {
        dispatch(updateState(stateData[0].state));
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

  const getData = () => {
    let isValid = true;
    if (!token) {
      if (!form.name) {
        setErrors((prev) => {
          return { ...prev, name: "Name is Required" };
        });
        isValid = false;
      }
      if (!form.email) {
        setErrors((prev) => {
          return { ...prev, email: "Email is Required" };
        });
        isValid = false;
      } else if (!emailValidate.test(form.email)) {
        setErrors((prev) => {
          return { ...prev, email: "Enter Valid Email Address" };
        });
        isValid = false;
      }
      if (!form.userPhone) {
        setErrors((prev) => {
          return { ...prev, userPhone: "Phone Number is Required" };
        });
        isValid = false;
      }
    }
    if (!form.title) {
      setErrors((prev) => {
        return { ...prev, title: "Title is Required" };
      });
      isValid = false;
    }
    if (!form.street) {
      setErrors((prev) => {
        return { ...prev, street: "Address is Required" };
      });
      isValid = false;
    }
    if (!form.countryValue) {
      setErrors((prev) => {
        return { ...prev, countryValue: "Country is Required" };
      });
      isValid = false;
    }
    if (!form.stateValue) {
      setErrors((prev) => {
        return { ...prev, stateValue: "State is Required" };
      });
      isValid = false;
    }
    if (!form.city) {
      setErrors((prev) => {
        return { ...prev, city: "City is Required" };
      });
      isValid = false;
    }
    if (!form.pincode) {
      setErrors((prev) => {
        return { ...prev, pincode: "Pincode is Required" };
      });
      isValid = false;
    }
    if (!form.phone) {
      setErrors((prev) => {
        return { ...prev, phone: "Phone is Required" };
      });
      isValid = false;
    }
    if (isValid) {
      if (!token) {
        navigation.navigate("SelectDelivery", { form: form });
      } else {
        handleAddAddress();
      }
    }
  };

  const handleAddAddress = async () => {
    const data = {
      name: form.name,
      title: form.title,
      street: form.street,
      type: "shipping",
      city: form.city,
      phone: form.phone,
      pincode: form.pincode,
      country_code: form.code,
      country_id: form.countryValue,
      state_id: form.stateValue,
      user_id: self?.id,
      is_default: true,
    };

    const updatedAddresses = [...addresses, data];
    dispatch(addAddress(data));
    dispatch(saveAddresses(updatedAddresses));
    navigation.goBack();
    // var res;
    // if (route?.params?.add?.title) {
    //   var val = {
    //     id,
    //     data,
    //   };
    //   res = await dispatch(updateAdd(val));
    //   ToastAndroid.showWithGravity(
    //     'Address Update Successfully',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER,
    //   );
    //   navigation.goBack();
    // } else {
    //   res = await dispatch(createAdd(data));
    // }
    // if (res != 'Error') {
    //   navigation.goBack();
    // } else {
    //   messageRef.current.animate();
    // }
  };

  const handleDeleteAddress = (index) => {
    console.log(index);
    dispatch(removeAddress(index));
  };
  useEffect(() => {
    // Load addresses from AsyncStorage when the component mounts
    dispatch(loadAddresses());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}
    >
      <Header showImage isText titleText={text + " Address"} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* {!token && (
          <View>
            <Text style={[styles.title, {color: colors.text}]}>
              Account Details
            </Text>
            <Input
              placeholder={'Name'}
              value={form.name}
              onChangeText={value => {
                onChange({name: 'name', value});
              }}
              error={errors.name}
            />
            <Input
              placeholder={'Email'}
              value={form.email}
              onChangeText={value => {
                onChange({name: 'email', value});
              }}
              error={errors.email}
            />
            <PhoneNumberInput
              onChange={onChange}
              countryCode={form.userCountryCode}
              value={form.userPhone}
              val={'user'}
            />
          </View>
        )} */}
       
        <Input
          placeholder={"Name"}
          value={form.name}
          onChangeText={(value) => {
            onChange({ name: "name", value });
          }}
          error={errors.name}
        />
       
        <Input
          placeholder={"Title (Home, Office, Work)"}
          value={form.title}
          onChangeText={(value) => {
            onChange({ name: "title", value });
          }}
          error={errors.title}
        />
        <Input
          placeholder={"Address"}
          value={form.street}
          onChangeText={(value) => {
            onChange({ name: "street", value });
          }}
          error={errors.street}
        />
        {/* <Dropdown
          style={[
            styles.dropdown,
            {
              borderWidth: countryFocus ? 1 : 2,
              borderColor: countryFocus ? appColors.primary : colors.primary,
              backgroundColor:
                isDark || countryFocus ? colors.primary : appColors.gray,
            },
          ]}
          placeholderStyle={[
            styles.placeholderStyle,
            {
              color: isDark ? colors.text : appColors.content,
            },
          ]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {
              color: colors.text,
            },
          ]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={country.map(option => ({
            value: option.id,
            label: option.name,
            selectedState: option.state,
          }))}
          itemTextStyle={{color: colors.text}}
          maxHeight={300}
          labelField="label"
          onFocus={() => setCountryFocus(true)}
          onBlur={() => setCountryFocus(false)}
          valueField="value"
          placeholder={'Country'}
          value={form.countryValue}
          onChange={item => {
            onChange({name: 'countryValue', value: item.value});
            dispatch(updateState(item.selectedState));
          }}
        /> */}
        <Input
          placeholder={"Country"}
          value={form.countryValue}
          onChangeText={(value) => {
            onChange({ name: "countryValue", value });
          }}
          error={errors.countryValue}
        />
        {/* {errors.countryValue && (
          <Text style={styles.error}>{errors.countryValue}</Text>
        )} */}
        {/* <Dropdown
          style={[
            styles.dropdown,
            {
              borderWidth: stateFocus ? 1 : 2,
              borderColor: stateFocus ? appColors.primary : colors.primary,
              backgroundColor:
                isDark || stateFocus ? colors.primary : appColors.gray,
            },
          ]}
          placeholderStyle={[
            styles.placeholderStyle,
            {
              color: isDark ? colors.text : appColors.content,
            },
          ]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {
              color: colors.text,
            },
          ]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={state.map(option => ({
            value: option.id,
            label: option.name,
          }))}
          itemTextStyle={{color: colors.text}}
          maxHeight={300}
          labelField="label"
          onFocus={() => setStateFocus(true)}
          onBlur={() => setStateFocus(false)}
          valueField="value"
          placeholder={'State'}
          value={form.stateValue}
          onChange={item => {
            onChange({name: 'stateValue', value: item.value});
          }}
        /> */}
        <Input
          placeholder={"State"}
          value={form.stateValue}
          onChangeText={(value) => {
            onChange({ name: "stateValue", value });
          }}
          error={errors.state}
        />
        {errors.stateValue && (
          <Text style={styles.error}>{errors.stateValue}</Text>
        )}
        <Input
          placeholder={"City"}
          value={form.city}
          onChangeText={(value) => {
            onChange({ name: "city", value });
          }}
          error={errors.city}
        />
        <Input
          placeholder={"Pincode"}
          value={form.pincode}
          onChangeText={(value) => {
            onChange({ name: "pincode", value });
          }}
          error={errors.pincode}
        />
        <PhoneNumberInput
          onChange={onChange}
          countryCode={form.countryCode}
          value={form.phone}
        />
        <Button
          text={text}
          onPress={handleAddAddress}
          color={appColors.white}
          loading={loading}
          style={styles.btn}
        />
      </ScrollView>
      <AnimatedAlert
        text={"Something Went Wrong. Please Try Again Later."}
        ref={messageRef}
        success={false}
      />
    </SafeAreaView>
  );
}
