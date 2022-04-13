import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import React, { useRef } from "react";
import ProjectsStyle from "./ProjectsStyles";
import { Image } from "react-native";
import * as Animatable from "react-native-animatable";

const Project = ({ item }) => {
  const starAnim = useRef();
  const shareAnim = useRef();

  function githubLink() {
    const linkingPath = () => {
      Linking.openURL(item.link);
    };

    return (
      <TouchableOpacity onPress={() => linkingPath()}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={item.logo} style={ProjectsStyle.logo} />
          <Text style={ProjectsStyle.title}>{item.name}</Text>
          <Text style={ProjectsStyle.linkStyle}>{item.link}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const starFunction = () => {
    return (
      <Animatable.View ref={starAnim}>
        <TouchableOpacity
          style={ProjectsStyle.reactionView}
          onPress={() => {
            if (true) {
              starAnim.current.bounceIn(800);
              (() => {
                Alert.alert(
                  "Success",
                  "Thanks for giving a star for my project"
                );
              })();
            }
          }}
        >
          <Image
            source={require("../../Images/icons/star.png")}
            style={ProjectsStyle.icon}
          />
          <Text style={ProjectsStyle.reactionText}>Give a Star</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const shareFunction = () => {
    return (
      <Animatable.View ref={shareAnim}>
        <TouchableOpacity
          style={ProjectsStyle.reactionView}
          onPress={() => {
            if (true) {
              shareAnim.current.pulse(800);
              (function () {
                Alert.alert("Success", "Thanks for sharing my project");
              })();
            }
          }}
        >
          <Image
            source={require("../../Images/icons/share.png")}
            style={ProjectsStyle.icon}
          />
          <Text style={ProjectsStyle.reactionText}>Share</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View style={ProjectsStyle.singleProjectView}>
      {githubLink()}
      <View style={ProjectsStyle.reactionsContainer}>
        {starFunction()}
        {shareFunction()}
      </View>
    </View>
  );
};

export default Project;
