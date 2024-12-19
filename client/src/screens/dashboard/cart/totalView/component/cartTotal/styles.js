import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    data: {
        fontSize: fontSizes.FONT17,
        color: appColors.content,
        fontFamily: appFonts.mulish,
    },
    dataView: {
        marginTop: windowHeight(12),
        justifyContent: 'space-between',
    },
    container: {
        marginTop: windowHeight(10),
        paddingHorizontal: windowWidth(16),
        borderRadius: windowWidth(20),
        paddingBottom: windowHeight(16),
    },
})