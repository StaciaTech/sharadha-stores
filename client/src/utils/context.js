import React, {createContext, useContext, useState, useEffect} from 'react';
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from '../style/rtlStyles';
import {getValue} from './localStorage';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [isRTL, setIsRTL] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currSymbol, setCurrSymbol] = useState('');
  const [token, setToken] = useState('');
  const [currValue, setCurrValue] = useState();

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    await getValue('RTL').then(function (value) {
      value && setIsRTL(value === 'true');
    });
    await getValue('Dark').then(function (value) {
      value && setIsDark(value === 'true');
    });
    await getValue('token').then(function (value) {
      value && setToken(value);
    });
  };

  const values = {
    textRTLStyle: textRTLStyle(isRTL),
    viewRTLStyle: viewRTLStyle(isRTL),
    imageRTLStyle: imageRTLStyle(isRTL),
    viewSelfRTLStyle: viewSelfRTLStyle(isRTL),
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useValues = () => useContext(AppContext);
