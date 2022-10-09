import React, { useEffect, useState } from "react";
import { Alert, BackHandler, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import style from "./style";
import infoImage from "../../assets/images/Layer.png";
import CalendarSvg from "../../assets/svges/CalendarSvg";
import TasksList from "../../components/TaskEventAll/TasksList";
import EventsList from "../../components/TaskEventAll/EventsList";
import All from "../../components/TaskEventAll/All";


function Index(props) {
  const { name } = useSelector(state => state.user);
  const { bookAllData } = useSelector(state => state.bookLeave);
  const [active, setActive] = useState("All");
  const [calActive, setCalActive] = useState(false);
  // onButtonPress = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  //   // then navigate
  //   navigate('NewScreen');
  // }
  //  handleBackButton = () => {
  //   Alert.alert(
  //     'Exit App',
  //     'Exiting the application?', [{
  //       text: 'Cancel',
  //       onPress: () = > console.log('Cancel Pressed'),
  //       style: 'cancel'
  // }, {
  //     text: 'OK',
  //       onPress: () = > BackHandler.exitApp()
  //   }, ], {
  //     cancelable: false
  //   }
  // )
  //   return true;
  // }
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', function(){
      BackHandler.exitApp() 
    });
  },[])
  console.log(bookAllData , 666666);
  return (
    <View style={style.body}>
      <View style={style.container}>
        <Text style={style.helloText}>Hello , {name} </Text>
        <View style={style.infoBlock}>
          <ImageBackground source={infoImage} resizeMode="cover" style={style.image}>
            <Text style={style.tasksCount}>35 / 50</Text>
          </ImageBackground>
        </View>
        <View style={style.pageBlock}>
          <TouchableOpacity
            onPress={() => {
              setActive("Tasks");
            }}
            style={active === "Tasks" ? style.pageButton : style.pageButtonTwo}><Text
            style={active === "Tasks" ? style.buttonTextTwo : style.buttonText}>Tasks</Text></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive("Events");
            }}
            style={active === "Events" ? style.pageButton : style.pageButtonTwo}><Text
            style={active === "Events" ? style.buttonTextTwo : style.buttonText}>Event</Text></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive("All");
            }}
            style={active === "All" ? style.pageButton : style.pageButtonTwo}><Text
            style={active === "All" ? style.buttonTextTwo : style.buttonText}>All</Text></TouchableOpacity>
        </View>
        <View style={style.dateBlock}>
          <Text style={style.dateText}>20 May 2022</Text>
          <TouchableOpacity onPress={() => {
            setCalActive(!calActive);
          }}
                            style={calActive ? style.svgBlockTwo : style.svgBlock}><CalendarSvg
            color={calActive ? "#F5F5F5" : "#347474"} /></TouchableOpacity>
        </View>
        {active === "Tasks" ? <TasksList page={false} calActive={calActive} /> :
          active === "Events" ? <EventsList page={false} calActive={calActive} /> :
            <All page={false} calActive={calActive} />}
      </View>
    </View>
  );
}

export default Index;
