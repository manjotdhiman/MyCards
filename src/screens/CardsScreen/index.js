import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, loading } from '../../selectors/cards';
import { fetchCards } from '../../actions';
import { colors } from '../../Constants/theme';
const path ="./../../../assets/images/";
const img= path+"pay_2x.png";
export default ({ navigation }) => {
 const dispatch = useDispatch();
 useEffect(()=>{
loadData();
 },[])
  const loadData=()=>{
    dispatch(fetchCards());
  }
  const cards = useSelector(getCards);
  const refreshing = useSelector(loading);
  console.log("cards:",cards);
const openCard =(item) =>{
navigation.navigate("CardDetailScreen",{item})
}
const CardItem = ({item})=>{
  console.log("i=",item);
  return(
  <TouchableOpacity onPress={()=>openCard(item)} style={{flexDirection:"row", borderBottomColor:colors.lightBorder,borderBottomWidth:0.5,padding:20}} >
  <Image source={require(img)}  />
  <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10 }}>**** **** **** {item.card_number.substring(item.card_number.length-4,item.card_number.length)}</Text>
  </TouchableOpacity>
)}
  return (
       <View style={{flex:1}}>
        <FlatList 
        data={cards}
        renderItem={({item})=><CardItem item={item} />}
        keyExtractor={(item)=>item.card_number}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
        ListEmptyComponent={<View style={{alignItems:"center"}}><Text>No cards found</Text></View>}
        /></View>

  );
}

