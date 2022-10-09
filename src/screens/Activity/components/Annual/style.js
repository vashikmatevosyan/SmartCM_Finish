import size from "../../../../utils/Size";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: size.size10,
    marginBottom: size.size25,
    shadowColor: "gray",
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  axis: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: size.size16,
    lineHeight: size.size20,
    fill: "#616062",
  },
  time: {
    fontSize: size.size16,
    color: "#151522",
    fontFamily: "Montserrat-Regular",
  },
  statisticBlock: {
    width: "100%",
    marginVertical: size.size3,
    paddingHorizontal:size.size15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: size.size15,
    height: size.size15,
    marginRight:size.size10,
    borderRadius: 50,
  },
  title: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export default styles;
