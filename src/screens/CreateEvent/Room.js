import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";
import rooms from '../../services/Rooms'

function Room(props) {

    const {setFlag, flag , room , setRoom , setRoomName} = props
    const [id , setId] = useState('');
    const [itemName , setItemName] = useState('Room')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size365], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const OrganizerItem = ({item}) => (
       <TouchableOpacity onPress={() => {
           setId(item.id)
           setItemName(item.roomName)
       }} style={style.roomBlock}>
           <CheckBox onValueChange={() => {
            setId(item.id)
            setItemName(item.roomName)
        }} value={id === item.id ? true : false}/>
           <Text style={style.projectTitleText}>{item.roomName}</Text>
       </TouchableOpacity>
           );
    const renderItem = ({item}) => (
        <OrganizerItem item={item}/>
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
                <CloseSvg onPress={() => {setRoom(!room) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Choose Room</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginTop: size.size20, marginRight: 'auto'}}>
                    <FlatList
                        data={rooms}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setRoom(!room)
                    setFlag(!flag)
                    setRoomName(itemName)
                }} style={{...style.selectButton , marginTop: size.size54}}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Room;
