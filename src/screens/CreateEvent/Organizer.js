import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";
import organizersData from "../../services/Organizers";
// import {tabRef} from "../../navigation/TabNavigation";

function Organizer(props) {
    const {setFlag, flag , organizer , setOrganizer , setOrganizerName} = props
    const [id , setId] = useState('');
    const [itemName , setItemName] = useState('Orgnizer')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size495], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const OrganizerItem = ({item}) => (
       <TouchableOpacity onPress={() => {
           setId(item.id)
           setItemName(item.name)
       }} style={style.organizerBlock}>
           <CheckBox onValueChange={() => {
            setId(item.id)
            setItemName(item.name)
        }} value={id === item.id ? true : false}/>
           <Text style={style.projectTitleText}>{item.name}</Text>
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
                <CloseSvg onPress={() => {setOrganizer(!organizer) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Organizers</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginTop: size.size20, marginRight: 'auto'}}>
                    <FlatList
                        data={organizersData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setOrganizer(!organizer)
                    setFlag(!flag)
                    setOrganizerName(itemName)
                }} style={{...style.selectButton , marginTop: size.size26}}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Organizer;