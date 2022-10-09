import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import style from './style'
import InputSvg from "../../assets/svges/tabSvg/InputSvg";
import Duration from './Duration'
import CalendarSvg from "../../assets/svges/CalendarSvg";
import Project from './Project'
import Date from "./Date";
import size from "../../utils/Size";
import {navigationRef} from '../../navigation/TabNavigation'
import LeftSvg from "../../assets/svges/LeftSvg";
import { MyInput } from "../../components/MyInput";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { deleteTasksData, updateTasksData } from "../../store/actions/tasks";

function Index(props) {
    const {navigation , route} = props
    const {id} = route.params
    const [flag, setFlag] = useState(false);
    const [project, setProject] = useState(false);
    const [date, setDate] = useState(false);
    const [duration, setDuration] = useState(false);
    const [durTime, setDurTime] = useState('Duration*')
    const [days, setDays] = useState('Date*')
    const [projectName, setProjectName] = useState('Projects name')
    const [taskTitle, setTaskTitle] = useState('')
    const taskItemData = {title: taskTitle , date: days , duration: durTime , project: projectName, color: '#38A98E', id: _.uniqueId() + 'uTask'}
    const dispatch = useDispatch();
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
            <View style={{flexDirection: 'row', marginTop: size.size36, width: '100%'}}>
                <LeftSvg
                onPress={() => navigation.navigate('Home')}
                style={{marginLeft: size.size35, marginTop: size.size4, position: 'absolute'}}/>
                <Text style={{...style.title, marginTop: 0}}>Update Task</Text>
            </View>
            <MyInput {...props} onChangeText={(ev)=> setTaskTitle(ev)} value={taskTitle} flag={flag} editable={flag ? false : true} style={style.titleInput} placeholder='Some title here*' placeholderTextColor='#1D1D1D'></MyInput>
            <TouchableOpacity
                onPress={() => {
                    setFlag(!flag);
                    setProject(!project)
                }}
                style={style.projectButton}>
                <Text style={{...style.projectButtonText, color: '#1D1D1D'}}>{projectName}</Text>
                <InputSvg style={style.projectButtonSvg}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setFlag(!flag);
                    setDate(!date)
                }}
                style={style.projectButton}>
                <Text style={{...style.projectButtonText, color: '#1D1D1D'}}>{days}</Text>
                <CalendarSvg {...props} color={'#347474'} style={style.projectButtonSvg}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setFlag(!flag);
                    setDuration(!duration)
                }}
                style={style.projectButton}>
                <Text style={{...style.projectButtonText, color: '#1D1D1D'}}>{durTime}</Text>
                <InputSvg style={style.projectButtonSvg}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingLeft: size.size15, paddingRight: size.size15}}>
                <TouchableOpacity onPress={() => {
                  setDays('Date*')
                  setProjectName('Projects*')
                  setDurTime('Duration')
                  setTaskTitle('')
                  dispatch(deleteTasksData(id))
                  navigation.navigate("Home");
                }} style={{...style.selectButton, width: size.size155, backgroundColor: 'white', marginTop: size.size40, borderColor: '#D6453D'}}>
                    <Text style={{...style.selectText, color: '#D6453D'}}>Delete</Text>
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setDays('Date*')
                  setProjectName('Projects*')
                  setDurTime('Duration')
                  setTaskTitle('')
                  dispatch(updateTasksData(taskItemData , id))
                  navigation.navigate("Home");
                }} style={{...style.selectButton, width: size.size155, marginTop: size.size40}}>
                    <Text style={style.selectText}>Update</Text>
                </TouchableOpacity>
            </View>
            {project ? <Project {...props} setProjectName={setProjectName} setProject={setProject} project={project} flag={flag} setFlag={setFlag}/> : null}
            {date ? <Date {...props} setDate={setDate} date={date} flag={flag} setFlag={setFlag} setDays={setDays}/> : null}
            {duration ? <Duration {...props} durTime={durTime} setDurTime={setDurTime} setDuration={setDuration} duration={duration} flag={flag} setFlag={setFlag}/> : null}
        </View>
    );
}

export default Index;
