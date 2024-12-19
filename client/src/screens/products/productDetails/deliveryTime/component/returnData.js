import { View, Text } from 'react-native'
import React from 'react'
import { Return } from '@utils/icons';
import styles from '../styles';

const ReturnData = ({ productDetail }) => {
    return (
        <View style={styles.deliveryTextcontainer}>
            <View style={styles.delivery}>
                <Return />
            </View>
            <Text style={styles.text}>{productDetail?.return_policy_text}</Text>
        </View>
    )
}

export default ReturnData