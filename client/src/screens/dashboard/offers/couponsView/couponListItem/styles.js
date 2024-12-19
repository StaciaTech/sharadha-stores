import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    bg: {
        height: windowHeight(120),
        width: windowWidth(430),
        alignSelf: 'center',
        overflow: 'hidden',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        borderRadius: 10,
    },
    details: {
        marginTop: windowHeight(10),
    },
    title: {
        fontFamily: appFonts.mulishBold,
        fontSize: fontSizes.FONT18,
    },
    desc: {
        color: appColors.content,
        fontFamily: appFonts.mulish,
        marginTop: windowHeight(2),
    },
    codeContainer: {
        justifyContent: 'space-between',
        marginBottom: windowHeight(14),
        alignItems: 'center',
    },
    copyCode: {
        color: appColors.primary,
        fontFamily: appFonts.mulish,
        backgroundColor: appColors.couponBg,
        paddingHorizontal: windowWidth(10),
        paddingVertical: windowHeight(4),
        borderRadius: 3,
    },
    code: {
        color: appColors.primary,
        fontFamily: appFonts.mulish,
    },
})