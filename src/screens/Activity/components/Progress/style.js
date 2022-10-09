import { StyleSheet } from "react-native";
import size from "../../../../utils/Size";

const styles = StyleSheet.create({
  body: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    height: size.size280,
    backgroundColor: "white",
    marginTop: size.size20,
    borderRadius: size.size10,
    marginBottom: size.size20,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  axis: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: size.size11,
    lineHeight: size.size13,
    fill: "#616062",
  },
});

export default styles;
