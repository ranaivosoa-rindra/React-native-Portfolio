import { StatusBar, StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  aboutMeContainer: {
    // backgroundColor: "red",
    width: "100%",
    minHeight: "50%",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 40,
  },
  textView: {
    marginTop: 10,
    alignItems: "center",
  },
  hiText: {
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
  titleWork: {
    fontSize: 15,
    color: "#09FBFD",
    paddingTop: 5,
  },
  myPhoto: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  body: {
    // backgroundColor: "white",
    width: "100%",
    minHeight: "40%",
  },
  iconsViewContainer: {
    // backgroundColor: "white",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconView: {
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    width: 20,
    height: 20,
  },
  footer: {
    // backgroundColor: "yellow",
    width: "100%",
    minHeight: "10%",
  },
});

export default HomeStyles;
