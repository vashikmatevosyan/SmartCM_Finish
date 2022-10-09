import React, {useRef, useState} from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {useSelector} from "react-redux";
import style from "./style";
import {Calendar} from 'react-native-calendars';
import size from "../../utils/Size";
import _ from 'lodash'
import moment from "moment";
import CalendarSvg from "../../assets/svges/CalendarSvg";


function Index(props) {
  const {page , calActive} = props
  const { eventsData }  = useSelector(state => state.events)
  const scrollRef = useRef();
  const sortEventData = _.sortBy(eventsData, ['date'])
  const [day, setDay] = useState('')
  const [calActiveTwo, setCalActiveTwo] = useState(false)

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
    <EventItem item={item}/>
  );
  return (
    <View>
      {page ? <TouchableOpacity onPress={() => {
        calActiveTwo(!calActiveTwo);
        !calActiveTwo ? scrollRef.current.scrollToOffset({ animated: true, offset: 0 }) : null;
      }}
                         style={calActiveTwo ? style.svgBlockTwo : style.svgBlock}><CalendarSvg
        color={calActiveTwo ? "#F5F5F5" : "#347474"} /></TouchableOpacity> : null}
        <SafeAreaView style={page ? {height: size.size310} : {height: size.size360}}>
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
            data={sortEventData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    </View>
  );
}

export default Index;
