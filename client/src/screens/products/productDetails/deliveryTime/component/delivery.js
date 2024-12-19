import { View, Text } from 'react-native'
import React from 'react'
import { Delivery } from '@utils/icons';
import styles from '../styles';

const DeliveryData = ({ productDetail }) => {
    return (
        <View style={styles.deliveryTextcontainer}>
            <View style={styles.delivery}>
                <Delivery />
            </View>
            <Text style={styles.deliveryText}>
                {productDetail?.estimated_delivery_text}
            </Text>
        </View>
    )
}

export default DeliveryData