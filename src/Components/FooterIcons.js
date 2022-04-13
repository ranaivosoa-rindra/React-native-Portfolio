import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import GlobalStyles from "../Styles/GlobalStyles";
import { TouchableOpacity } from "react-native";

const FooterIcons = ({ navigation, nextScreen }) => {
  function nextScreenFunct() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
        <View style={GlobalStyles.iconView}>
          <Icon name="arrow-right" type="font-awesome" size={37} color="#000" />
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={GlobalStyles.footerIcons}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={GlobalStyles.iconView}>
          <Icon name="arrow-left" type="font-awesome" size={37} color="#000" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={GlobalStyles.iconView}>
          <Icon name="home" type="font-awesome" size={37} color="#000" />
        </View>
      </TouchableOpacity>
      {nextScreen != null ? nextScreenFunct() : null}
    </View>
  );
};

export default FooterIcons;
