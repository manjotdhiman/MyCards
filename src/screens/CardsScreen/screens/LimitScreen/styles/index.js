
import { StyleSheet } from "react-native";
import { colors } from "../../../../../Constants/theme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        //  padding: 10
    },
    cardView2: {
        flexDirection: "row",
        backgroundColor: colors.textButtonColor, width: wp(35), height: hp(4),
        borderTopEndRadius: 6, borderTopLeftRadius: 6, position: "absolute", paddingLeft: 5, paddingRight: 5,
        marginTop: -hp(11.5), right: 19, alignItems: "center", justifyContent: "center", justifyContent: "space-around"
    },
    price: {
        backgroundColor: colors.secondaryColor,
        height: 22, width: 40, borderRadius: 4, alignItems: "center", justifyContent: "center", marginRight: 10
    },
    inputs:{flex:1,
color:"#000",
fontSize:24,
fontFamily: "AvenirNextLTPro-Bold",
    },
    info: { color: colors.lightBorder, fontFamily: "AvenirNextLTPro-Regular",marginTop:10 },
    textGreen: {
        fontSize: 12,
        color: colors.secondaryColor,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    cardView: { justifyContent: "space-between", padding: wp(7), marginBottom: hp(8) },
    cardAnimateView: {flex:1,
         width: wp(100), padding: 20,justifyContent:"space-between",
        backgroundColor: colors.textButtonColor, borderTopEndRadius: 24, borderTopLeftRadius: 24
    },
    logo: { position: "absolute", right: wp(5), top: wp(5) },
    header: {
        fontSize: 24,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Bold",
        marginBottom: 23
        // fontWeight:"bold"
    },
    itemHeader: {
        fontSize: 14,
        color: colors.primaryColor,
        fontWeight: "800",
        fontFamily: "AvenirNextLTPro-Regular",
    },
    itemBody: {
        fontSize: 13,
        color: colors.textColorSecondary,
        fontFamily: "AvenirNextLTPro-Regular",
        opacity: 0.4
    },
    amount: {
        fontSize: 24,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Bold",

        // fontWeight:"bold"
    },
    text1: {
        fontSize: 14,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    text13: {
        fontSize: 13,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Regular",
        fontWeight: "700",
        marginRight: wp(4),
        //  letterSpacing:3.4
    },
    text1Bold: {
        fontSize: 14,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Regular",
        marginRight: wp(4),
        letterSpacing: 3.4,
        textAlignVertical: "center"
    },
    dotStyle: { marginRight: wp(4), },
    text2: {
        fontSize: 12,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Bold",
    },
    text3: {
        opacity:1,
        fontSize: 12,
        color: colors.secondaryColor,
        fontFamily: "AvenirNextLTPro-Bold",
    },
    textAmount: {
        fontSize: 14,
        color: colors.textButtonColor,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    knobContainer: {
        marginTop: 50,
        flex: 1, alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: "#fff",
        height: 40,
        margin: 5,
        borderRadius: 10
    },
    label: {
        marginLeft: 5,
        fontSize: 16, fontWeight: "bold",
        marginTop: 15,
        marginLeft: 5,
    },
    error: {
        color: colors.textColorError
    },
    emptyText: { color: "#000", alignSelf: "center", justifyContent: "center", fontSize: 16 },
    inputPicker: {
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    itemContainer: { flex: 1, alignItems: 'stretch', justifyContent: 'space-between' },
    text: {
        color: colors.textButtonColor,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 15
    },
    color: {
        color: colors.textColorSecondary

    },

    rightContainer:
    {
        flexDirection: "row"
    },
    detail: {
        padding: 10, borderBottomWidth: 1, borderColor: colors.secondaryColor,
        flexDirection: "row", flex: 1, justifyContent: "space-between"
    },
    right: { width: 70, alignItems: "center", justifyContent: "center", backgroundColor: colors.textColorError, justifyContent: 'center' },
    rightEdit: { width: 70, alignItems: "center", justifyContent: "center", backgroundColor: "green", justifyContent: 'center' }
})