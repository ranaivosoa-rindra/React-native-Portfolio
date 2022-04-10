import { View, Text, Image } from "react-native";
import React from "react";
import CarrerStyles from "./CarrerStyles";
import { Icon } from "react-native-elements/dist/icons/Icon";

const ReviewList = ({ item }) => {
  function inlineBlocFunction() {
    return (
      <View style={CarrerStyles.inlineBloc}>
        <View style={CarrerStyles.imgView}>
          <Image source={item.image} style={CarrerStyles.picStyle} />
        </View>
        <View style={CarrerStyles.logoAndTitle}>
          <View style={CarrerStyles.logoView}>
            <Image source={item.lg} style={CarrerStyles.logo} />
          </View>
          <View>
            <Text style={CarrerStyles.placeName}>{item.place}</Text>
          </View>
        </View>
      </View>
    );
  }

  function firstFieldText() {
    return (
      <View style={CarrerStyles.textWithIcon}>
        <Icon
          name="graduation-cap"
          type="font-awesome"
          size={20}
          color="#000"
        />
        <Text style={CarrerStyles.comment}>{item.firstText}</Text>
      </View>
    );
  }

  function secondFieldText() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={CarrerStyles.textWithIcon}>
          <Icon
            name="graduation-cap"
            type="font-awesome"
            size={20}
            color="#000"
          />
          <Text style={CarrerStyles.comment}>{item.secondText}</Text>
        </View>
        <Text style={CarrerStyles.date}>{item.secondDate}</Text>
      </View>
    );
  }
  return (
    <View style={CarrerStyles.blocContainer}>
      {inlineBlocFunction()}
      <View style={CarrerStyles.textInfo}>
        {firstFieldText()}
        <Text style={CarrerStyles.date}>{item.firstDate}</Text>
        {item.secondText === null && item.secondDate == null
          ? null
          : secondFieldText()}
      </View>
    </View>
  );
};

export default ReviewList;
