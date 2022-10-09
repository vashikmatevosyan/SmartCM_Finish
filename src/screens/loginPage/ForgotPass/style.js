import {StyleSheet} from "react-native";
import size from "../../../utils/Size";

const style = StyleSheet.create({
    body: {
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "100%",
    },
    image: {
        width: size.size192,
        height: size.size218,
        marginTop: size.size68,
        marginLeft: size.size92,
        marginRight: size.size91
    },
    forgotPassword: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: size.size24,
        lineHeight: size.size32,
        letterSpacing: size.size025,
        color: '#11493E',
        marginTop: size.size53,
        marginLeft: size.size80,
        marginRight: size.size81,
    },
    desc: {
        width: size.size328,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#616062',
        marginTop: size.size6,
        marginLeft: size.size23,
        marginRight: size.size24
    },
    inputBlock: {
        width: size.size329,
        height: size.size45,
        borderWidth: size.size1,
        borderStyle: "solid",
        borderColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: size.size32,
        marginRight: size.size23,
        marginLeft: size.size23,
    },
    email: {
        width: size.size285,
        height: size.size45,
    },
    button: {
        width: size.size328,
        height: size.size38,
        backgroundColor: "#11493E",
        borderRadius: size.size4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: size.size28,
        marginRight: size.size23,
        marginLeft: size.size23,
    },
    sendText: {
        color: "#FCFCFC",
        fontWeight: "600",
        fontSize: size.size14,
        lineHeight: size.size16,
    },
    backLogin: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: size.size14,
        lineHeight: size.size17,
        color: "#949494",
    },
    backLoginView: {
        marginRight: size.size23,
        alignItems: "flex-end",
        marginTop: size.size14,
    },
    bold: {
        fontWeight: 'bold'
    },
    container: {
        flex: 1
    },
})

export default style;