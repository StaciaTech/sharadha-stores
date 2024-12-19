import { StyleSheet } from 'react-native';
import { windowWidth } from '@theme/appConstant';
import { windowHeight } from '../../../../theme/appConstant';


export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(20),
    flexDirection: 'row',
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: windowHeight(20)
  },
});
