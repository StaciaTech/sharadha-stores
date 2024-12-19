import React from 'react';
import {Text, TouchableOpacity, View, NativeModules} from 'react-native';
import Loader from './loader';
import {useValues} from '@utils/context';
import {useNavigation, useTheme} from '@react-navigation/native';
import {EmptyRating, Rating, Review} from '@utils/icons';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import Data from '@utils/json';
import {useSelector} from 'react-redux';
import styles from './styles';

export default reviewView = props => {
  const reviewStar = Data.reviewStar;
  const {viewRTLStyle, viewSelfRTLStyle, isRTL, isDark} = useValues();
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const {UIManager} = NativeModules;
  const {productDetail} = useSelector(state => state.product);

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const getWidth = rate => {
    return ((rate / productDetail?.reviews_count) * 100).toFixed(0) + '%';
  };

  const goToReview = () => {
    navigate('WriteAReivew');
  };

  const goToList = () => {};

  return props.showLoader ? (
    <Loader
      selfAlign={viewSelfRTLStyle}
      viewAlign={viewRTLStyle}
      isRTL={isRTL}
      isDark={isDark}
    />
  ) : (
    <View>
      {productDetail?.reviews?.length > 0 ? (
        <View style={[styles.container, {backgroundColor: appColors.gray}]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToList}
            style={[
              {
                flexDirection: viewRTLStyle,
              },
              styles.align,
            ]}>
            <Text style={styles.seeAll}>
              {productDetail?.reviews_count} Reviews
            </Text>
            <Review />
          </TouchableOpacity>
          <View style={[{flexDirection: viewRTLStyle}, styles.spaceTop]}>
            <View
              style={[
                {borderRightColor: colors.border},
                styles.ratingContainer,
              ]}>
              <View
                style={[
                  {
                    backgroundColor: colors.primary,
                  },
                  styles.ratingView,
                ]}>
                <Text style={styles.ratingText}>
                  {productDetail?.rating_count}/5
                </Text>
              </View>
              <View
                style={[
                  {
                    flexDirection: viewRTLStyle,
                  },
                  styles.mt_2,
                ]}>
                {reviewStar.map((_, key) =>
                  key + 1 <= productDetail?.rating_count ? (
                    <Rating width={windowWidth(16)} height={windowHeight(16)} />
                  ) : (
                    <EmptyRating
                      width={windowWidth(16)}
                      height={windowHeight(16)}
                    />
                  ),
                )}
              </View>
            </View>
            <View style={styles.jc_s}>
              {productDetail?.review_ratings
                .map((item, key) => (
                  <View
                    style={[
                      {
                        flexDirection: viewRTLStyle,
                      },
                      styles.listView,
                    ]}>
                    <View style={styles.fd}>
                      <Text style={styles.rate}>{key + 1}</Text>
                      <Rating
                        width={windowWidth(15)}
                        height={windowHeight(15)}
                      />
                    </View>
                    <View style={styles.reviewContainer}>
                      <View style={styles.reviewSubContainer}>
                        <View
                          style={[
                            styles.itemContainer,
                            {
                              width: getWidth(item),
                            },
                          ]}
                        />
                      </View>
                      <Text style={styles.itemView}>{item}</Text>
                    </View>
                  </View>
                ))
                .reverse()}
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: appColors.gray,
          }}>
          {productDetail?.can_review ? (
            <View style={styles.ai_center}>
              <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
                <View style={styles.reviewTitle}>
                  <Text style={styles.reviewProduct}>Review This Product</Text>
                  <Text style={styles.other}>
                    Let Other Customers Know What You Think.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.post}
                activeOpacity={0.8}
                onPress={goToReview}>
                <Text style={styles.postText}>Write A Review</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={[
                styles.ai_center,
                {
                  backgroundColor: colors.background,
                },
              ]}>
              <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
                <View style={styles.reviewTitle}>
                  <Text style={[styles.other, {color: colors.text}]}>
                    There Are Currently No Ratings Or Reviews For This Product
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}
      {productDetail?.can_review && productDetail?.reviews?.length > 0 && (
        <TouchableOpacity activeOpacity={0.8} onPress={goToReview}>
          <Text
            style={[
              styles.writeReview,
              {
                color: colors.text,
              },
            ]}>
            {productDetail?.user_review ? 'Edit Review' : '+Write A Review'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
