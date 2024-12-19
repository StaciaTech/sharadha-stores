import React from 'react';
import { Text, View } from 'react-native';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import { formatDate } from '@utils/helper';
import { titleCase } from '@utils/helper';
import styles from './styles';
import { useSelector } from 'react-redux';

export function FinancialItems({ amount, detail, type, date }) {
  const { colors } = useTheme();
  const { currSymbol, currValue } = useSelector(state => state.other);
  const formattedDate = formatDate(date);
  const [datePart, monthPart, yearPart, timePart] = formattedDate.split(' ');
  const dateOnly = `${datePart} ${monthPart} ${yearPart}`;
  const timeOnly = timePart;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}>
      <View style={styles.statusContainer}>
        <Text style={styles.amount}>
          {currSymbol}
          {(currValue * amount).toFixed(2)}
        </Text>
        <Text
          style={[
            styles.type,
            {
              color:
                type === 'debit' || type === 'rejected'
                  ? appColors.highLight
                  : appColors.credit,
              backgroundColor:
                type == 'debit' || type === 'rejected'
                  ? appColors.debitBg
                  : appColors.creditBg,
            },
          ]}>
          {titleCase(type)}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.details}>{detail}</Text>
        <View>
          <Text style={styles.dateText}>{dateOnly}</Text>
          <Text style={[styles.dateText, styles.mt_2]}>{timeOnly}</Text>
        </View>
      </View>
    </View>
  );
}
