import React, {useRef, useState } from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import style from "./style";
import {Calendar} from 'react-native-calendars';
import CheckBox from '@react-native-community/checkbox';
import size from "../../utils/Size";
import _ from 'lodash'
import moment from "moment";
import { useNavigation } from '@react-navigation/native';



function All(props) {
  const {calActive , page } = props
  const { taskData }  = useSelector(state => state.tasks)
  const { eventsData }  = useSelector(state => state.events)
  const [day, setDay] = useState('')
  const [id, setId] = useState('')
  const [checked, setChecked] = useState(true)
  const scrollRef = useRef();
  const all = [...eventsData, ...taskData]
  const sortAllData = _.sortBy(all, ['date'])
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

  const EventItem = ({item}) => (
    <View style={style.eventsBlock}>
      <View style={style.eventLine}/>
      <View style={style.eventContent}>
        <Text style={style.eventHeader}>{item.title}</Text>
        <Text style={style.eventDesc}> {item.short_description}</Text>
        <View style={{flexDirection: 'row', marginTop: size.size12}}>
          <Text style={style.eventData}>{moment(item.date).format('MMM DD, YYYY')} | {item.duration}</Text>
          <Text style={style.eventData}> {item.location}</Text>
        </View>
      </View>
    </View>
  );
  const renderItem = ({item}) => (
    item.project ? <TaskItem item={item}/> : <EventItem item={item}/>
  );
  return (
        <SafeAreaView style={{height: size.size360}}>
            <FlatList
                ref={scrollRef}
                ListHeaderComponent={calActive && !page ? <Calendar
                    onDayPress={day => {
                        setDay(day.dateString)
                    }}
                    style={style.calendar}
                    markedDates={{
                        [day]: {selected: true, selectedColor: '#11493E'}
                    }}
                    markingType={'dot'}
                /> : null}
                data={sortAllData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
  );
}

export default All;
