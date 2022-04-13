import { StatusBar, StyleSheet } from "react-native";

const ProjectsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: "100%",
    height: "90%",
    // backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight * 0.7,
  },
  listView: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 100,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  singleProjectView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
  },
  logo: { width: 60, height: 60 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001740",
    paddingVertical: 6,
  },
  linkStyle: {
    fontSize: 9,
    color: "#001740",
    opacity: 0.5,
    paddingBottom: 6,
  },
  reactionsContainer: {
    flexDirection: "row",
  },
  reactionView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingTop: 5,
  },
  icon: { width: 25, height: 25 },
  reactionText: {
    fontSize: 15,
    paddingLeft: 7,
  },
});

export default ProjectsStyle;
