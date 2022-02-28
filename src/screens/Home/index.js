import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, Animated, StyleSheet } from 'react-native';
import { PanResponder } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';
import Button from "../../Components/Button";
import styles from './styles';
import { getCards } from '../../selectors/cards';
export default ({ navigation }) => {

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Select screen which you want to see</Text>
      <Button onPress={()=>navigation.navigate("CardsScreen")} title="Cards Screen" />
     
    </View>

  );
}

