import React, { useState } from "react";
import { Text , View } from "react-native";
import style from "./style";
import Menu from "./Menu";
import TaskStatistic from "./TaskStatistic";
import LeftSvg from "../../assets/svges/LeftSvg";
import EventStatistic from "./EventStatistic";


function Index(props) {
  const [page, setPage] = useState("Menu");
  const [title, setTitle] = useState("Profile");
  return (
    <View style={style.body}>
      <View style={style.container}>
        <View style={style.titleBlock}>
          {page === "Menu" ? null : <LeftSvg onPress={()=> {setPage('Menu');setTitle('Profile')}} style={style.svgStyle} />}
          <Text style={style.profTitle}>{title}</Text>
        </View>
        { page === "Menu" ? <Menu setTitle={setTitle} setPage={setPage} /> :
          page === "Event" ? <EventStatistic setTitle={setTitle} setPage={setPage} /> :
          page === "Task" ? <TaskStatistic setTitle={setTitle} setPage={setPage} /> : null}
      </View>
    </View>
  );
}

export default Index;
