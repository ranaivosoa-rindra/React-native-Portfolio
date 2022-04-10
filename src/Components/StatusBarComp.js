import { StatusBar } from "react-native";
import React from "react";

const StatusBarComp = (props) => {
  return (
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      hidden={props.hidden}
    />
  );
};

export default StatusBarComp;
