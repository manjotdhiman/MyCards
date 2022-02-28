import React, {  } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './../styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Switch from '../../../../../Components/Switch';
const path ="./../../../../../../assets/images/";
const images= [
    require(path+"insight.png"),
    require(path+"Transfer-2.png"),
    require(path+"insight.png"),
    require(path+"Transfer-1.png"),
    require(path+"Transfer.png")
];
export default ({item})=>(
    <View style={{flexDirection:"row", padding:wp(1),alignItems:"center",marginTop:20,justifyContent:"space-between"}} >
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={images[item.icon]} />
        <View style={{marginLeft:10}}>
            <Text style={styles.itemHeader} >{item.title}</Text>
            <Text style={{...styles.itemBody,width:item.switch?wp(65):wp(80),
        }} ellipsizeMode="tail" numberOfLines={2}>{item.desc}</Text>
        </View></View>
        {item.switch && <Switch item={item} />}
    </View>
)