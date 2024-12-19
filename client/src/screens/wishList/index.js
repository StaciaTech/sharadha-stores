import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '@commonComponents';
import {NoDataFound} from '@otherComponents';
import {useTheme} from '@react-navigation/native';
import ProductView from './productView';
import {GlobalStyle} from '@style';
import {useDispatch, useSelector} from 'react-redux';
import {removeWishlistData, addToCart} from '@api/store/actions';
import images from '@utils/images';
import {useValues} from '@utils/context';
import {getValue, setValue} from '@utils/localStorage';
import {manageDetails} from '@utils/helper';
import {updateCartValue} from '@api/store/reducers/cartReducer';
import {updateWishlist} from '@api/store/reducers/wishlistReducer';
import {removeFromWishlist} from '@utils/helper';
import {
  homeOffersData,
  homeSectionOneData,
  homeSectionThreeData,
} from '@api/store/actions';

export function Wishlist({navigation}) {
  const {colors} = useTheme();
  const {wishlist, loading} = useSelector(state => state.wishlist);
  const {offersParams, sectionOneParams, sectionThreeParams} = useSelector(
    state => state.home,
  );
  const dispatch = useDispatch();
  const {isDark} = useValues();

  const addDataToCart = async item => {
    const cartData = await getValue('cartData');
    var list = JSON.parse(cartData);
    removeWishlist(item);
    if (list) {
      const details = manageDetails({}, item);
      list = [...list, details];
      storeCart(list);
    } else {
      const data = manageDetails({}, item);
      storeCart([data]);
    }
    addCart(item.id);
  };

  const deleteWishlist = val => {
    var data = '/' + val;
    dispatch(removeWishlistData(data));
    dispatch(homeOffersData(offersParams));
    dispatch(homeSectionOneData(sectionOneParams));
    dispatch(homeSectionThreeData(sectionThreeParams));
  };

  const addCart = async id => {
    const data = {
      product_id: id,
      variation_id: '',
      quantity: 1,
    };
    await dispatch(addToCart(data));
  };

  const removeWishlist = async item => {
    const updatedItems = await removeFromWishlist(item);
    deleteWishlist(item.id);
    setValue('wishlistData', JSON.stringify(updatedItems));
    dispatch(updateWishlist(updatedItems));
  };

  const storeCart = data => {
    dispatch(updateCartValue(data));
    setValue('cartData', JSON.stringify(data));
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header isText image titleText={'My Wishlist'} />
      {loading || wishlist?.length > 0 ? (
        <ProductView
          showLoader={loading}
          removeFromWishlist={removeWishlist}
          navigation={navigation}
          colors={colors}
          data={wishlist}
          onPress={addDataToCart}
        />
      ) : (
        <NoDataFound
          title={'Your Wishlist Is Empty'}
          img={isDark ? images.emptyWishlistDark : images.emptyWishlist}
          subTitle={'Explore More And Shortlist Some Items.'}
          btnText={'Refresh'}
        />
      )}
    </SafeAreaView>
  );
}
