import {StyleSheet} from "react-native";
import size from "../../utils/Size";

const style = StyleSheet.create({
  body: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container: {
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: size.size22,
    paddingRight: size.size22,
    marginTop: size.size24
  },
  notTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontStyle: 'normal',
    fontSize: size.size16,
    lineHeight: size.size24,
    letterSpacing: size.size025,
    color: '#1B3131',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: size.size30
  },
  pageBlock: {
    width: size.size320,
    height: size.size28,
    flexDirection: "row",
    backgroundColor: "#347474",
    marginTop: size.size30
  },
  pageButton: {
    width: '50%',
    height: '100%',
    backgroundColor: "#E7F2F2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pageButtonTwo: {
    width: '50%',
    height: '100%',
    backgroundColor: "#347474",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: 'Monserrat-SemiBold',
    fontSize: size.size14,
    lineHeight: size.size16,
    color: "#FCFCFC",
  },
  buttonTextTwo: {
    fontFamily: 'Monserrat-SemiBold',
    fontSize: size.size14,
    lineHeight: size.size16,
    color: "#101010",
  },
  allRead:{
    width: '100%',
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginTop: size.size15,
    marginBottom: size.size27,
    marginRight: size.size60
  },
  noteBlock:{
    width: '100%',
    flexDirection: "row",
    marginTop: size.size5,
  },
  noteLine:{
    width: '100%',
    flexDirection: "row",
  },
  img:{
    width: size.size32,
    height: size.size32,
    marginRight: size.size19
  },
  point:{
    width: size.size8,
    height: size.size8,
    backgroundColor: '#347474',
    borderRadius: size.size10,
    marginLeft: size.size30,
    marginTop: size.size15
  },
  svgBlock:{
    alignItems: "center"
  },
  svg:{
    marginTop: size.size37
  },
  svgText:{
    marginTop: size.size22,
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontSize: size.size14,
    lineHeight: size.size17,
    color: '#2C2C2C'
  },
  gestureBlockView: {
    flex: 1 ,
    backgroundColor: 'rgba(0 , 0 , 0 , 0.7)'
  },
  gestureBlock: {
    width: '100%',
    height: '100%',
    position: "absolute"
  },
  closeSvg: {
    marginLeft: 'auto',
    marginRight: size.size23
  },
  modalTitle:{
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontSize: size.size14,
    lineHeight: size.size16,
    letterSpacing: size.size025,
    color: '#616062'
  },
  modalName:{
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
    fontSize: size.size14,
    lineHeight: size.size16,
    letterSpacing: size.size025,
    color: '#347474',
    marginLeft: size.size12
  }
});
export default style;

