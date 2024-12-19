import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
  containerLoader: {
    height: '100%'
  },
  imageContainer: {
    flexDirection: 'row',
  },
  nameLoader: {
    width: windowWidth(240),
    height: windowHeight(12),
    borderRadius: windowWidth(20),
    marginLeft: windowWidth(20),
    marginTop: windowHeight(20)
  },
  brandLoader: {
    width: windowWidth(50),
    height: windowHeight(10),
    borderRadius: windowWidth(20),
    marginLeft: windowWidth(20),
    marginTop: windowHeight(10),
  },
  brandLoader2: {
    width: windowWidth(170),
    height: windowHeight(15),
    borderRadius: windowWidth(20),
    marginLeft: windowWidth(20),
    marginTop: windowHeight(10),
  },
  priceLoader: {
    width: windowWidth(80),
    height: windowHeight(15),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(5)
  },
  priceLoader2: {
    width: windowWidth(80),
    height: windowHeight(15),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(5)
  },
  priceLoader3: {
    width: windowWidth(80),
    height: windowHeight(15),
    borderRadius: windowWidth(20),
    marginRight: windowWidth(30),
  },
  container: {
    flexDirection: 'row',
    marginTop: windowHeight(8),
    width: windowWidth(270),
    justifyContent: 'flex-end'
  },
  container2: {
    flexDirection: 'row',
    marginTop: windowHeight(10),
    width: windowWidth(270),
    justifyContent: 'flex-end'
  },
  separator: {
    width: '100%',
    marginVertical: windowHeight(20),
  },
  detail1: {
    height: windowHeight(12),
    width: windowWidth(350),
    marginTop: windowHeight(10),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(15)
  },
  detail2: {
    height: windowHeight(12),
    width: windowWidth(390),
    marginTop: windowHeight(10),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(20)
  },
  detail3: {
    height: windowHeight(12),
    width: windowWidth(310),
    marginTop: windowHeight(10),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(20)
  },
  detail4: {
    height: windowHeight(12),
    width: windowWidth(50),
    marginTop: windowHeight(10),
    borderRadius: windowWidth(20),
    marginHorizontal: windowWidth(20)
  },

  headerContainer: {
    height: windowHeight(200)
  },
  subHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLoader: {
    width: '100%',
    height: windowHeight(240),
  },

});
