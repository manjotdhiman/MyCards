import React, { useRef,useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import TopView from '../CardDetail/components/TopView';
import { colors } from '../../../../Constants/theme';
import { TextInputMask } from 'react-native-masked-text'
import Button from "./../../../../Components/Button";
import { updateCard } from '../../../../actions';
import { useDispatch } from 'react-redux';
export default ({ navigation, route }) => {
const dispatch = useDispatch();
    const { item } = route.params;
    const [amount, setAmount] = useState(item.limit?item.limit:"");
    let moneyField = useRef(null);
    const templates = ["5000","10000","20000"];
    const TemplateButton = (val)=>(<TouchableOpacity onPress={()=>setAmount(val)}
    style={{ padding:10,paddingRight:20,paddingLeft:20, backgroundColor:"#ddffdd99",alignItems:"center",justifyContent:"center"}}>
        <Text style={styles.text3} >$$ {val}</Text>
    </TouchableOpacity>)
const save = ()=>{
dispatch(updateCard(item.card_number,moneyField.getRawValue()+""));
navigation.goBack();
}

    return (
        <View style={styles.container} >
            <View style={styles.cardView} >
                <Text style={styles.header} >Spending limit</Text>

            </View>
            <View style={{
                ...styles.cardAnimateView,
            }}><View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require("./../../../../../assets/images/Group1242.png")} style={{ marginRight: 10 }} ></Image>
                    <Text style={styles.itemHeader}>Set a weekly debit card spending limit</Text>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 11, borderBottomWidth: 0.5, borderColor: colors.lightBorder }} >
                    <View style={styles.price}>
                        <Text style={styles.text2} >$$</Text>
                    </View>
                    <TextInputMask
                    ref={(ref)=>moneyField=ref}
                        type={'money'} style={styles.inputs} type={'money'}
                        options={{
                            precision:0,
                            separator: '.',
                            delimiter: ',',
                            unit: '',
                            suffixUnit: ''
                        }} keyboardType="numeric" value={amount+""} onChangeText={(value)=>setAmount(value)} ></TextInputMask>
                </View>
                <Text style={styles.info}>Here weekly means the last 7 days - not the calendar week</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                {templates.map(v=>TemplateButton(v))}

                </View></View>
                <Button title={"Save"} onPress={save} /> 
            </View>
        </View>

    );
}

