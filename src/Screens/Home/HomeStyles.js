import { StatusBar, StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  aboutMeContainer: {
    // backgroundColor: "red",
    width: "100%",
    minHeight: "43%",
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
  iconsViewContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    paddingHorizontal: 90,
  },
  iconView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    width: 34,
    height: 34,
  },
  body: {
    // backgroundColor: "white",
    width: "100%",
    minHeight: "49%",
  },
  bloc: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
  },
  titles: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 21,
    paddingHorizontal: 18,
    letterSpacing: 1,
  },
  logos: {
    width: 57,
    height: 57,
  },
  footer: {
    width: "100%",
    minHeight: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  footerIcons: {
    width: 40,
    height: 40,
  },
});

export default HomeStyles;
