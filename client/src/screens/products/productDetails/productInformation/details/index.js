import { Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Details = ({ name }) => {
    return (
        <>
            <Text
                style={styles.title}>
                {name}
            </Text>
            <Text
                style={styles.valueStyle}>
                :
            </Text>
        </>
    )
}

export default Details