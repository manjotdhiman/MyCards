import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import CardView from './components/CardView';
export default ({ navigation, route }) => {

    const { item } = route.params;
 
    return (
        <View style={styles.container} >
            <CardView item={item} navigation={navigation} />
        </View>

    );
}

