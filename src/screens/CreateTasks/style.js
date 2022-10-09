import {StyleSheet} from "react-native";
import size from "../../utils/Size";


const style = StyleSheet.create({
    body: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        position: "relative",
        backgroundColor: 'white'
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
    titleInput: {
        borderBottomWidth: size.size05,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        width: size.size313,
        paddingLeft: size.size17,
        marginTop: size.size49,
        fontFamily: 'Montserrat-Regular',
        fontStyle: 'normal',
        fontSize: size.size12,
        lineHeight: size.size15,
    },
    projectButton: {
        width: size.size313,
        flexDirection: 'row',
        paddingLeft: size.size17,
        paddingRight: size.size13,
        paddingTop: size.size12,
        paddingBottom: size.size12,
        borderBottomWidth: size.size05,
        borderColor: '#E3E3E3',
        borderStyle: 'solid',
        marginTop: size.size10
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
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    projectTitleText: {
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontSize: size.size14,
        lineHeight: size.size16,
        letterSpacing: size.size025,
        color: '#616062',
    },
    gestureBlockView: {
        flex: 1 ,
        padding: size.size24,
        backgroundColor: 'rgba(0 , 0 , 0 , 0.7)'
    },
    selectButton: {
        width: size.size335,
        backgroundColor: '#11493E',
        marginTop: size.size120,
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
        width: size.size342,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        flexWrap: 'wrap',
    },
    durationButton: {
        width: size.size100,
        marginTop: size.size20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: size.size7,
        paddingBottom: size.size7,
        borderColor: '#347474',
        borderWidth: size.size1,
        borderStyle: 'solid',
        borderRadius: size.size5,
    },
    durationButtonText:{
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