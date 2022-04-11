import { StyleSheet } from "react-native";

const SkillsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: "100%",
    height: "80%",
    // backgroundColor: "#fff",
  },
  chartView: {
    height: "50%",
    // backgroundColor: "red",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  chartImage: {
    width: 365,
    height: 222,
    borderRadius: 10,
    resizeMode: "contain",
  },
  toolsView: {
    height: "50%",
    // backgroundColor: "yellow",
    position: "relative",
  },
  iconTextView: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#78D4E2",
    alignItems: "center",
    paddingVertical: 7,
    marginHorizontal: 135,
    borderRadius: 10,
  },
  toolText: {
    fontSize: 23,
    fontWeight: "bold",
    alignSelf: "center",
  },
  toolsThreeIconsView: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 50,
    height: "100%",
    // backgroundColor: "red",
    marginTop: 50,
    alignItems: "flex-start",
  },
  singleIconView: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});

export default SkillsStyles;
