import React, {useState} from 'react';
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import {Text, TouchableOpacity, View} from "react-native";
import size from "../../utils/Size";
import {Calendar} from 'react-native-calendars';


function Project(props) {
    const {setFlag, flag, date, setDate, setDays} = props
    const [day, setDay] = useState('Date*');
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size550], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <GestureHandlerRootView style={style.gestureBlock}>
            <View style={style.gestureBlockView}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <CloseSvg onPress={() => {
                    setDate(!date);
                    setFlag(!flag)
                }} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Choose Day</Text>
                <Calendar
                    onDayPress={day => {
                        setDay(day.dateString)
                    }}

                    style={[style.calendar,
                        {
                            width: size.size320,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: size.size40,
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.17,
                            shadowRadius: 3.05,
                            elevation: 4
                        }]}

                    markedDates={{
                        [day]: {selected: true, selectedColor: '#11493E'}
                    }}
                    markingType={'dot'}
                />
                <TouchableOpacity onPress={() => {
                    setDate(!date)
                    setFlag(!flag)
                    setDays(day)
                }} style={{...style.selectButton, marginTop: size.size37}}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Project;
