import { StyleSheet } from 'react-native';
import { fontSizes, windowWidth, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    dataView: {
        paddingHorizontal: windowWidth(30),
        paddingVertical: windowHeight(10),
    },
    title: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT18,
    },
    subTxt: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
        color: appColors.content,
        marginHorizontal: windowWidth(20),
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: windowWidth(20),
    },
    date: {
        color: appColors.content,
        fontFamily: appFonts.mulish,
        marginLeft: windowWidth(6),
        fontSize: fontSizes.FONT16,
    },
})