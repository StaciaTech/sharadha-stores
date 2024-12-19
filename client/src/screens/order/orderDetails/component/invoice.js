import React from 'react';
import {
  Text,
  Alert,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Download} from '@utils/icons';
import {useTheme} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import {URL} from '@api/config';
import {invoiceDownload} from '@api/endpoints';
import {useValues} from '@utils/context';
import {getSystemVersion} from 'react-native-device-info';
import styles from '../styles';

const Invoice = ({orderNumber, setLoading}) => {
  const pdfUri = URL + invoiceDownload;

  const {colors} = useTheme();
  const {token} = useValues();

  const checkVersion = () => {
    const version = getSystemVersion();
    if (version <= 12) {
      requestStoragePermission();
    } else {
      handleDownloadPDF();
    }
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android' && Platform.Version <= 31) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to download files.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          handleDownloadPDF();
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const handleDownloadPDF = async () => {
    const filePath =
      RNFS.DownloadDirectoryPath + '/invoice-' + orderNumber + '.pdf';

    try {
      const response = await fetch(pdfUri, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({order_number: orderNumber}),
      });

      if (!response.ok) {
        throw new Error(`Fetch Failed, Status Code: ${response.status}`);
      }

      const responseBlob = await response.blob();
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const base64data = fileReader.result.split(',')[1];
        await RNFetchBlob.fs.writeFile(filePath, base64data, 'base64');
        Alert.alert('Download Successful', `File Saved To: ${filePath}`);
      };
      fileReader.readAsDataURL(responseBlob);
    } catch (error) {
      console.error('Fetch Error:', error);
      Alert.alert('Download Error', error.message);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.downloadClick}
      onPress={checkVersion}>
      <Download />
      <Text
        style={[
          styles.invoice,
          {
            color: colors.text,
          },
        ]}>
        Invoice
      </Text>
    </TouchableOpacity>
  );
};

export default Invoice;
