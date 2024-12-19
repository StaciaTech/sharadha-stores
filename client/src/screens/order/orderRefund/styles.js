import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    refundImg: {
        height: windowHeight(150),
        width: windowWidth(280),
        resizeMode: 'contain',
        borderRadius: 10,
    },
    name: {
        marginTop: windowHeight(10),
        fontFamily: appFonts.mulish,
    },
    amount: {
        marginTop: windowHeight(4),
        fontFamily: appFonts.mulish
    },
    ph_20: {
        paddingHorizontal: windowWidth(20)
    },
    customFont: {
        fontFamily: appFonts.mulish
    },
    input: {
        marginTop: windowHeight(6),
        borderRadius: 10,
        height: windowHeight(150),
        borderWidth: 1,
        borderColor: appColors.content,
        fontFamily: appFonts.mulish,
        textAlignVertical: 'top',
        padding: windowHeight(20),
    },
    paymentOption: {
        fontFamily: appFonts.mulish,
        marginTop: windowHeight(20),
        marginBottom: windowHeight(10),
    },
    clickSelect: {
        justifyContent: 'space-between',
        marginTop: windowHeight(2),
    },
    refBtn: {
        width: '94%',
        backgroundColor: appColors.primary,
    }
})