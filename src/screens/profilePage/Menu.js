import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useDispatch } from "react-redux";
import { getLogOut } from "../../store/actions/user";
import { useNavigation } from "@react-navigation/native";



function Menu(props) {
  const { setTitle, setPage } = props;
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setTitle("History tasks");
          setPage("Task");
        }}
        style={style.projectButton}>
        <Text style={style.projectButtonText}>History tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTitle("History events");
          setPage("Event");
        }}
        style={style.projectButton}>
        <Text style={style.projectButtonText}>History events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {

        }}
        style={style.projectButton}>
        <Text style={style.projectButtonText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(getLogOut())
          navigation.navigate('Login')
        }}
        style={style.projectButton}>
        <Text style={style.projectButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Menu;
