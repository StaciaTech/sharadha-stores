import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  view: {
    width: '90%',
    height: windowHeight(160),
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: windowHeight(10),
  },
  categoryTextView: {
    width: windowWidth(360),
    height: windowHeight(20),
    borderRadius: 6,
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(26),
  },
  detailView: {
    width: '90%',
    height: windowHeight(15),
    marginTop: windowHeight(4),
    borderRadius: 5,
    marginHorizontal: windowWidth(26),
  },
  detailView2: {
    width: '85%',
    height: windowHeight(15),
    marginTop: windowHeight(4),
    borderRadius: 5,
    marginHorizontal: windowWidth(26),
  },
  detailView3: {
    width: '89%',
    height: windowHeight(15),
    marginTop: windowHeight(4),
    borderRadius: 5,
    marginHorizontal: windowWidth(26),
  },
  detailView4: {
    width: '87%',
    height: windowHeight(15),
    marginTop: windowHeight(4),
    borderRadius: 5,
    marginHorizontal: windowWidth(26),
  },
  detailTitle: {
    width: windowWidth(360),
    height: windowHeight(20),
    borderRadius: 6,
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(26),
  },
});
