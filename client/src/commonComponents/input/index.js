import React, {useState} from 'react';
import {Text, TouchableOpacity, TextInput, View} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import styles from './styles';

export function Input(props) {
  const {colors} = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();

  const focus = value => {
    setIsFocus(value);
  };

  return (
    <View style={{marginTop: props.top || windowHeight(16)}}>
      <View
        style={[
          styles.inputView,
          {
            width: props.width || windowWidth(440),
            borderWidth: isFocus ? 1 : 2,
            borderColor: isFocus ? appColors.primary : colors.primary,
            backgroundColor: props.color
              ? props.color
              : isDark || isFocus
              ? colors.primary
              : appColors.gray,
            paddingLeft: props.leftIcon ? windowWidth(56) : windowWidth(16),
            flexDirection: viewRTLStyle,
            height: props.height || windowHeight(40),
          },
        ]}>
        <TextInput
          editable={props.editable}
          value={props.value}
          onChangeText={props.onChangeText}
          autoFocus={props.autoFocus}
          placeholder={props.placeholder}
          onFocus={() => focus(true)}
          secureTextEntry={props.secureTextEntry}
          onBlur={() => focus(false)}
          placeholderTextColor={isDark ? colors.text : appColors.content}
          style={[
            styles.input,
            {
              width: props.width || windowWidth(440),
              textAlign: textRTLStyle,
              color: colors.text,
            },
            isRTL
              ? props.leftIcon
                ? styles.mr_40
                : styles.mr_20
              : props.leftIcon
              ? styles.ml_40
              : styles.ml_20,
          ]}
          keyboardType={props.type ? 'numeric' : props.keyboardType}
        />
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={props.onPress}
          activeOpacity={0.7}>
          {props.leftIcon}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={props.onPress}
          activeOpacity={0.7}>
          {props.isText ? (
            <Text style={styles.text}>{props.text}</Text>
          ) : (
            props.rightIcon
          )}
        </TouchableOpacity>
      </View>
      {props.error && (
        <Text style={[styles.error, props.errStyle]}>{props.error}</Text>
      )}
    </View>
  );
}
