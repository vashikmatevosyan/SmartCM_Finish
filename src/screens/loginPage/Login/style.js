import {StyleSheet} from "react-native";
import size from "../../../utils/Size";
import googleIcon from "../../../assets/images/google.png";

const style = StyleSheet.create({
    image: {
        width: size.size263,
        height: size.size241,
        marginTop: size.size99,
    },
    googleIcon:{
        width: size.size40,
        height: size.size40,
    },
    iconsBlock: {
        width: size.size100,
        height: size.size120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    body: {
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    login: {
        fontWeight: "600",
        fontSize: size.size24,
        lineHeight: size.size32,
        letterSpacing: size.size025,
        color: "#11493E",
    },
    inputBlock: {
        width: size.size328,
        height: size.size45,
        borderWidth: size.size1,
        borderStyle: "solid",
        borderColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: size.size16,
    },
    email: {
        width: size.size285,
        height: size.size45,
    },
    pass:{
        width: size.size270,
        height: size.size45
    },
    forget: {
        fontFamily: "Montserrat-Regular",
        fontStyle: "normal",
        fontSize: size.size14,
        lineHeight: size.size17,
        textAlign: "center",
        color: "#949494",
    },
    forgetBlock: {
        width: size.size329,
        alignItems: "flex-end",
        marginTop: size.size14,
    },
    button: {
        width: size.size328,
        height: size.size38,
        backgroundColor: "#11493E",
        borderRadius: size.size4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: size.size28,
    },
    buttonText: {
        color: "#FCFCFC",
        fontWeight: "600",
        fontSize: size.size14,
        lineHeight: size.size16,
    },
    container: {
        flex: 1
    },
});
export default style;

