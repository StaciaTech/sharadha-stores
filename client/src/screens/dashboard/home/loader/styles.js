import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  categoryView: {
    width: windowWidth(100),
    height: windowHeight(16),
    marginTop: windowHeight(8),
    borderRadius: windowWidth(4),
  },
  priceView: {
    height: windowHeight(50),
    width: windowWidth(170),
    marginLeft: windowWidth(10),
    borderRadius: windowWidth(10),
  },
  couponView: {
    marginLeft: windowWidth(10),
    borderRadius: windowWidth(10),
  },
  view: {
    width: '90%',
    height: windowHeight(180),
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: windowHeight(10),
  },
  categoryList: {
    height: windowHeight(90),
  },
  categoryTextView: {
    width: windowWidth(220),
    height: windowHeight(20),
    alignSelf: 'center',
    borderRadius: 6,
    marginVertical: windowHeight(10),
  },
  offersView: {
    alignItems: 'flex-start',
    paddingHorizontal: windowWidth(16),
    marginTop: windowHeight(5),
  },
  offerTitle: {
    width: windowWidth(220),
    height: windowHeight(20),
    marginTop: windowHeight(10),
    borderRadius: 7,
  },
  lowestPrice: {
    flexDirection: 'row',
    marginTop: windowHeight(10),
  },
  categorySpace: {
    marginTop: windowHeight(10),
  },
  emptyView: {
    height: windowHeight(50),
    width: windowWidth(26),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
