import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    ratingsView: {
        marginBottom: windowHeight(10),
        marginTop: windowHeight(4),
        alignItems: 'center',
    },
    ratings: {
        fontSize: fontSizes.FONT16,
        fontFamily: appFonts.mulish,
        marginHorizontal: windowWidth(4),
    },
    offer: {
        backgroundColor: appColors.primary,
        paddingHorizontal: windowWidth(10),
        borderRadius: windowWidth(16),
        paddingVertical: windowHeight(2),
    },
    discount: {
        fontSize: fontSizes.FONT12,
        fontFamily: appFonts.mulish,
        color: appColors.white,
    },
})