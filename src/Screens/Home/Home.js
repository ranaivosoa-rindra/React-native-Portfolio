import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import BackgroundImage from "../../Components/BackgroundImage";
import HomeStyles from "./HomeStyles";
import StatusBarComp from "../../Components/StatusBarComp";

export default function Home({ navigation }) {
  // Constants
  const rindraPhoto = "../../Images/pics/rindraPhoto.jpg";
  const twitterIcon = "../../Images/icons/twitter.png";
  const facebookIcon = "../../Images/icons/facebook.png";
  const linkedinIcon = "../../Images/icons/linkedin.png";
  const graduatingStudentLogo = "../../Images/logos/graduating-student.png";
  const programmerLogo = "../../Images/logos/programmer.png";
  const projectsLogo = "../../Images/logos/project.png";
  const likeIcon = "../../Images/icons/like.png";
  const heartIcon = "../../Images/icons/heart.png";
  const twitterIconStyle = {
    width: 18,
    height: 18,
  };
  const facebookIconStyle = {
    width: 22,
    height: 22,
  };
  const LinkedinIconStyle = {
    width: 15,
    height: 15,
  };

  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/rindra.ranaivosoa");
  };

  const openLinkedin = () => {
    Linking.openURL(
      "https://www.linkedin.com/in/g%C3%A9rald-rindra-ranaivosoa-454549202/"
    );
  };

  const openTwitter = () => {
    Linking.openURL("https://twitter.com/RNRindra");
  };

  function Icons() {
    return (
      <View style={HomeStyles.iconsViewContainer}>
        <TouchableOpacity onPress={openTwitter}>
          <View style={HomeStyles.iconView}>
            <Image source={require(twitterIcon)} style={twitterIconStyle} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openFacebook}>
          <View style={HomeStyles.iconView}>
            <Image source={require(facebookIcon)} style={facebookIconStyle} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLinkedin}>
          <View style={[HomeStyles.iconView, { paddingBottom: 3 }]}>
            <Image source={require(linkedinIcon)} style={LinkedinIconStyle} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function titles() {
    return (
      <View style={HomeStyles.body}>
        <View style={HomeStyles.bloc}>
          <TouchableOpacity onPress={() => navigation.navigate("CarrerScreen")}>
            <Image
              source={require(graduatingStudentLogo)}
              style={HomeStyles.logos}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CarrerScreen")}>
            <Text style={HomeStyles.titles}>Carrer</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.bloc}>
          <TouchableOpacity onPress={() => navigation.navigate("SkillsScreen")}>
            <Image source={require(programmerLogo)} style={HomeStyles.logos} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SkillsScreen")}>
            <Text style={HomeStyles.titles}>Skills</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.bloc}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProjectsScreen")}
          >
            <Image source={require(projectsLogo)} style={HomeStyles.logos} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProjectsScreen")}
          >
            <Text style={HomeStyles.titles}>Projects</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function aboutMeTexts() {
    return (
      <View style={HomeStyles.textView}>
        <Text style={HomeStyles.hiText}>Hi, I' m</Text>
        <Text style={HomeStyles.hiText}>RANAIVOSOA Gérald Rindra</Text>
        <Text style={[HomeStyles.hiText, HomeStyles.titleWork]}>
          Programmer / Mobile developer
        </Text>
      </View>
    );
  }

  return (
    <View style={HomeStyles.homeContainer}>
      <BackgroundImage />
      <View style={HomeStyles.aboutMeContainer}>
        <Image source={require(rindraPhoto)} style={HomeStyles.myPhoto} />
        {aboutMeTexts()}
        {Icons()}
      </View>
      {titles()}
      <View style={HomeStyles.footer}>
        <TouchableOpacity
          onPress={() => console.log("You liked my portfolio.\nThank you :)")}
        >
          <Image
            source={require(likeIcon)}
            style={[HomeStyles.footerIcons, { marginRight: 14 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            console.log(
              "Ohh, a heart for my portfolio.\nThank you very much ^_^"
            )
          }
        >
          <Image source={require(heartIcon)} style={HomeStyles.footerIcons} />
        </TouchableOpacity>
      </View>
      <StatusBarComp hidden={false} />
    </View>
  );
}
