import React, {useEffect, useState} from 'react';
import { BackHandler, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from './style'
import InputSvg from "../../assets/svges/tabSvg/InputSvg";
import CalendarSvg from "../../assets/svges/CalendarSvg";
import Duration from './Duration'
import size from "../../utils/Size";
import moment from "moment";
import {navigationRef} from '../../navigation/TabNavigation'
import Type from "./Type";
import {MyInput} from "../../components/MyInput";
import Organizer from "./Organizer";
import Room from "./Room";
import GeoSvg from "../../assets/svges/tabSvg/GeoSvg";
import Date from "./Date";
import Done from "./Done";
import Participator from  './Pasticipator'
import { useDispatch } from "react-redux";
import createTasks from "../CreateTasks";
import _ from "lodash";
import { getEventsData } from "../../store/actions/events";

function Index(props) {
    const {navigation} = props
    const [flag , setFlag] = useState(false);
    const [type , setType] = useState(false);
    const [typeValue , setTypeValue] = useState('Type*');
    const [organizer , setOrganizer] = useState(false);
    const [organizerName , setOrganizerName] = useState('Orgnizer');
    const [participators , setParticipators] = useState(false);
    const [parName , setParName] = useState('Participators*')
    const [room , setRoom] = useState(false);
    const [roomName , setRoomName] = useState('Room');
    const [duration , setDuration] = useState(false);
    const [durTime , setDurTime] = useState('Duration*');
    const [date , setDate] = useState(false);
    const [days , setDays] = useState('Date*');
    const [done , setDone] = useState(false)
    const [eventTitle , setEventTitle] =useState('')
    const [address , setAddress] = useState('')
    const [desc , setDesc] = useState('')
    const dispatch = useDispatch()
    const eventsItemData = {title: typeValue , date: days , duration: durTime , location: roomName, short_description: desc.slice(0 , 73), color: '#38A98E', id: _.uniqueId() + 'event'}


  BackHandler.addEventListener('hardwareBackPress', function () {
        navigationRef.current.setNativeProps({
            display:  "flex",
        });
        setFlag(false)
        setType(false)
        setDate(false)
        setDuration(false)
        setParticipators(false)
        setDone(false)
        setRoom(false)
        setOrganizer(false)
    });
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
            <Text style={style.title}>Create New Events</Text>
            <Text style={style.typeText}>Choose event type*</Text>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setType(!type)}} style={{...style.projectButton , marginTop: size.size10}}><Text style={style.projectButtonText}>{typeValue}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <MyInput {...props} onChangeText={(ev)=> setEventTitle(ev)} value={eventTitle} flag={flag} style={style.titleInput} placeholder='Event Title*'  placeholderTextColor='#818195' />
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setOrganizer(!organizer)}} style={{...style.projectButton , marginTop: size.size10,}}><Text style={style.projectButtonText}>{organizerName}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setParticipators(!participators)}} style={{...style.projectButton , marginTop: size.size10,}}><Text style={style.projectButtonText}>{parName}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setRoom(!room)}} style={style.projectButton}><Text style={style.projectButtonText}>{roomName}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <View style={{...style.titleInput ,alignItems: 'center'}} ><MyInput {...props} onChangeText={(ev)=> setAddress(ev)} value={address} flag={flag} style={{width: size.size270 , height: '100%' , paddingLeft: size.size1 * -1}} editable={flag ? false : !flag} placeholder='Address*'  placeholderTextColor='#818195' /><GeoSvg style={style.geoSvg}/></View>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setDate(!date)}} style={{...style.projectButton, marginTop: size.size10,}}><Text style={style.projectButtonText}>{days === 'Date*' ? days : moment(days).format('MMM DD YYYY')}</Text><CalendarSvg {...props} color={'#347474'} style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setDuration(!duration)}} style={{...style.projectButton, marginTop: size.size10,}}><Text style={style.projectButtonText}>{durTime}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <MyInput {...props} onChangeText={(ev)=> setDesc(ev)} value={desc} flag={flag} style={style.textArea} placeholder='Description'  placeholderTextColor='#818195' />
            <TouchableOpacity onPress={()=> {
                setDays('Date*')
                setDurTime('Duration')
                setTypeValue('Type*')
                setOrganizerName('Orgnizer')
                setRoomName('Room')
                setParName('Participators*')
                setDesc('')
                setAddress('')
                setEventTitle('')
                dispatch(getEventsData(eventsItemData))
                setFlag(!flag)
                setDone(!done)
            }} style={{...style.selectButton , width: size.size315 , marginTop: size.size10}}><Text style={style.selectText}>Create</Text></TouchableOpacity>

            {type ?  <Type  setTypeValue={setTypeValue} setType={setType} type={type} flag={flag} setFlag={setFlag}/> : null}
            {organizer ?  <Organizer setOrganizerName={setOrganizerName} setOrganizer={setOrganizer} organizer={organizer} flag={flag} setFlag={setFlag}/> : null}
            {room ?  <Room  setRoomName={setRoomName} setRoom={setRoom} room={room} flag={flag} setFlag={setFlag}/> : null}
            {participators ?  <Participator  setParName={setParName} setParticipators={setParticipators} participators={participators} flag={flag} setFlag={setFlag}/> : null}
            {date ?  <Date  setDate={setDate} date={date} flag={flag} setFlag={setFlag} setDays={setDays}/> : null}
            {duration ?  <Duration  durTime={durTime} setDurTime={setDurTime} setDuration={setDuration} duration={duration} flag={flag} setFlag={setFlag}/> : null}
            {done ?  <Done {...props}  setDone={setDone} done={done} flag={flag} setFlag={setFlag}/> : null}
        </View>
    );
}

export default Index;
