import { Image } from "react-native";

const BackgroundImage = () => {
  return (
    <Image
      source={require("../Images/pics/background.jpg")}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BackgroundImage;
