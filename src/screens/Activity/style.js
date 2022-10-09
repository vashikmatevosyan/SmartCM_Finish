import { StyleSheet} from 'react-native';
import size from '../../utils/Size';

const style=StyleSheet.create({
  activities:{
    textAlign:'center',
    fontSize:size.size16,
    color:'#1B3131',
    fontFamily:'Montserrat-Bold',
  },
  body:{
    padding:size.size15,
    backgroundColor:'white',
    height:'100%',
    flex:1,
  },
  week: {
    textAlign: 'left',
    marginVertical:size.size10,
  }
})

export default style
