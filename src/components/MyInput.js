import React, {useEffect} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {navigationRef} from "../navigation/TabNavigation";

export function MyInput(props) {
    const {...p} = props;
    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', () => {
          if (!props.flag){
                navigationRef.current.setNativeProps({
                    display: "flex",
                });
          }
        });
        Keyboard.addListener('keyboardDidShow', () => {
            navigationRef.current.setNativeProps({
                display:  "none",
            });
        });
    }, []);
    return (
        <>
            <TextInput
                {...p}
                onFocus={() => {
                    navigationRef.current.setNativeProps({
                        display:  "none",
                    })
                }
                }
                onBlur={() => {
                  if (!props.flag){
                    navigationRef.current.setNativeProps({
                        display:  "flex",
                    })
                  }
                }}
            />
        </>
    );
}
