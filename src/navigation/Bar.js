import {View, Text, TouchableOpacity} from 'react-native';
import React from "react";
import Svg from "../assets/svges/tabSvg";
import style from "./style";

function Bar({ state, descriptors, navigation  , setActive }) {
    return (
        <View style={style.iconsBlock}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    setActive(false)
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }

                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                if (index > 3){
                    return null
                }
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isFocused ? style.bgColor : style.button }
                    >
                        <View>
                            <Svg color={isFocused ? '#347474' : '#FFFFFF'} path={label}/>
                        </View>
                        <Text  style={{ color: isFocused ? '#673ab7' : '#222' }}>
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default Bar
