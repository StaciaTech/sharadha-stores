import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Header} from '@commonComponents';
import {useDispatch, useSelector} from 'react-redux';
import {myWallet, myPoints} from '@api/store/actions';
import styles from './styles';
import TransactionList from './transactionList';
import BalanceView from './balanceView';
import Loader from './loader';
import {NoDataFound} from '@otherComponents';
import images from '@utils/images';
import {useValues} from '@utils/context';

export function MyFinance() {
  const dispatch = useDispatch();
  const {isDark} = useValues();
  const {wallet, points, loading, val} = useSelector(state => state.account);
  const title = val == 'wallet' ? 'My Wallet' : 'My Points';
  const imageTitle = val == 'wallet' ? 'Total Wallet Balance' : 'Total Points';
  const data =
    val == 'wallet' ? wallet?.transactions?.data : points?.transactions?.data;

  const amount = val == 'wallet' ? wallet?.balance : points?.balance;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (val == 'wallet') {
      dispatch(myWallet());
    } else {
      dispatch(myPoints());
    }
  };

  const filterImage = () => {
    if (val == 'wallet') {
      return isDark ? images.emptyWalletDark : images.emptyWallet;
    } else {
      return isDark ? images.noPointsDark : images.noPoints;
    }
  };

  const filterTitle = () => {
    if (val == 'wallet') {
      return 'Your Wallet is Empty';
    } else {
      return 'You Have No Reward Points.';
    }
  };

  const filterSubTitle = () => {
    if (val == 'wallet') {
      return 'There Are No Credits or Debits In Your Wallet.';
    } else {
      return "Looks Like You Haven't Got Any Reward Points Yet.";
    }
  };
  return (
    <SafeAreaView>
      <Header titleText={title} isText image />
      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            stickyHeaderIndices={[0]}
            overScrollMode="never"
            contentContainerStyle={styles.contentStyle}>
            <BalanceView
              amount={amount}
              imageTitle={imageTitle}
              name={!val == 'wallet'}
            />
            {data?.length > 0 ? (
              <TransactionList data={data} />
            ) : (
              <NoDataFound
                img={filterImage()}
                title={filterTitle()}
                subTitle={filterSubTitle()}
                btnText={'Refresh'}
                onPress={getData}
              />
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
