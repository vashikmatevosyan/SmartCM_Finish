import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import style from "./style";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import {useMemo, useRef, useState} from "react";
import {timing} from "../../services/Timing";
import _ from "lodash";
import size from "../../utils/Size";
import {navigationRef} from "../../navigation/TabNavigation";

function Duration(props) {

    const {setFlag, flag , duration , setDuration , durTime ,setDurTime} = props
    const bottomSheetRef = useRef(null);
    const [transTime , setTransTime] = useState('Duration*')
    const snapPoints = useMemo(() => ['50%', size.size446], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const listItems = timing.map((time) =>
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
                <CloseSvg onPress={() => {setDuration(!duration) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={{...style.projectTitle , marginTop: size.size10}}>Actual duration</Text>
                <Text style={style.durationText}>Select actual duration you spent on this task</Text>
                <View style={style.durationBlock}>
                {listItems}
                </View>
                <TouchableOpacity onPress={() => {
                    setDuration(!duration)
                    setFlag(!flag)
                    setDurTime(transTime)
                }} style={{...style.selectButton, marginTop: size.size68}}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Duration;