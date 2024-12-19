import React from 'react';
import {View} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {Loader} from '@commonComponents';
import styles from './styles';

const ratings = [{}, {}];

export default reviewViewLoader = props => {
  return ratings.map((_, key) => (
    <View
      key={key}
      style={[
        styles.reviewView,
        {
          backgroundColor: props.isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}>
      <View style={[styles.ratingsView, {flexDirection: props.viewAlign}]}>
        <Loader view={<View style={styles.ratingImgLoader} />} />
        <View
          style={
            props.isRTL ? styles.reviewerLoader : styles.reviewerLoaderRight
          }>
          <Loader view={<View style={styles.reviewerNameLoader} />} />
          <View style={[styles.ratingStarLoader, {alignSelf: props.selfAlign}]}>
            <Loader view={<View style={styles.starLoader} />} />
            <Loader view={<View style={styles.starsLoader} />} />
            <Loader view={<View style={styles.starsLoader} />} />
            <Loader view={<View style={styles.starsLoader} />} />
            <Loader view={<View style={styles.starsLoader} />} />
          </View>
        </View>
      </View>
      <Loader
        view={
          <View
            style={[
              styles.reviewLoader,
              {width: windowWidth(300), alignSelf: props.selfAlign},
            ]}
          />
        }
      />
      <Loader
        view={
          <View
            style={[
              styles.reviewLoader,
              {width: windowWidth(180), alignSelf: props.selfAlign},
            ]}
          />
        }
      />
    </View>
  ));
};
