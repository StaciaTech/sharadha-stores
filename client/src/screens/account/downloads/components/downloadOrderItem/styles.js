import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: appColors.white,
        elevation: 2,
        marginHorizontal: windowWidth(20),
        borderRadius: 10,
        overflow: 'hidden',
    },
    img: {
        height: windowHeight(130),
        width: '100%',
        resizeMode: 'stretch',
    },
    name: {
        textAlign: 'center',
        paddingVertical: windowHeight(10),
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
        flex: 1,
        paddingHorizontal: windowWidth(10),
    },
    row: {
        flexDirection: 'row',
    },
    file: {
        flex: 1,
        backgroundColor: appColors.primary,
        height: windowHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadFiles: {
        color: appColors.white,
        textAlign: 'center',
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
    },
})