import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useRef } from "react";
import SkillsStyles from "./SkillsStyles";
import BackgroundImage from "../../Components/BackgroundImage";
import StatusBarComp from "../../Components/StatusBarComp";
import FooterIcons from "../../Components/FooterIcons";
import { Icon } from "react-native-elements/dist/icons/Icon";
import * as Animatable from "react-native-animatable";

const SkillsScreen = ({ navigation }) => {
  const openPhoto = () => {
    Linking.openURL("https://i.ibb.co/ydJxgj3/skills-Chart.png");
  };

  const openGithub = () => {
    Linking.openURL("https://github.com/");
  };

  const openXD = () => {
    Linking.openURL("https://www.adobe.com/");
  };

  const openPs = () => {
    Linking.openURL("https://www.adobe.com/fr/products/photoshop.html");
  };

  function chartFunction() {
    return (
      <View style={SkillsStyles.chartView}>
        <TouchableOpacity
          onPress={() => {
            openPhoto();
          }}
        >
          <Image
            source={require("../../Images/pics/skillsChart.png")}
            style={SkillsStyles.chartImage}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const anim = useRef();

  function toolsFunction() {
    return (
      <View style={SkillsStyles.toolsView}>
        <Animatable.View style={SkillsStyles.iconTextView} ref={anim}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              if (true) {
                anim.current.flipInX(800);
              }
            }}
          >
            <Text style={SkillsStyles.toolText}>Tools</Text>
            <Icon
              name="gear"
              type="font-awesome"
              color="#000"
              size={23}
              style={{
                paddingLeft: 6,
              }}
            />
          </TouchableOpacity>
        </Animatable.View>
        <View style={SkillsStyles.toolsThreeIconsView}>
          {githubFunction()}
          {adobeXDFunction()}
          {adobePsFunction()}
        </View>
      </View>
    );

    function adobePsFunction() {
      return (
        <TouchableOpacity onPress={() => openPs()}>
          <View style={SkillsStyles.singleIconView}>
            <Image
              source={require("../../Images/icons/adobe-photoshop.png")}
              style={[SkillsStyles.iconImage, { width: 46, height: 46 }]}
            />
          </View>
        </TouchableOpacity>
      );
    }

    function adobeXDFunction() {
      return (
        <TouchableOpacity onPress={() => openXD()}>
          <View style={SkillsStyles.singleIconView}>
            <Image
              source={require("../../Images/icons/xd.png")}
              style={SkillsStyles.iconImage}
            />
          </View>
        </TouchableOpacity>
      );
    }

    function githubFunction() {
      return (
        <TouchableOpacity onPress={() => openGithub()}>
          <View style={SkillsStyles.singleIconView}>
            <Image
              source={require("../../Images/icons/github.png")}
              style={SkillsStyles.iconImage}
            />
          </View>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={SkillsStyles.container}>
      <BackgroundImage />
      <View style={SkillsStyles.body}>
        {chartFunction()}
        {toolsFunction()}
      </View>
      <FooterIcons navigation={navigation} nextScreen="ProjectsScreen" />
      <StatusBarComp hidden={true} />
    </View>
  );
};

export default SkillsScreen;
