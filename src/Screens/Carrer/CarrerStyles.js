import { StyleSheet } from "react-native";

const CarrerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blocContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  inlineBloc: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
    width: "100%",
    justifyContent: "center",
    // marginHorizontal: 20,
    margin: 10,
  },
  imgView: {
    width: "37%",
  },
  picStyle: {
    width: 103,
    height: 77,
  },
  logoAndTitle: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
  },
  logoView: { marginRight: 4 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  placeName: {
    color: "#fff",
    fontSize: 18,
    // width: "60%",
    letterSpacing: 1,
    paddingLeft: 5,
  },
  textInfo: {
    backgroundColor: "#335288",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    marginVertical: 8,
  },
  textWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 10,
  },
  comment: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1FFDFD",
    paddingLeft: 6,
    letterSpacing: 0.5,
  },
  date: {
    fontSize: 12,
    color: "#ACA6A6",
    letterSpacing: 0.5,
    paddingBottom: 3,
  },
  body: {
    width: "100%",
    height: "100%",
    // marginVertical: 30,
  },
});

export default CarrerStyles;
