import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import CardsScreen from '../screens/CardsScreen';
import { colors } from '../Constants/theme';
import LimitScreen from '../screens/CardsScreen/screens/LimitScreen';
import CardDetail from '../screens/CardsScreen/screens/CardDetail';
const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primaryColor

                },
                headerTitleStyle: { color: colors.textButtonColor },
                headerTintColor: colors.textButtonColor

            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "My Widgets" }} />
            <Stack.Screen name="CardsScreen" component={CardsScreen} options={{ title: "Cards Screen" }} />
            <Stack.Screen name="CardDetailScreen" component={CardDetail} options={{ headerShown:false }} />
            <Stack.Screen name="LimitScreen" component={LimitScreen} options={{  headerShown:false }} />
        </Stack.Navigator>
    );
}
const MainStackNavigator = () => {

    return (
        <NavigationContainer>
        <AppStack />
        </NavigationContainer>
    )
}
export default MainStackNavigator;