import { View } from "react-native";
import React, { useState } from "react";
import BackgroundImage from "../../Components/BackgroundImage";
import StatusBarComp from "../../Components/StatusBarComp";
import information from "../../Api/data";
import CarrerStyles from "./CarrerStyles";
import ReviewList from "./ReviewList";
import { FlatList } from "react-native";
import FooterIcons from "../../Components/FooterIcons";

const CarrerScreen = ({ navigation }) => {
  const [items, setItems] = useState(information);

  return (
    <View style={CarrerStyles.container}>
      <BackgroundImage />
      <View style={CarrerStyles.body}>
        <FlatList
          data={items}
          renderItem={({ item }) => <ReviewList id={item.id} item={item} />}
        />
      </View>
      <FooterIcons navigation={navigation} nextScreen="SkillsScreen" />
      <StatusBarComp hidden={true} />
    </View>
  );
};

export default CarrerScreen;
