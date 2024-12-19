import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export default saleTimer = ({startDate, endDate}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const {isDark} = useValues();
  const {colors} = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  function calculateTimeLeft() {
    const now = moment();
    const end = moment(endDate);
    const start = moment(startDate);
    if (now.isBefore(start)) {
      return start.diff(now);
    } else if (now.isBefore(end)) {
      return end.diff(now);
    } else {
      return 0;
    }
  }

  const formatTimeLeft = milliseconds => {
    const duration = moment.duration(milliseconds);
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const {days, hours, minutes, seconds} = formatTimeLeft(timeLeft);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}>
      <View style={styles.center}>
        <Text style={[styles.text, {color: colors.text}]}>{days}</Text>
        <Text style={[styles.text, {color: colors.text}]}>Days</Text>
      </View>
      <Text style={[styles.text, {color: colors.text}]}>:</Text>
      <View style={styles.center}>
        <Text style={[styles.text, {color: colors.text}]}>{hours}</Text>
        <Text style={[styles.text, {color: colors.text}]}>Hours</Text>
      </View>
      <Text style={[styles.text, {color: colors.text}]}>:</Text>
      <View style={styles.center}>
        <Text style={[styles.text, {color: colors.text}]}>{minutes}</Text>
        <Text style={[styles.text, {color: colors.text}]}>Min</Text>
      </View>
      <Text style={[styles.text, {color: colors.text}]}>:</Text>
      <View style={styles.center}>
        <Text style={[styles.text, {color: colors.text}]}>{seconds}</Text>
        <Text style={[styles.text, {color: colors.text}]}>Sec</Text>
      </View>
    </View>
  );
};
