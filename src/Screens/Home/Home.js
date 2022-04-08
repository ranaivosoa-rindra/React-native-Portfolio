import { View, Text, Image } from "react-native";
import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import BackgroundImage from "../../Components/BackgroundImage";

export default function Home() {
  return (
    <View style={GlobalStyles.container}>
      <BackgroundImage />
    </View>
  );
}
