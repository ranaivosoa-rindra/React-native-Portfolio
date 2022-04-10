import { Image } from "react-native";

const BackgroundImage = () => {
  return (
    <Image
      source={require("../Images/pics/background.webp")}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
      }}
    />
  );
};

export default BackgroundImage;
