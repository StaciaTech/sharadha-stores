import React, { useState } from "react";
import { Product } from "@commonComponents";
import { useValues } from "@utils/context";
import { useNavigation } from "@react-navigation/native";

export default items = ({ item, increaseValue, decreaseValue, type }) => {
  const { viewRTLStyle, imageRTLStyle } = useValues();
  const { navigate } = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const gotoDetails = (item) => {
    navigate("ProductsDetails", { item });
  };

  return (
    <Product
      from={""}
      id={item?.id}
      image={item?.original_url}
      name={item?.name}
      weight={item?.weight}
      price={item?.price}
      sale_price={item?.sale_price}
      discount={item?.discount?.toString()}
      totalQuantity={item.quantity}
      onPress={() => gotoDetails(item)}
      viewAlign={viewRTLStyle}
      imageAlign={imageRTLStyle}
      quantity={quantity}
      show={true}
      sale={item?.is_sale_enable}
      increaseVal={(count) => {
        setQuantity(count);
        increaseValue(item, count, "increase");
      }}
      decreaseVal={(count) => {
        setQuantity(count);
        decreaseValue(item, count, "decrease");
      }}
    />
  );
};
