import React, {useRef} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import VideoPlayer from 'react-native-video-controls';
import styles from '../../styles';

const RenderItem = ({item}) => {
  const videoRef = useRef();

  return item.mime_type === 'video/mp4' ? (
    <View style={styles.container}>
      <VideoPlayer
        source={{
          uri: item.original_url,
        }}
        ref={videoRef}
        posterResizeMode="stretch"
        controls={false}
        disableVolume
        disableBack
        style={styles.border}
      />
    </View>
  ) : (
    <FastImage
      style={styles.image}
      resizeMode="stretch"
      source={{uri: item.original_url}}
    />
  );
};

export default RenderItem;
