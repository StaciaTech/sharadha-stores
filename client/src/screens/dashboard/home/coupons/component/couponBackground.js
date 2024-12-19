import { ImageBackground, Text } from 'react-native'
import React from 'react'
import styles from '../styles'
import images from '@utils/images';
import { windowWidth } from '@theme/appConstant';

const CouponBackground = ({ key, item, currSymbol }) => {
    return (
        <>
            <ImageBackground
                key={key}
                source={images.couponBg}
                resizeMode="stretch"
                style={[
                    styles.dataView,
                    { marginLeft: key != 0 ? windowWidth(10) : 0 },
                ]}>
                <Text style={styles.discount}>{item.code}</Text>
                <Text style={styles.upto}>
                    UPTO {currSymbol}
                    {item.amount.replace(/\.00/g, '')}
                    {item.type === 'percentage' ? '%' : ''} OFF
                </Text>
            </ImageBackground>
        </>
    )
}

export default CouponBackground