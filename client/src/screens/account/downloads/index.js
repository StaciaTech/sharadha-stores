import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {Header, AnimatedAlert} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import {useDispatch, useSelector} from 'react-redux';
import {
  downloadOrder,
  downloadOrderLicenseLink,
  downloadOrderLink,
} from '@api/store/actions';
import RNFetchBlob from 'rn-fetch-blob';
import {getSystemVersion} from 'react-native-device-info';
import RNFS from 'react-native-fs';
import {NoDataFound} from '@otherComponents';
import {useValues} from '@utils/context';
import images from '@utils/images';
import styles from './styles';
import DownloadOrderItem from './components/downloadOrderItem/index';

export function Downloads({}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {loading, downloadOrders} = useSelector(state => state.order);
  const [success, setSuccess] = useState();
  const [message, setMessage] = useState('');
  const messageRef = useRef();
  const {isDark} = useValues();

  useEffect(() => {
    getData();
    const version = getSystemVersion();
    version <= 12 && checkPermission();
  }, []);

  const getData = () => {
    dispatch(downloadOrder());
  };

  const downloadFiles = (id, name) => {
    const data = {
      id,
    };
    dispatch(downloadOrderLink(data))
      .unwrap()
      .then(res => {
        if (res != 'Error') {
          getVersion(res.download_link, name);
        } else {
          setSuccess(false);
          setMessage('Something Went Wrong Please Try Again Later.');
          messageRef.current.animate();
        }
      });
  };

  const downloadLicense = (id, name) => {
    const data = {
      id,
    };
    dispatch(downloadOrderLicenseLink(data))
      .unwrap()
      .then(res => {
        if (res != 'Error') {
          getVersion(res.download_link, name);
        } else {
          setSuccess(false);
          setMessage('Something Went Wrong Please Try Again Later.');
          messageRef.current.animate();
        }
      });
  };

  const checkPermission = async (url, name) => {
    if (Platform.OS === 'ios') {
      if (url) {
        downloadFile(url, name);
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          if (url) {
            downloadFile(url, name);
          }
        } else {
          console.log('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        console.log('++++' + err);
      }
    }
  };

  const getVersion = (url, name) => {
    const version = getSystemVersion();
    if (version > 12) {
      downloadPDF(url, name);
    } else {
      checkPermission(url, name);
    }
  };

  const checkNumber = (val, item) => {
    if (val === 'files') {
      downloadFiles(item.id, item.item_name);
    } else {
      downloadLicense(item.id, item.item_name + '-License');
    }
  };

  const downloadFile = async (url, name) => {
    const extension = name.includes('License') ? 'txt' : 'zip';
    try {
      const res = await RNFetchBlob.config({
        path: RNFetchBlob.fs.dirs.DownloadDir + '/' + name + '.' + extension,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: name,
          description: 'Downloading file.',
          mime: 'application/' + extension,
          mediaScannable: true,
          notification: true,
          path: RNFetchBlob.fs.dirs.DownloadDir + '/' + name + '.' + extension,
        },
      }).fetch('GET', url);
      messageRef.current.animate();
      setSuccess(true);
      setMessage(
        'File Downloaded Successfully!\nYou Can Find It In Your Device Storage.',
      );
    } catch (error) {
      console.error('Error downloading file:', error);
      messageRef.current.animate();
      setSuccess(false);
      setMessage('Failed To Download File. Please Try Again Later.');
    }
  };

  const downloadPDF = async (url, name) => {
    const extension = name.includes('License') ? 'txt' : 'zip';
    const filePath = RNFS.DownloadDirectoryPath + '/' + name + '.' + extension;
    try {
      const downloadResult = await RNFS.downloadFile({
        fromUrl: url,
        toFile: filePath,
      }).promise;

      if (downloadResult.statusCode === 200) {
        Alert.alert('Download Successful', `File Saved To: ${filePath}`);
      } else {
        Alert.alert(
          'Download Failed',
          `Status Code: ${downloadResult.statusCode}`,
        );
      }
    } catch (error) {
      Alert.alert('Download Error', error.message);
    }
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header showImage isText titleText={'Downloads'} />
      {loading ? (
        <></>
      ) : downloadOrders.length > 0 ? (
        <FlatList
          data={downloadOrders}
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <DownloadOrderItem item={item} checkNumber={checkNumber} />
          )}
        />
      ) : (
        <NoDataFound
          title={'No Downloads Found'}
          subTitle={'Purchase Some Digital Goods For Downloads'}
          img={isDark ? images.noDownloadsDark : images.noDownloads}
          btnText={'Refresh'}
          onPress={getData}
        />
      )}
      <AnimatedAlert text={message} ref={messageRef} success={success} />
    </SafeAreaView>
  );
}
