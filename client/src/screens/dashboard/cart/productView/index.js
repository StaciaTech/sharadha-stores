import React from "react";
import { FlatList, View } from "react-native";
import { Product } from "@commonComponents";
import { SwipeToDelete } from "@otherComponents";
import { windowHeight } from "@theme/appConstant";
import styles from "./styles";

export default productView = (props) => {
  const goToDetail = (id) => {
    props.navigation.navigate("ProductsDetails", { id });
  };
  return (
    <FlatList
      data={props?.data}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => {
        const val = item?.product || item;

        return (
          <SwipeToDelete
            colors={props.colors}
            visibleDeleteModal={() =>
              props.visibleDeleteModal(item.id, item.variationId)
            }
            content={
              <Product
                key={item?.quantity}
                from={"cart"}
                id={val?.id}
                image={val?.original_url || val?.original_url}
                name={val?.name}
                weight={val?.weight}
                price={val?.price}
                sale_price={item?.sub_total || item?.price}
                discount={val?.discount}
                quantity={item?.quantity}
                totalQuantity={val?.totalQuantity}
                islist={val?.is_wishlist}
                paddingRight={windowHeight(10)}
                onPress={() => goToDetail(item.id)}
                style={styles.itemStyle}
                show={false}
                showWishlist
                item={item}
                wishListPress={() => props.onPress(item.product_id)}
                increaseVal={() =>
                  props.increaseVal(
                    val.id,
                    "increase",
                    item?.quantity,
                    item.id,
                    item.variationId
                  )
                }
                decreaseVal={() =>
                  props.decreaseVal(
                    val.id,
                    "decrease",
                    item?.quantity,
                    item.id,
                    item.variationId
                  )
                }
              />
            }
          />
        );
      }}
    />
  );
};
