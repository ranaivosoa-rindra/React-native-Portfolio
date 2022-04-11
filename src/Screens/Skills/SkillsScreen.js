import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import SkillsStyles from "./SkillsStyles";
import BackgroundImage from "../../Components/BackgroundImage";
import StatusBarComp from "../../Components/StatusBarComp";
import FooterIcons from "../../Components/FooterIcons";
import { Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const SkillsScreen = ({ navigation }) => {
  const [isLandscape, setIsLandscape] = useState(false);

  const changeLandscape = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    setIsLandscape(true);
  };

  const changePortrait = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    setIsLandscape(false);
  };

  if (isLandscape) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => changePortrait()}>
          {/* <Image
            source={require("../../Images/pics/skillsChart.png")}
            style={{
              width: Dimensions.get("window").height / 1.75,
              height: Dimensions.get("window").width / 1.75,
              borderRadius: 10,
              resizeMode: "contain",
            }}
          /> */}
          <Image
            source={require("../../Images/pics/skillsChart.png")}
            style={{
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height,
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={SkillsStyles.container}>
      {/* <Text>SkillsScreen</Text> */}
      <BackgroundImage />
      <View style={SkillsStyles.body}>
        <View style={SkillsStyles.chartView}>
          <TouchableOpacity
            onPress={() => {
              changeLandscape();
            }}
          >
            <Image
              source={require("../../Images/pics/skillsChart.png")}
              style={{
                width: 350,
                height: 207,
                borderRadius: 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={SkillsStyles.toolsView}></View>
      </View>
      <FooterIcons />
      <StatusBarComp hidden={true} />
    </View>
  );
};

export default SkillsScreen;
