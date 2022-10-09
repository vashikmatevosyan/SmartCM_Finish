import { StyleSheet } from 'react-native';
import size from "../../../../utils/Size";

const styles = StyleSheet.create({
  body:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    height:size.size180,
  },
  data: {
    fill: '#83B7AD',
    width: size.size18,
  },
  tickLabels: {
    fontFamily:'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: size.size16,
    lineHeight: size.size20,
    fill: '#616062',
  },
  axis:{
    position: 'absolute',
    bottom: size.size5,
  }
});

export default styles;
