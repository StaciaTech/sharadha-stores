import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FinancialItems } from '@otherComponents';
import styles from './styles';

export default transactionList = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text
        style={[
          styles.historyTitle,
          {
            color: colors.text,
          },
        ]}>
        Transaction History
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <FinancialItems
              amount={item.amount}
              date={item.created_at}
              detail={item.detail}
              type={item.type}
            />
          )}
        />
      </View>
    </View>
  );
};
