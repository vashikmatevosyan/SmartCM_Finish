import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import typeValues from "../../services/Types";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";
// import {tabRef} from "../../navigation/TabNavigation";

function Type(props) {
    const {setFlag, flag , type , setType , setTypeValue} = props
    const [id , setId] = useState('');
    const [itemValue , setItemValue] = useState('Type')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size446], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const TypeItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            setId(item.id)
            setItemValue(item.value)
        }}  style={{...style.projectButton , paddingTop: 0, paddingBottom: 0, alignItems: 'center', width: '100%'}}><CheckBox onValueChange={() => {
            setId(item.id)
            setItemValue(item.value)
        }} value={id === item.id ? true : false}/><Text style={style.projectTitleText}>{item.value}</Text></TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <TypeItem item={item}/>
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
                <CloseSvg onPress={() => {setType(!type) ; setFlag(!flag)}} style={style.closeSvg}/>
                <Text style={style.projectTitle}>Choose event type</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginTop: size.size30, marginRight: 'auto'}}>
                    <FlatList
                        data={typeValues}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setType(!type)
                    setFlag(!flag)
                    setTypeValue(itemValue)
                }} style={style.selectButton}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Type;