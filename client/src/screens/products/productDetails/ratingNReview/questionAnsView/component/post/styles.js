import { StyleSheet } from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';

export default styles = StyleSheet.create({
    noQuestion: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT16,
    },
    noQuestionContainer: {
        alignItems: 'center',
        width: '100%',
        paddingVertical: windowHeight(4),
    },
    post: {
        backgroundColor: appColors.primary,
        borderRadius: 4,
        padding: 10,
        width: windowWidth(180),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight(8),
    },
    postText: {
        color: appColors.white,
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
    },
})