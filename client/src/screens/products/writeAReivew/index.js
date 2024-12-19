import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import appColors from '@theme/appColors';
import {AnimatedAlert, Button, Header} from '@commonComponents';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Rating, EmptyRating} from '@utils/icons';
import {editReviewData, productDetails, reviewData} from '@api/store/actions';
import Data from '@utils/json';
import ReviewProduct from './component/index';
import styles from './styles';

export function WriteAReivew({navigation}) {
  const {isDark} = useValues();
  const {colors} = useTheme();
  const {productDetail, loading} = useSelector(state => state.product);
  const [rating, setRating] = useState();
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState();
  const dispatch = useDispatch();
  const messageRef = useRef();

  useEffect(() => {
    changeReview();
  }, []);

  const changeReview = () => {
    if (productDetail?.user_review) {
      setReview(productDetail?.user_review?.description);
      setRating(productDetail?.user_review?.rating);
    }
  };

  const checkVal = () => {
    if (productDetail?.user_review) {
      editReview();
    } else {
      addReview();
    }
  };

  const addReview = () => {
    const data = {
      product_id: productDetail.id,
      rating: rating,
      description: review,
    };
    dispatch(reviewData(data))
      .unwrap()
      .then(res => {
        messageRef.current.animate();
        showResponse(res, 'Added');
      });
  };

  const editReview = () => {
    const data = {
      rating: rating,
      description: review,
      review_image_id: null,
    };
    var val = {
      id: '/' + productDetail?.user_review?.id,
      data,
    };
    dispatch(editReviewData(val))
      .unwrap()
      .then(res => {
        messageRef.current.animate();
        showResponse(res, 'Edited');
      });
  };

  const showResponse = (res, val) => {
    if (res != 'Error') {
      setMessage('Review ' + val + ' Successfully');
      dispatch(productDetails(productDetail.id));
      setSuccess(true);
      setTimeout(() => {
        navigation.goBack();
      }, 3000);
    } else {
      setSuccess(false);
      setMessage('Something Went Wrong Please Try Again Later.');
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark ? appColors.darkDrawer : colors.background,
      }}>
      <Header titleText={'Review Product'} isText />
      <View style={styles.detailView}>
        <ReviewProduct productDetail={productDetail} />
        <View style={styles.stars}>
          {Data.reviewStar.map((_, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => setRating(key + 1)}
              activeOpacity={0.8}>
              {key + 1 <= rating ? (
                <Rating height={windowHeight(30)} width={windowWidth(30)} />
              ) : (
                <EmptyRating
                  height={windowHeight(30)}
                  width={windowWidth(30)}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={[
            styles.product,
            {
              color: colors.text,
              marginTop: windowHeight(16),
            },
          ]}>
          {productDetail?.user_review ? 'Edit' : 'Write'} your review!
        </Text>
        <TextInput
          value={review}
          onChangeText={value => setReview(value)}
          multiline
          style={[
            styles.input,
            {
              color: colors.text,
            },
          ]}
        />
        <Button
          loading={loading}
          text={'Submit'}
          style={styles.button}
          color={appColors.white}
          onPress={checkVal}
        />
      </View>
      <AnimatedAlert
        text={message}
        ref={messageRef}
        success={success}
        val={50}
      />
    </SafeAreaView>
  );
}
