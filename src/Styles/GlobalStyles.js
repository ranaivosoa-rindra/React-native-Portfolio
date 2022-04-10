import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#caaaaa",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcons: {
    width: "100%",
    // height: "20%",
    // backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: 30,
  },
  iconView: {
    backgroundColor: "#00D4FF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default GlobalStyles;
