import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Animated, PanResponder, Text, Image } from 'react-native';
import styles from './../styles';
import Logo from "../../../../../../assets/svg/Logo.svg";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { debounce } from "lodash";
import TopView from './TopView';
import Item from './Item';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../../../actions';
import { colors } from '../../../../../Constants/theme';
const path = "./../../../../../../assets/images/";
export default ({ item, navigation }) => {
    const dispatch = useDispatch();
    const [items, setItems] = useState();
    const pan = useRef(new Animated.ValueXY()).current;
    const min = -hp(17), max = 0;
    const goToLimit = (v) => {
        console.log("val", v);
        setItems(x => x.map(val => {
            if (val.key == 1) {
                val.value = v;
                return val;
            }
            else return val;
        }))
        if (v == true) {
            navigation.navigate("LimitScreen", { item })
        } else {
            dispatch(updateCard(item.card_number, 0));
        }

    }
    const freeze = (v) => {
        console.log("val", v);
        setItems(x => x.map(val => {
            if (val.key == 2) {
                val.value = v;
                return val;
            }
            else return val;
        }))


    }
    useEffect(() => {
        setItems([
            { key: 0, title: "Top-up account", desc: "Deposit money to your account to use with card", icon: 0, switch: false, onPress: () => console.log("nothing") },
            {
                key: 1, title: "Weekly spending limit", desc: "You haven’t set any spending limit on card", icon: 1, switch: true,
                value: item.limit == 0 ? false : true, onPress: goToLimit
            },
            { key: 2, title: "Freeze card", desc: "Your debit card is currently active", icon: 2, switch: true, value: item.freezed, onPress: freeze },
            { key: 3, title: "Get a new card", desc: "This deactivates your current debit card", icon: 3, switch: false, onPress: () => console.log("nothing") },
            { key: 4, title: "Deactivated cards", desc: "Your previously deactivated cards", icon: 4, switch: false, onPress: () => console.log("nothing") },
        ])
    }, [])
    pan.addListener(pan => {
        console.log("inlistner", pan.y);
        if (pan.y < min) {
            handler(min, pan.y);
        } else if (pan.y > max) {
            handler(max, pan.y)
        }

    });

    const handler = debounce(onChange, 500);

    function onChange(value, y) {
        pan.setValue({ x: 0, y: value })
    };
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => handleOutput(e, gestureState),
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: (e, gestureState) => handleChange(e, gestureState),
            onPanResponderRelease: () => {

                pan.flattenOffset();


            }
        })
    ).current;

    const handleOutput = (e, gestureState) => {
        console.log("gs:", Math.abs(gestureState.dy), pan.y._value);
        return Math.abs(gestureState.dx) < Math.abs(gestureState.dy) && Math.abs(gestureState.dy) > 0;
    }

    const handleChange = (e, gestureState) => {
        console.log("dy=", gestureState.dy, pan, gestureState.dy + pan.y._value);
        if (Math.abs(gestureState.dx) > 1) {
            Animated.event(
                [
                    null,
                    { dy: pan.y }
                ], { useNativeDriver: false }
            )(e, gestureState)
        }
    }




    return (
        <><Logo style={styles.logo} width={25} height={25} />
            <TopView item={item} />
            <Animated.View style={{
                ...styles.cardAnimateView,
                transform: [{
                    translateY: pan.y.interpolate({
                        inputRange: [min, max],
                        outputRange: [min, max],
                        extrapolate: "clamp"
                    })
                }]
            }}
                {...panResponder.panHandlers}
            >
                <Card item={item} />
                {item.limit > 0 && <><View style={{ margin: 20, marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.itemHeader}>Debit card spending limit</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text13Green}>{item.limit/2}</Text>
                        <Text style={styles.text13Grey}>|</Text>
                        <Text style={styles.text13Grey}>{item.limit}</Text>
                    </View>
                </View>
                    <View style={{ height: 15, marginLeft: 20, marginRight: 20 }}>
                        <View style={{ overflow: "hidden", borderRadius: 30, height: 15, backgroundColor: "#ddD1dd", flex: 1 }}>
                            <View style={{ alignItems: "flex-end", height: 15, backgroundColor: colors.secondaryColor, width: (((item.limit/2)/item.limit)*100)+"%" }}>
                                <Image source={require(path + "bar.png")} style={{ marginRight: -10 }} />
                            </View>
                        </View>
                    </View>
                </>}
                <FlatList
                    data={items}
                    renderItem={({ item }) => <Item item={item} />}
                    contentContainerStyle={{ padding: 20 }}
                />
            </Animated.View>
        </>
    )

}

