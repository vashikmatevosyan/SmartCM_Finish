import React, {useRef, useState} from "react";
import Bar from './Bar'
import Home from "../screens/homePage";
import Note from "../screens/notPage";
import Activity from "../screens/Activity";
import Profile from "../screens/profilePage";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageBackground, TouchableOpacity, View} from "react-native";
import barImage from "../assets/images/tab.png"
import style from "./style";
import PlusSvg from "../assets/svges/PlusSvg";
import size from "../utils/Size";
import TaskSvg from "../assets/svges/TaskSvg";
import EventSvg from "../assets/svges/EventSvg";
import GroupSvg from "../assets/svges/GroupSvg";
import CreateTasks from "../screens/CreateTasks";
import UpdateTasks from "../screens/CreateTasks/UpdateTasks";
import CreateEvent from "../screens/CreateEvent";
import BookLeave from "../screens/BookLeave";

export const navigationRef = React.createRef(null);
const Tab = createBottomTabNavigator();

function TabNavigation(props) {
    const [active, setActive] = useState(false)
    const {navigation} = props
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props) =>
            <View ref={navigationRef} style={style.barBlock}>
                {active ? <><TouchableOpacity onPress={() => {
                    navigation.navigate("CreateTasks");
                    setActive(!active)
                }} style={[style.button, style.taskPosition]}><TaskSvg/></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("CreateEvent");
                        setActive(!active)
                    }} style={[style.button, style.eventPosition]}><EventSvg/></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("BookLeave");
                        setActive(!active)
                    }} style={[style.button, style.groupPosition]}><GroupSvg/></TouchableOpacity></> : null}
                <PlusSvg onPress={() => setActive(!active)} style={style.plusSvg} color={active ? "#347474" : "#ffffff"}
                         bgColor={active ? "#ffffff" : "#347474"}/>
                <ImageBackground source={barImage} resizeMode="cover" style={{width: size.size340, height: '100%'}}>
                    <Bar {...props} setActive={setActive}/>
                </ImageBackground>
            </View>
        }>
            <Tab.Screen name="Home" component={Home}  screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Note" component={Note} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Activity" component={Activity} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={Profile} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="CreateTasks" component={CreateTasks} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="UpdateTasks" component={UpdateTasks} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="CreateEvent" component={CreateEvent} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="BookLeave" component={BookLeave} screenOptions={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export default TabNavigation;
