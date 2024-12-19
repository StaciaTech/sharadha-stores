import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

const DownloadOrderItem = ({ item, checkNumber }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.maincontainer}>
            <Image source={{ uri: item.item_image }} style={styles.img} />
            <Text
                style={[
                    styles.name,
                    {
                        color: colors.text,
                    },
                ]}>
                {item.item_name}
            </Text>
            <View style={styles.row}>
                {item.can_download_file && (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => checkNumber('files', item)}
                        style={[
                            styles.file,
                            {
                                borderRightColor: colors.background,
                                borderRightWidth: 1,
                            },
                        ]}>
                        <Text style={styles.downloadFiles}>Download Files</Text>
                    </TouchableOpacity>
                )}
                {item.can_download_license && (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => checkNumber('license', item)}
                        style={styles.file}>
                        <Text style={styles.downloadFiles}>Download License</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default DownloadOrderItem;
