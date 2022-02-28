import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './../styles';
import Visa from "../../../../../../assets/svg/Visa Logo.svg";
import Aspire from "../../../../../../assets/svg/Aspire Logo.svg";
import { colors } from '../../../../../Constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FA5 from "react-native-vector-icons/FontAwesome5";
import OCT from "react-native-vector-icons/Octicons"
export default ({ item }) => {
    console.log("item:",item);
    const [numberHide, setNumberHide] = useState(true);
    const showButton = () => (
        <TouchableOpacity style={styles.cardView2} onPress={() => setNumberHide(x => !x)}>
            <Image source={require("./../../../../../../assets/images/remove_red_eye-24px.png")}
                style={{ width: 16, height: 16 }} />
            <Text style={styles.textGreen} >Show card number</Text>
        </TouchableOpacity>
    )
    const hideButton = () => (
        <TouchableOpacity style={styles.cardView2} onPress={() => setNumberHide(x => !x)}>
            <Image source={require("./../../../../../../assets/images/Group2370.png")}
                style={{ width: 16, height: 16 }} />
            <Text style={styles.textGreen} >Hide card number</Text>
        </TouchableOpacity>
    )
    return (<>{numberHide ? showButton() : hideButton()}
        <View style={{
            backgroundColor: colors.secondaryColor, width: wp(90), height: hp(28), borderRadius: 8, alignSelf: "center"
            , marginTop: -hp(8), justifyContent: "space-around", padding: 20
        }} >

            <Aspire style={{ alignSelf: "flex-end" }} width={59} height={20} />
            <Text style={styles.header}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
                {item.card_number.match(/.{1,4}/g).map((x, index) => (
                    numberHide && index < 3 ?
                        <View style={{ flexDirection: "row", marginRight: wp(4) }}>
                            {[1, 2, 3, 4].map(() => <OCT style={{ marginRight: 4.5 }} name="dot-fill" color={"#fff"} size={14} />)}</View> :
                        <Text key={index + ""} style={styles.text1Bold}>{x}</Text>

                ))}


            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.text13}>Thru: {item.valid}</Text>
                <Text style={styles.text13}>CVV: {numberHide ? "***" : item.cvv}</Text>

            </View>
            <Visa style={{ alignSelf: "flex-end" }} width={59} height={20} />
        </View></>)
}