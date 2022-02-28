import React, {  } from 'react';
import { View, Text } from 'react-native';
import styles from './../styles';

export default ({ item }) => (<View style={styles.cardView} >
    <Text style={styles.header} >Debit Card</Text>
    <Text style={styles.text1} >Available balance</Text>
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 11 }} >
        <View style={styles.price}>
            <Text style={styles.text2} >$$</Text>
        </View>
        <Text style={styles.amount} >{item.balance}</Text>
    </View>
</View>)