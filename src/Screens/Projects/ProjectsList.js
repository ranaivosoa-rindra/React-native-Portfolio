import { View, Text } from "react-native";
import React from "react";
import Project from "./Project";
import ProjectsStyle from "./ProjectsStyles";

const ProjectsList = ({ item }) => {
  return (
    <View style={ProjectsStyle.listView}>
      <Project item={item} />
    </View>
  );
};

export default ProjectsList;
