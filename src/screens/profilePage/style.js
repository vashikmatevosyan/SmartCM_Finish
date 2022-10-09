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
  },
  profTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontStyle: 'normal',
    fontSize: size.size16,
    lineHeight: size.size24,
    letterSpacing: size.size025,
    color: '#1B3131',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  projectButton: {
    width: size.size313,
    flexDirection: 'row',
    paddingLeft: size.size17,
    paddingRight: size.size13,
    paddingTop: size.size12,
    paddingBottom: size.size12,
    borderBottomWidth: size.size05,
    borderColor: '#E3E3E3',
    borderStyle: 'solid',
    marginTop: size.size5
  },
  projectButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontSize: size.size12,
    lineHeight: size.size15,
    color: '#000000',
  },
  victory: {
    axis: {stroke: '#334E68'},
    grid: {stroke: '#334E68'},
    tickLabels: {
      fontFamily: 'Montserrat-Regular',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: size.size16,
      lineHeight: size.size20,
      fill: '#B8C0CC',
    },
  },
  victoryHome:{
    width:size.size10,
    height:size.size250,
  },
  victoryBlock:{
    height: size.size380,
    width:size.size380,
  },
  svgStyle:{
    marginLeft: size.size20
  },
  titleBlock:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.size30,
    marginBottom: size.size20
  }
})
export default style;

