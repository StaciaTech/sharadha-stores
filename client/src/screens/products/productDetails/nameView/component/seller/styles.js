import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    sellerTxt: {
        fontSize: fontSizes.FONT17,
        fontFamily: appFonts.mulish,
        color: appColors.content,
        marginTop: windowHeight(2),
    },
    sb: {
        justifyContent: 'space-between'
    },
    originalPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.mulish,
        color: appColors.content,
        textDecorationLine: 'line-through',
    },
})