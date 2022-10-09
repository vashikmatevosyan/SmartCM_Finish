import React ,{useRef , useEffect , useState} from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import notes from "../../services/Notifications";
import size from "../../utils/Size";
import moment from "moment";
import NoteSvg from "../../assets/svges/NoteSvg";
import Sms from "./Sms";
import { navigationRef } from "../../navigation/TabNavigation";



function Index(props) {
  const scrollRef = useRef();
  const [active, setActive] = useState('Unread')
  const [read , setRead] = useState(false)
  const [flag , setFLag] = useState(false)
  const [data , setData] = useState({})
  const NoteItem = ({item}) => (
    <TouchableOpacity onPress={() => {
      setFLag(!flag);
      setData(item)
    }} style={style.noteBlock}>
      <Image style={style.img} source={item.url} />
      <View>
        <View style={style.noteLine}><Text>{item.name}</Text><Text style={{marginLeft: size.size5}}>{item.type} your request</Text></View>
        <View>
          <Text>{moment(item.date).format('MMM DD, YYYY')} | {item.time}</Text>
        </View>
      </View>
      {!read?<View style={style.point}></View>: null}
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <NoteItem item={item}/>
  );
  useEffect(()=>{
    if (flag){
      navigationRef.current.setNativeProps({
        display:  "none",
      });
    }else {
      navigationRef.current.setNativeProps({
        display:  "flex",
      });
    }
  },[flag])
  return (
        <View style={style.body}>
            <Text style={style.notTitle}>Notification</Text>
            <View style={style.pageBlock}>
              <TouchableOpacity
                onPress={() => {
                  setActive('Unread');
                }}
                style={active === 'Unread' ? style.pageButton : style.pageButtonTwo}><Text
                style={active === "Unread" ? style.buttonTextTwo : style.buttonText}>Unread</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActive('Read');
                }}
                style={active === 'Read' ? style.pageButton : style.pageButtonTwo}><Text
                style={active === "Read" ? style.buttonTextTwo : style.buttonText}>Reads</Text></TouchableOpacity>
            </View>
            <View style={style.allRead}>
              {!read && active ==='Unread' ? <TouchableOpacity onPress={() => setRead(true)}><Text>Mark all as
              read</Text></TouchableOpacity> : null}</View>
            {!read && active ==='Unread' || read && active === 'Read'?<SafeAreaView>
              <FlatList
                ref={scrollRef}
                data={notes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView> : <View style={style.svgBlock}><NoteSvg style={style.svg}/><Text style={style.svgText}>No Notifications</Text></View>}
            {flag ? <Sms flag={flag} data={data} setFlag={setFLag} /> : null}

        </View>
    );
}

export default Index;
