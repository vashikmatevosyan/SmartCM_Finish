import {StyleSheet} from "react-native";
import size from "../../utils/Size";

const style = StyleSheet.create({
    body: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    container: {
        width: size.size320,
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    tasksCount: {
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        fontSize: size.size24,
        lineHeight: size.size32,
        letterSpacing: size.size025,
        color: '#FCFCFC',
        borderRadius: size.size10,
        marginTop: size.size72,
        marginLeft: size.size27
    },
    pageBlock: {
        width: "100%",
        height: size.size28,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "#347474",
        marginTop: size.size30
    },
    pageButton: {
        width: '33%',
        height: '100%',
        backgroundColor: "#E7F2F2",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    pageButtonTwo: {
        width: '33.3%',
        height: '100%',
        backgroundColor: "#347474",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    email: {
        width: size.size285,
        height: size.size45,
    },
    pass: {
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
        fontFamily: 'Monserrat-SemiBold',
        fontSize: size.size14,
        lineHeight: size.size16,
        color: "#FCFCFC",
    },
    buttonTextTwo: {
        fontFamily: 'Monserrat-SemiBold',
        fontSize: size.size14,
        lineHeight: size.size16,
        color: "#101010",
    },
    svgBlock: {
        width: size.size24,
        height: size.size24,
        backgroundColor:  '#F5F5F5',
        justifyContent: "center",
        alignItems: "center",
        marginTop: size.size24,
        marginLeft: 'auto',
        borderRadius: size.size4
    },
    svgBlockTwo: {
        width: size.size24,
        height: size.size24,
        backgroundColor:  '#347474',
        justifyContent: "center",
        alignItems: "center",
        marginTop: size.size24,
        marginLeft: 'auto',
        borderRadius: size.size4
    },
    dateText: {
        fontFamily: 'Monserrat-SemiBold',
        fontSize: size.size14,
        lineHeight: size.size16,
        color: "#1B3131",
        fontStyle: 'normal',
        letterSpacing: size.size025,
        marginTop: size.size30
    },
    dateBlock: {
        flexDirection: 'row',
    },
    calendar: {
        marginTop: size.size18
    },
    tasksTitle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize:size.size16,
    },
    tasksDate: {
        fontFamily:"Montserrat-Medium",
        fontSize:size.size12
    },
    tasksBlock: {
        borderRadius:size.size4,
        alignItems: "center",
        width: size.size315,
        height: size.size55,
        backgroundColor: "#EDF3F4",
        // marginLeft: "auto",
        // marginRight: "auto",
        marginBottom: size.size20,
        paddingLeft: size.size8,
        paddingRight: size.size8,
        flexDirection: "row",
        paddingTop: size.size6,
    },
    colorBlock: {
        borderRadius: size.size4,
        padding: size.size4,
        marginLeft: 'auto'
    },
    eventsBlock:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flex: 1,
        flexDirection: 'row',
        width: size.size315,
        height: size.size111,
        borderColor: 'gray',
        borderRadius:size.size6,
        marginVertical: size.size12,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: size.size14,
        backgroundColor: 'white'
    },
    eventLine:{
        width: size.size6,
        backgroundColor: '#F4C584',
        borderBottomLeftRadius:  size.size6,
        borderTopLeftRadius: size.size6,
    },
    eventDesc:{
        fontSize: size.size12,
        fontFamily: 'Montserrat-Regular',
        color: '#616062',
        marginTop: size.size12,
    },
    eventData:{
        color: '#949494',
        fontSize: size.size12,
        fontFamily: 'Montserrat-Regular',
        marginRight: size.size26,
    },
    eventContent:{
        width:size.size315,
        padding: size.size5,
    },
    eventHeader:{
        fontSize: size.size16,
        color: '#616062',
        fontFamily: 'Montserrat-Regular',
    },
    eventsGlobalBlock1: {
        height: size.size400,
        position: "absolute",
        top: size.size220
    }
});
export default style;

