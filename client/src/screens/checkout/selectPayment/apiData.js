export const apiData = (
  products,
  params,
  val,
  wallet,
  point,
  coupon,
  defaultAddress,
  code,
  token,
) => {
  let data = {
    products: products,
    code: code,
    delivery_description: params.deliveryDesc,
    delivery_interval: params.deliveryInterval,
    payment_method: val,
  };

  if (token) {
    data = {
      ...data,
      shipping_address_id: defaultAddress?.id,
      billing_address_id: defaultAddress?.id,
      points_amount: point,
      wallet_balance: wallet,
      coupon: coupon,
      code: code,
    };
  } else {
    data = {
      ...data,
      shipping_address: {
        title: params?.data?.title || defaultAddress?.title,
        street: params?.data?.street || defaultAddress?.street,
        city: params?.data?.city || defaultAddress?.city,
        phone: params?.data?.phone || defaultAddress?.phone,
        pincode: params?.data?.pincode || defaultAddress?.pincode,
        country_code: params?.data?.countryCode || defaultAddress?.country_code,
        country_id: params?.data?.countryValue || defaultAddress?.country_id,
        state_id: params?.data?.stateValue || defaultAddress?.state_id,
      },
      billing_address: {
        title: params?.data?.title || defaultAddress?.title,
        street: params?.data?.street || defaultAddress?.street,
        city: params?.data?.city || defaultAddress?.city,
        phone: params?.data?.phone || defaultAddress?.phone,
        pincode: params?.data?.pincode || defaultAddress?.pincode,
        country_code:
          params?.data?.countryCode || defaultAddress?.country_code || '1',
        country_id: params?.data?.countryValue || defaultAddress?.country_id,
        state_id: params?.data?.stateValue || defaultAddress?.state_id,
      },
      email: params?.data?.email || '',
      name: params?.data?.name || '',
      password: params?.data?.password || '',
      phone: params?.data?.userPhone || '',
      country_code: params?.data?.userCountryCode || '1',
      create_account: false,
    };
  }
  return data;
};
