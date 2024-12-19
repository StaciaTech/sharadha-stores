import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import SeeAllHeader from "../seeAllHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  homeOffersData,
  homeSectionOneData,
  homeSectionThreeData,
} from "@api/store/actions";
import styles from "./styles";
import Items from "./items";

export default lowestPrice = (props) => {
  const dispatch = useDispatch();

  const { offersParams, sectionOneParams, sectionThreeParams } = useSelector(
    (state) => state.home
  );

  const addResponse = (res) => {
    if (res != "Error") {
      checkValue();
      props.showAlert("add");
    }
  };

  const removeResponse = (res) => {
    if (res != "Error") {
      checkValue();
      props.showAlert("remove");
    }
  };

  const checkValue = () => {
    if (props.from == "offers") {
      dispatch(homeOffersData(offersParams));
    } else if (props.from == "section1") {
      dispatch(homeSectionOneData(sectionOneParams));
    } else if (props.from == "section3") {
      dispatch(homeSectionThreeData(sectionThreeParams));
    } else {
      props.getDetails();
    }
  };

  return (
    <View style={styles.mainView}>
      <SeeAllHeader
        onPress={props.onPress}
        title={props?.title}
        subtitle={props?.subtitle}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {props?.data.map((item, key) => (
          <Items
            item={item}
            addResponse={addResponse}
            removeResponse={removeResponse}
            showOffer={props.showOffer}
            key={key}
          />
        ))}
      </ScrollView>
    </View>
  );
};
