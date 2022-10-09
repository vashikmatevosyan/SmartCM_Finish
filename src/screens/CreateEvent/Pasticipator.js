import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";
import organizersData from "../../services/Organizers";
import {participatorsCategories , participatorsNames} from "../../services/Participators";
import _ from "lodash";
// import {tabRef} from "../../navigation/TabNavigation";

function Organizer(props) {
    const {setFlag, flag , participators , setParticipators , setParName} = props
    const [id , setId] = useState('');
    const [nameId , setNameId] = useState('');
    const [activeName , setActiveName] = useState('Participates*')
    const [itemName , setItemName] = useState('')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size495], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const OrganizerItem = ({item}) => (
        <View>
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
    {id === item.id ?
        <SafeAreaView style={{marginLeft: size.size30}}>
            <FlatList
                data={participatorsNames[itemName].names}
                renderItem={renderItemTwo}
                keyExtractor={item => item.id}
            />
        </SafeAreaView> : null
    }
        </View>
           );
    const renderItem = ({item}) => (
        <OrganizerItem item={item}/>
    );
    const ParItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            setNameId(item.id)
            setActiveName(item.name)
        }} style={style.organizerBlock}>
            <CheckBox onValueChange={() => {
                setNameId(item.id)
                setActiveName(item.name)
            }} value={nameId === item.id ? true : false}/>
            <Text style={style.projectTitleText}>{item.name}</Text>
        </TouchableOpacity>
    )
    const renderItemTwo = ({item}) => (
        <ParItem item={item}/>
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
                <CloseSvg onPress={() => {setParticipators(!participators) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Participators</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginTop: size.size20, marginRight: 'auto'}}>
                    <FlatList
                        data={participatorsCategories}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setParticipators(!participators)
                    setFlag(!flag)
                    setParName(activeName)
                }} style={{...style.selectButton , marginTop: size.size26}}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Organizer;