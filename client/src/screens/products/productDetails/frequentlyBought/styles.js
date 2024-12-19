import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(4)
    },
    title: {
        fontSize: fontSizes.FONT19,
        fontFamily: appFonts.mulishBold,
        marginTop: windowHeight(14),
    },
    listContainer: {
        flexDirection: 'row',
        paddingVertical: windowHeight(12),
        justifyContent: 'space-between',
        flex: 1,
        borderBottomWidth: 1,
    },
    listSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imageView: {
        height: windowHeight(45),
        width: windowWidth(70),
        backgroundColor: appColors.gray,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    images: {
        height: windowHeight(50),
        width: windowWidth(60)
    },
    details: {
        flex: 1,
        marginHorizontal: windowWidth(10),
        justifyContent: 'center',
    },
    nameValue: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
        paddingRight: windowWidth(24),
    },
    brandValue: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
        marginTop: windowHeight(1),
    },
    amountView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight(1),
    },
    amountSale: {
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT17,
    },
    amount: {
        color: appColors.content,
        textDecorationLine: 'line-through',
        fontFamily: appFonts.mulish,
        fontSize: fontSizes.FONT16,
        marginHorizontal: windowWidth(4),
    },
    checkBox: {
        height: windowHeight(15),
        width: windowWidth(23),
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight(6),
        borderWidth: 1.5,
        borderColor: appColors.primary,
    },
    totalPrice: {
        color: appColors.content,
        fontFamily: appFonts.mulishBold,
    },
    buy: {
        color: appColors.content,
        fontFamily: appFonts.mulish,
        width: '100%',
    },
    mainContainer: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    selectedValue: {
        color: appColors.content,
        fontFamily: appFonts.mulishBold,
    },
    totalPrice1: {
        color: appColors.primary,
        fontFamily: appFonts.mulishBold,
    }
});
