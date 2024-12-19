import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    image: {
        width: windowWidth(270),
        height: windowHeight(180),
        alignSelf: 'center',
    },
    noInternet: {
        textAlign: 'center',
        marginTop: windowHeight(40),
        fontSize: fontSizes.FONT26,
        fontFamily: appFonts.mulish,
    },
    message: {
        textAlign: 'center',
        marginTop: windowHeight(12),
        fontSize: fontSizes.FONT20,
        fontFamily: appFonts.mulish,
    }
})
