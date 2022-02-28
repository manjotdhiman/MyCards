import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../Constants/theme";
export default ({onPress,title})=>(
    <TouchableOpacity style={styles.button} onPress={onPress} >
         
    <Text style={styles.buttonText}>
        {title}
    </Text>

</TouchableOpacity>
)
const styles = StyleSheet.create({
    button: {
        height: 56,
        width:300,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: colors.secondaryColor,
       bottom:0,
       margin:5,
       alignSelf:"center",
       borderRadius:30,
       fontFamily: "AvenirNextLTPro-Bold",
    },
    buttonText:{
        color:colors.textButtonColor,
        fontSize:16,
        fontWeight:"600",
        fontFamily: "AvenirNextLTPro-Bold",
    }, 
})

