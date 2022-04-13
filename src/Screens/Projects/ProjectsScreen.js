import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import ProjectsStyle from "./ProjectsStyles";
import BackgroundImage from "../../Components/BackgroundImage";
import FooterIcons from "../../Components/FooterIcons";
import StatusBarComp from "../../Components/StatusBarComp";
import projectsInformation from "../../Api/projectsDatas";
import { FlatList } from "react-native";
import ProjectsList from "./ProjectsList";

const ProjectsScreen = ({ navigation }) => {
  const [items, setItems] = useState(projectsInformation);

  // console.log(items);

  return (
    <View style={ProjectsStyle.container}>
      <BackgroundImage />
      <View style={ProjectsStyle.body}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ProjectsList index={item.id} item={item} />
          )}
        />
      </View>
      <FooterIcons navigation={navigation} />
      <StatusBarComp hidden={true} />
    </View>
  );
};

export default ProjectsScreen;
