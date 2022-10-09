import React from 'react';
import Login from "../screens/loginPage/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ForgotPass from "../screens/loginPage/ForgotPass";
import TabNavigation from "./TabNavigation";
import {useSelector} from "react-redux";

const Stack = createNativeStackNavigator();


function Main(props) {
    const {name} = useSelector((state) => state.user)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={name ? 'TabNavigation' : 'Login'}>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="ForgotPass" component={ForgotPass} options={{headerShown: false}}/>
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;
