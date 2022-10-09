import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import projectNames from "../../services/ProjectNames";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";
// import {tabRef} from "../../navigation/TabNavigation";

function Project(props) {
    const {setFlag, flag , project , setProject , setProjectName} = props
    const [id , setId] = useState('');
    const [itemName , setItemName] = useState('Projects*')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size446], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const ProjectItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            setId(item.id)
            setItemName(item.name)
        }}  style={{...style.projectButton , paddingTop: 0, paddingBottom: 0, alignItems: 'center', width: '100%'}}><CheckBox onValueChange={() => {
            setId(item.id)
            setItemName(item.name)
        }} value={id === item.id ? true : false}/><Text style={style.projectTitleText}>{item.name}</Text></TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <ProjectItem item={item}/>
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
                <CloseSvg onPress={() => {setProject(!project) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Select Project</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginRight: 'auto'}}>
                    <FlatList
                        data={projectNames}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setProject(!project)
                    setFlag(!flag)
                    setProjectName(itemName)
                }} style={style.selectButton}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Project;