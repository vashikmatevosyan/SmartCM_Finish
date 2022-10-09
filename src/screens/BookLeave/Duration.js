import React, {useCallback} from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import {useMemo, useRef, useState} from "react";
import {blTiming} from "../../services/Timing";
import _ from "lodash";
import size from "../../utils/Size";
import {navigationRef} from "../../navigation/TabNavigation";
import CalendarSvg from "../../assets/svges/CalendarSvg";
import ArrowSvg from "../../assets/svges/tabSvg/ArrowSvg";
import moment from "moment";
import DatePicker from 'react-native-date-picker'

function Duration(props) {
    const {setFlag, flag , setTime ,  day ,setDurTime , setTypeName} = props
    const bottomSheetRef = useRef(null);
    const [transTime , setTransTime] = useState('Duration*')
    const [date, setDate] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const snapPoints = useMemo(() => ['50%', size.size550], []);
    const time = moment(date).format('HH:mm')
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);

    }, []);
    Keyboard.addListener('keyboardDidHide', () => {
        navigationRef.current.setNativeProps({
            display: "none",
        });
    });
    const listItems = blTiming.map((time) =>
        <TouchableOpacity onPress={()=> {setFlag(flag) ; setTransTime(time)}} key={time + _.uniqueId()}  style={time === 'Full day' ? {...style.durationButton , width: '100%'} : {...style.durationButton}}><Text style={style.durationButtonText}>{time}</Text></TouchableOpacity>
    );

    return (
        <GestureHandlerRootView style={style.gestureBlock}>
            <View style={style.gestureBlockView}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <CloseSvg onPress={() => {setTypeName('') ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.hourlyLeaveTitle}>Hourly leave</Text>
                <Text style={{...style.hourlyLeaveTitle , fontFamily: 'Montserrat-Medium',}}>{moment(day).format("MMM DD")}</Text>
                <TouchableOpacity style={style.dataPickerButton} onPress={() => setOpenTime(true)}>
                    <CalendarSvg color={'white'}/><Text style={style.time}>{time}</Text><ArrowSvg/></TouchableOpacity>
                <DatePicker
                    modal
                    is24hourSource={'locale'}
                    locale={'fr'}
                    mode={'time'}
                    open={openTime}
                    date={date}
                    onConfirm={(date) => {
                        setOpenTime(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpenTime(false)
                    }}
                    onDateChange={setDate}
                />
                <View style={style.durationBlock}>
                {listItems}
                </View>
                <TextInput style={style.durTextArea} placeholder='Description'  placeholderTextColor='#818195' />
                <TouchableOpacity onPress={() => {
                    setFlag(false)
                    setDurTime(transTime)
                    setTypeName('')
                    setTime(time)
                }} style={{...style.selectButton, marginTop: size.size21}}><Text style={style.selectText}>Book</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Duration;
