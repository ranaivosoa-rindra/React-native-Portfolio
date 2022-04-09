import { View, Text, Image, Button } from "react-native";
import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import BackgroundImage from "../../Components/BackgroundImage";
import HomeStyles from "./HomeStyles";

export default function Home({ navigation }) {
  return (
    <View style={HomeStyles.homeContainer}>
      <BackgroundImage />
      <View style={HomeStyles.aboutMeContainer}>
        <Image
          source={require("../../Images/pics/rindraPhoto.jpg")}
          style={HomeStyles.myPhoto}
        />
        <View style={HomeStyles.textView}>
          <Text style={HomeStyles.hiText}>Hi, I' m</Text>
          <Text style={HomeStyles.hiText}>RANAIVOSOA Gérald Rindra</Text>
          <Text style={[HomeStyles.hiText, HomeStyles.titleWork]}>
            Programmer / Mobile developer
          </Text>
        </View>
        <View style={HomeStyles.iconsViewContainer}>
          <View style={HomeStyles.iconView}>
            <Image
              source={require("../../Images/icons/twitter.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>
      </View>
      <View style={HomeStyles.body}></View>
      <View style={HomeStyles.footer}></View>
    </View>
  );
}
