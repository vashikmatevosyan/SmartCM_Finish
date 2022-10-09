import React from 'react';
import {Text, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import size from "../../utils/Size";
import {navigationRef} from "../../navigation/TabNavigation";
import CheckSvg from "../../assets/svges/CheckSvg";


function Project(props) {
    const {setFlag, flag, done, setDone, navigation} = props
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', size.size274], []);
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
                    setDone(!done);
                    setFlag(!flag);
                    navigationRef.current.setNativeProps({
                        display: "flex",
                    });
                    navigation.navigate('Home')
                }
                }
                          style={style.closeSvg}/>
                <View style={style.doneBlock}>
                    <CheckSvg style={{marginTop: size.size17}}/>
                    <Text style={{...style.projectTitle, marginTop: size.size36}}>Create !</Text>
                    <Text style={style.doneText}>Event successfully created.</Text>
                </View>
            </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

export default Project;
