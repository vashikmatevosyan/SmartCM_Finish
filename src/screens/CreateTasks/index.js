import React, {useEffect, useMemo, useState} from 'react';
import {BackHandler, Text, TextInput, TouchableOpacity, View} from "react-native";
import style from './style'
import InputSvg from "../../assets/svges/tabSvg/InputSvg";
import Duration from './Duration'
import CalendarSvg from "../../assets/svges/CalendarSvg";
import Project from './Project'
import Date from "./Date";
import size from "../../utils/Size";
import {navigationRef} from '../../navigation/TabNavigation'
import moment from "moment";
import { MyInput } from "../../components/MyInput";
import _ from "lodash";
import { getTasksData } from "../../store/actions/tasks";
import { useDispatch } from "react-redux";

function Index(props) {
    const {navigation} = props
    const [flag , setFlag] = useState(false);
    const [project , setProject] = useState(false);
    const [date , setDate] = useState(false);
    const [duration , setDuration] = useState(false);
    const [durTime , setDurTime] = useState('Duration*')
    const [days , setDays] = useState('Date*')
    const [projectName , setProjectName] = useState('Projects*')
    const [taskTitle, setTaskTitle] = useState('')
    const dispatch = useDispatch()
    const taskItemData = {title: taskTitle , date: days , duration: durTime , project: projectName, color: '#38A98E', id: _.uniqueId() + 'task'}
    BackHandler.addEventListener('hardwareBackPress', function () {
        navigationRef.current.setNativeProps({
            display:  "flex",
        });
        setFlag(false)
        setProject(false)
        setDate(false)
        setDuration(false)
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
            <Text style={style.title}>Create Task</Text>
            <MyInput {...props} onChangeText={(ev)=> setTaskTitle(ev)} value={taskTitle} flag={flag}  style={style.titleInput} placeholder='Title*'  placeholderTextColor='#818195' ></MyInput>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setProject(!project)}} style={style.projectButton}><Text style={style.projectButtonText}>{projectName}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setDate(!date)}} style={style.projectButton}><Text style={style.projectButtonText}>{days === 'Date*' ? days : moment(days).format('MMM DD YYYY')}</Text><CalendarSvg {...props} color={'#347474'} style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setDuration(!duration)}} style={style.projectButton}><Text style={style.projectButtonText}>{durTime}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>
            <TouchableOpacity onPress={()=> {
                setDays('Date*')
                setProjectName('Projects*')
                setDurTime('Duration')
                setTaskTitle('')
                dispatch(getTasksData(taskItemData))
                navigation.navigate('Home')
            }} style={{...style.selectButton , width: size.size315 , marginTop: size.size79}}><Text style={style.selectText}>Create</Text></TouchableOpacity>
            {project ?  <Project {...props} setProjectName={setProjectName} setProject={setProject} project={project} flag={flag} setFlag={setFlag}/> : null}
            {date ?  <Date {...props} setDate={setDate} date={date} flag={flag} setFlag={setFlag} setDays={setDays}/> : null}
            {duration ?  <Duration {...props} durTime={durTime} setDurTime={setDurTime} setDuration={setDuration} duration={duration} flag={flag} setFlag={setFlag}/> : null}
        </View>
    );
}

export default Index;
