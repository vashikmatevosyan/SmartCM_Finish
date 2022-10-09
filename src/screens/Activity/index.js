import React from "react";
import { ScrollView, View, Text } from "react-native";
import style from "./style";
import Week from "./components/Week";
import Progress from "./components/Progress";
import Annual from "./components/Annual";

function Index() {

  return (
    <View style={style.body}>
      <ScrollView>
        <Text style={style.activities}>My Activities</Text>
        <Text style={{ ...style.activities, ...style.week }}>Week Tasks</Text>
        <Week />
        <Text style={{ ...style.activities, ...style.week }}>Progress tasks</Text>
        <Text style={{ ...style.activities, ...style.week }}>This is the schedule of your tasks 📊</Text>
        <Progress />
        <Text style={{ ...style.activities, ...style.week }}>Annual leave</Text>
        <Annual />
      </ScrollView>
    </View>


  );
}

export default Index;
