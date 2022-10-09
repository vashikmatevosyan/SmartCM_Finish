import {StyleSheet} from "react-native";
import size from "../utils/Size";


const style = StyleSheet.create({
    barBlock: {
        width: '100%',
        height: size.size70,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        position: "relative",
    },
    iconsBlock: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingLeft: size.size16,
        paddingRight: size.size16,
    },
    button: {
        flexDirection: 'row',
        width: size.size44,
        height: size.size44,
        backgroundColor: '#347474' ,
        borderRadius: size.size30,
        justifyContent: 'center',
        alignItems: "center",
    },
    bgColor: {
        flexDirection: 'row',
        width: size.size44,
        height: size.size44,
        backgroundColor: '#FFFFFF',
        borderRadius: size.size30,
        justifyContent: 'center',
        alignItems: "center",
    },
    plusSvg: {
        position: 'absolute',
        bottom: size.size45,

    },
    taskPosition: {
        position: 'absolute',
        left: size.size115,
        bottom: size.size95,
    },
    eventPosition: {
        position: 'absolute',
        left: size.size165,
        bottom: size.size120,
    },
    groupPosition: {
        position: 'absolute',
        left: size.size215,
        bottom: size.size95,
    }
})

export default style