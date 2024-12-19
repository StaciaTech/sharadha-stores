import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT21,
        fontFamily: appFonts.mulishBold,
    },
    brand: {
        justifyContent: 'space-between',
        marginVertical: windowHeight(5),
    },
    sellerTxt: {
        fontSize: fontSizes.FONT17,
        fontFamily: appFonts.mulish,
        color: appColors.content,
        marginTop: windowHeight(2),
    },
})