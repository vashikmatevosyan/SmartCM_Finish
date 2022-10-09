import React from 'react';
import {Text, View} from "react-native";
import {useCallback, useMemo, useRef} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import style from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import CloseSvg from "../../assets/svges/CloseSvg";
import size from "../../utils/Size";
import {navigationRef} from "../../navigation/TabNavigation";
import moment from "moment";


function Sms(props) {
  const {flag , data , setFlag}= props
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', size.size300], []);
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
          <View>
          <CloseSvg onPress={() => {
            setFlag(!flag);
            navigationRef.current.setNativeProps({
              display: "flex",
            });
          }
          } style={style.closeSvg}/>
          <Text style={{...style.notTitle , marginTop: 0}}>Work Remotely Request</Text>
          </View>
          <View style={style.container}>
          <View style={{flexDirection: 'row'}}><Text style={style.modalTitle}>Employee: </Text><Text style={style.modalName}>{data.name}</Text></View>
          <View style={{flexDirection: 'row' , marginTop: size.size18}}><Text style={style.modalTitle}>Date: </Text><Text style={{ ...style.modalName , marginLeft: size.size50}}>{moment(data.date).format('MMM DD, YYYY')}</Text></View>
          <View style={{marginTop: size.size18}}><Text style={style.modalTitle}>Comment:</Text><Text style={{...style.modalTitle , color: '#949494' , marginTop: size.size12}}>{data.comment}</Text></View>
          </View>
          </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default Sms;
