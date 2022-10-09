import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import typeValues from "../../services/BookTypes";
import CheckBox from "@react-native-community/checkbox";
import size from "../../utils/Size";

function Type(props) {
    const {setFlag, flag , type , setType , setTypeValue , setTypeName , typeName} = props
    const [id , setId] = useState('');
    const [itemValue , setItemValue] = useState('Type')
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size465], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const TypeItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            setId(item.id)
            setItemValue(item.value)
        }}  style={{...style.projectButton , marginTop: size.size7, paddingTop: 0, paddingBottom: size.size20, alignItems: 'center', width: '100%'}}><CheckBox onValueChange={() => {
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
                <Text style={style.projectTitle}>Choose book leave</Text>
                <SafeAreaView style={{width: size.size335 , marginLeft: 'auto' , marginTop: size.size20, marginRight: 'auto'}}>
                    <FlatList
                        data={typeValues}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={()=> {
                    setTypeValue(itemValue)
                    if (itemValue === 'Hourly leave' || itemValue === 'Vacation'){
                    setFlag(flag)
                    }else {
                        setFlag(!flag)
                    }
                    setType(!type)
                    if (itemValue === 'Hourly leave') {
                        setTypeName('Hourly leave')
                    } else if (itemValue ===  'Vacation'){
                        setTypeName('Vacation')
                    }else {
                        setTypeName('')
                    }
                }} style={style.selectButton}><Text style={style.selectText}>Select</Text></TouchableOpacity>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>

    );
}

export default Type;
