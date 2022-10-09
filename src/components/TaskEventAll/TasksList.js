import React, {useRef, useState} from 'react';
import {FlatList,SafeAreaView,Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import style from "./style";
import {Calendar} from 'react-native-calendars';
import CheckBox from '@react-native-community/checkbox';
import size from "../../utils/Size";
import _ from 'lodash'
import moment from "moment";
import { useNavigation } from "@react-navigation/native";


function TasksList(props) {
  const {page , calActive} = props
  const { taskData }  = useSelector(state => state.tasks)
  const [day, setDay] = useState('')
  const [id, setId] = useState('')
  const [checked, setChecked] = useState(true)
  const scrollRef = useRef();
  const sortTaskData = _.sortBy(taskData, ['date'])
  const navigation = useNavigation();

  const TaskItem = ({item}) => (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('UpdateTasks' , {id: item.id})
    }} style={style.tasksBlock}>
      <CheckBox
        onValueChange={() => {
          setId(item.id)
          if (!item.flag) {
            item.flag = true
          } else {
            item.flag = false
          }
        }}
        value={item.flag ? id === item.id || item.flag ? checked : !checked  : !checked}
      />
      <View>
        <Text style={style.tasksTitle}>{item.title}</Text>
        <Text style={style.tasksDate}>{moment(item.date).format('MMM DD, YYYY')} | {item.duration}</Text>
      </View>
      <Text style={{...style.colorBlock, backgroundColor: item.color}}>{item.project}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <TaskItem item={item}/>
  );
  return (
    <View>
        <SafeAreaView style={page ? {height: size.size320} : {height: size.size375}}>
          <FlatList
            ref={scrollRef}
            ListHeaderComponent = {
              calActive && !page ? <Calendar
                onDayPress={day => {
                  setDay(day.dateString);
                }}
                style={style.calendar}
                markedDates={{
                  [day]: { selected: true, selectedColor: "#11493E" },
                }}
                markingType={"dot"}
              /> : null
            }
            data={sortTaskData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    </View>
  );
}

export default TasksList;
