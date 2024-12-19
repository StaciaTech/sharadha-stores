import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  orderLoader: {
    width: '92%',
    borderRadius: windowHeight(10),
    height: windowHeight(70),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(20),
  },
  detailView: {
    alignItems: 'center',
    marginHorizontal: windowWidth(10),
  },
  img: {
    width: windowWidth(45),
    height: windowHeight(30),
    borderRadius: windowWidth(2),
  },
  title: {
    width: windowWidth(150),
    height: windowHeight(20),
    borderRadius: windowWidth(2),
    marginVertical: windowHeight(4)
  },
});
