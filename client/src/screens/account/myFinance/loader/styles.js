import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  view: {
    width: '100%',
    height: windowHeight(50),
    alignSelf: 'center',
    borderRadius: 6,
  },
  categoryTextView: {
    width: windowWidth(220),
    height: windowHeight(16),
    borderRadius: 2,
    marginTop: windowHeight(20),
  },
  list: {marginTop: windowHeight(20)},
  itemContainer: {
    height: windowHeight(70),
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(20),
  },
  item1: {
    height: windowHeight(16),
    width: windowWidth(120),
    borderRadius: 2,
    marginBottom: windowHeight(5),
  },
  item2: {
    height: windowHeight(16),
    width: windowWidth(180),
    borderRadius: 2,
  },
  container: {alignItems: 'flex-end'},
  item3: {
    height: windowHeight(16),
    width: windowWidth(120),
    borderRadius: 2,
    marginBottom: windowHeight(5),
  },
  item4: {
    height: windowHeight(16),
    width: windowWidth(140),
    borderRadius: 2,
  },
  separator: {
    height: windowHeight(10),
  },
});
