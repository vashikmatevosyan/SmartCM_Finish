import React, {useEffect, useState} from 'react';
import { BackHandler, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from './style'
import InputSvg from "../../assets/svges/tabSvg/InputSvg";
import Duration from './Duration'
import size from "../../utils/Size";
import moment from "moment";
import {navigationRef} from '../../navigation/TabNavigation'
import Type from "./Type";
import Vacation from "./Vacation";
import Done from "./Done";
import {Calendar} from "react-native-calendars/src/index";
import { getBookData } from "../../store/actions/bookLeave";
import { useDispatch } from "react-redux";
import _ from "lodash";

function Index(props) {
    const [flag , setFlag] = useState(false);
    const [type , setType] = useState(false);
    const [typeValue , setTypeValue] = useState('Type*');
    const [durTime , setDurTime] = useState('Duration*');
    const [date , setDate] = useState(false);
    const [days , setDays] = useState('Date*');
    const [done , setDone] = useState(false)
    const [typeName , setTypeName] = useState('')
    const currentDate = moment().format("YYYY-MM-DD");
    const [day, setDay] = useState(currentDate)
    const [time , setTime] = useState('')
    const dispatch = useDispatch()
    const bookData = {type: typeValue , duration: durTime , date: day , time: time , id: _.uniqueId() + 'book'}
    BackHandler.addEventListener('hardwareBackPress', function () {
        navigationRef.current.setNativeProps({
            display:  "flex",
        });
        setFlag(false)
        setType(false)
        setDate(false)
        setDone(false)
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
            <Text style={style.title}>Book your leave time</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={style.typeText}>Choose book leave type*</Text>
            <TouchableOpacity onPress={()=> {setFlag(!flag) ; setType(!type)}} style={style.projectButton}><Text style={style.projectButtonText}>{typeValue}</Text><InputSvg style={style.projectButtonSvg} /></TouchableOpacity>

            <Calendar
                hideDayNames={true}
                markingType={"period"}
                markedDates={{
                    [currentDate]: { selected: false, textColor: "red" },
                    [day]:{disabled: true, startingDay: true, color: '#347474',endingDay: true},
                }}
                onDayPress={day => {
                    setDay(day.dateString)
                }}
                style={[style.calendar,
                {
                    width: size.size314,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: size.size21,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.17,
                    shadowRadius: 3.05,
                    elevation: 4
                }]}/>
            <TextInput editable={flag ? false : !flag} style={style.textArea} placeholder='Description'  placeholderTextColor='#818195' />
            <TouchableOpacity onPress={()=> {
                setDays('Date*')
                setDurTime('Duration')
                setTypeValue('Type*')
                dispatch(getBookData(bookData))
                setFlag(!flag)
                setDone(!done)
            }} style={{...style.selectButton , width: size.size315 , marginTop: size.size35 , marginBottom: size.size50}}><Text style={style.selectText}>Create</Text></TouchableOpacity>

            </ScrollView>
            {type ?  <Type {...props} setTypeName={setTypeName} setTypeValue={setTypeValue} setType={setType} type={type} flag={flag} setFlag={setFlag}/> : null}
            {typeName === 'Vacation'  ?  <Vacation {...props} setTypeName={setTypeName} setDate={setDate} date={date} flag={flag} setFlag={setFlag} setDays={setDays}/> : null}
            {typeName === 'Hourly leave' ?  <Duration {...props} day={day} setTime={setTime} currentDate={currentDate} setTypeName={setTypeName} durTime={durTime} setDurTime={setDurTime} flag={flag} setFlag={setFlag}/> : null}
            {done ?  <Done {...props} setDone={setDone} done={done} flag={flag} setFlag={setFlag}/> : null}
        </View>
    );
}

export default Index;
