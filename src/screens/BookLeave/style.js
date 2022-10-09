import {StyleSheet} from "react-native";
import size from "../../utils/Size";


const style = StyleSheet.create({
    body: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        position: "relative",
        backgroundColor: 'white',
    },

    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        fontSize: size.size16,
        lineHeight: size.size24,
        letterSpacing: size.size025,
        color: '#1B3131',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: size.size36,
        // opacity: 0.5
    },
    gestureBlockView: {
        flex: 1 ,
        padding: size.size24,
        backgroundColor: 'rgba(0 , 0 , 0 , 0.7)'
    },
    typeText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#616062',
        marginRight: 'auto',
        marginTop: size.size22,
        marginLeft: size.size31,
    },
    titleInput: {
        borderBottomWidth: size.size05,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        width: size.size313,
        paddingLeft: size.size1 * -1,
        fontFamily: 'Montserrat-Regular',
        fontStyle: 'normal',
        fontSize: size.size12,
        lineHeight: size.size15,
        flexDirection: "row",
    },
    doneBlock: {
        alignItems: "center"
    },
    doneText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#6B6A6C',
        marginTop: size.size29
    },
    textArea: {
        width: size.size313,
        height: size.size70,
        borderWidth: size.size1,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        borderRadius: size.size6,
        paddingLeft: size.size025 * -1,
        fontFamily: 'Montserrat-Regular',
        fontStyle: 'normal',
        fontSize: size.size12,
        lineHeight: size.size15,
        flexDirection: "row",
        marginTop: size.size20,
        paddingBottom: size.size40
    },
    durTextArea: {
        width: size.size330,
        height: size.size91,
        borderWidth: size.size1,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        borderRadius: size.size6,
        fontFamily: 'Montserrat-Regular',
        fontStyle: 'normal',
        fontSize: size.size12,
        lineHeight: size.size15,
        flexDirection: "row",
        marginTop: size.size20,
        paddingBottom: size.size64,
        paddingLeft: size.size17,
        marginLeft: size.size24,
    },
    time: {
        color: '#FCFCFC',
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size16,
        lineHeight: size.size24,
        letterSpacing: size.size025,
    },
    projectButton: {
        width: size.size313,
        flexDirection: 'row',
        paddingRight: size.size13,
        paddingTop: size.size12,
        paddingBottom: size.size12,
        borderBottomWidth: size.size05,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        marginTop: size.size20
    },
    projectButtonText: {
        fontFamily: 'Montserrat-Regular',
        fontStyle: 'normal',
        fontSize: size.size12,
        lineHeight: size.size15,
        color: '#818195',
    },
    projectButtonSvg: {
        marginLeft: 'auto',
    },
    organizerBlock: {
        flexDirection: "row",
        marginLeft: size.size20,
        marginTop: size.size6,
        alignItems: "center"
    },
    roomBlock: {
        flexDirection: "row",
        marginLeft: size.size20,
        marginTop: size.size6,
        alignItems: "center",
        paddingBottom: size.size36,
        borderBottomWidth: size.size05,
        borderBottomColor: '#E3E3E3',
        borderStyle: 'solid',
        marginBottom: size.size10,
        width: size.size293
    },
    geoSvg: {
        marginLeft: 'auto',
        marginRight: size.size12

    },
    gestureBlock: {
        width: '100%',
        height: '100%',
        position: "absolute"
    },
    closeSvg: {
        marginLeft: 'auto',
        marginRight: size.size23
    },
    projectTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        fontSize: size.size16,
        lineHeight: size.size24,
        letterSpacing: size.size025,
        color: '#11493E',
        marginLeft: size.size28
    },
    hourlyLeaveTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontStyle: 'normal',
        fontSize: size.size16,
        lineHeight: size.size24,
        letterSpacing: size.size025,
        color: '#11493E',
        marginLeft: size.size24,
        marginBottom: size.size21
    },
    dataPickerButton: {
        width: size.size330,
        height: size.size38,
        paddingLeft: size.size17,
        paddingRight: size.size15,
        backgroundColor: '#347474',
        borderWidth: size.size1 ,
        borderStyle: 'solid',
        borderColor: '#347474',
        borderRadius: size.size4,
        marginLeft: size.size24,
        marginBottom: size.size10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    projectTitleText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#616062',
    },
    selectButton: {
        width: size.size335,
        backgroundColor: '#11493E',
        marginTop: size.size70,
        paddingTop: size.size11,
        paddingBottom: size.size11,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 'auto',
        marginLeft: 'auto',
        borderStyle: 'solid',
        borderWidth: size.size1,
        borderRadius: size.size4
    },
    selectText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#FCFCFC',
    },
    durationBlock: {
        width: size.size330,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        flexWrap: 'wrap',
    },
    durationButton: {
        width: size.size132,
        marginTop: size.size15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: size.size7,
        paddingBottom: size.size7,
        borderColor: '#347474',
        borderWidth: size.size1,
        borderStyle: 'solid',
        borderRadius: size.size5,
    },
    durationButtonText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#949494'
    },
    durationText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        marginTop: size.size24,
        marginRight: 'auto',
        marginLeft: 'auto',
    }
})

export default style
