import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import appColors from '@theme/appColors';
import { useValues } from '@utils/context';
import styles from './styles';
import CouponData from './component/couponData';

const CouponListItem = ({ item, onPress, copyCode }) => {
    const { isDark, viewRTLStyle } = useValues();
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress(item.code)}
            style={[
                styles.bg,
                {
                    backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
                },
            ]}
            resizeMode="stretch">
            <CouponData item={item} />
            <TouchableOpacity
                style={[styles.codeContainer, { flexDirection: viewRTLStyle, }]}
                activeOpacity={0.8}
                onPress={() => copyCode(item.code)}>
                <Text style={styles.code}>#{item.code}</Text>
                <Text style={styles.copyCode}>Copy Code</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default CouponListItem;
