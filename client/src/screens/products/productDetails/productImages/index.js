import React, {useState, useRef} from 'react';
import {View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import {windowHeight} from '@theme/appConstant';
import FastImage from 'react-native-fast-image';
import {NoImage} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import VideoPlayer from 'react-native-video-controls';
import {ManageWishlist} from '@otherComponents';
import {Video} from '@utils/icons';
import styles from './styles';

export default productImages = ({
  productDetail,
  isWishList,
  manageWishlist,
}) => {
  const {colors} = useTheme();
  const [scrollIndex, setScrollIndex] = useState(0);
  const carouselRef = useRef();
  const {isDark} = useValues();
  const videoRef = useRef();
  const addDataToWishlist = async res => {
    if (res != 'Error') {
      const message = 'Product Added To Wishlist';
      manageWishlist(true, message);
    }
  };

  const removeDataFromWishlist = async res => {
    if (res != 'Error') {
      const message = 'Product Removed From Wishlist';
      manageWishlist(false, message);
    }
  };

  const renderItem = ({item}) => {
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
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{uri: item.original_url}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  };

  const goToNext = index => {
    carouselRef.current.snapToItem(index);
  };

  console.log("-=-=-=-=-=-=-=--=-=-==-=", productDetail);

  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
        },
        styles.verticalSpace,
      ]}>
      <View
        style={[
          {
            backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
          },
          styles.subContainer,
        ]}>
        {productDetail?.url?.length > 0 ? (
          <View>
            <Carousel
              loop
              ref={carouselRef}
              data={productDetail?.url}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={Dimensions.get('screen').width}
              onSnapToItem={index => setScrollIndex(index)}
            />
            {productDetail?.product_galleries && (
              <Pagination
                dotContainerStyle={styles.paginationSpace}
                dotsLength={productDetail?.product_galleries.length}
                activeDotIndex={scrollIndex}
                carouselRef={carouselRef}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.inactiveDot}
                inactiveDotOpacity={1}
              />
            )}
          </View>
        ) : (
          <NoImage width={windowWidth(100)} height={windowHeight(100)} />
        )}
        <ManageWishlist
          style={styles.wishlist}
          item={productDetail}
          isWishlist={isWishList}
          addResponse={addDataToWishlist}
          removeResponse={removeDataFromWishlist}
        />
      </View>
      {productDetail?.url?.length > 0 && (
        <FlatList
          nestedScrollEnabled
          data={productDetail?.url}
          style={styles.listView}
          ItemSeparatorComponent={() => <View style={styles.verticalHeight} />}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => goToNext(index)}
              style={[
                {
                  borderColor:
                    index == scrollIndex ? appColors.border : appColors.line,
                  backgroundColor: colors.background,
                },
                styles.imageBtn,
              ]}>
              <FastImage
                style={styles.image2}
                source={
                  item
                }
              />
              {item.mime_type === 'video/mp4' && (
                <View style={styles.videoLayer}>
                  <Video />
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
