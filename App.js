/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './src/navigation';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { colors } from './src/Constants/theme';
import store from './src/store';
import { Provider } from 'react-redux';
const App = () => {
  
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor={colors.primaryColor} />
      <MainStackNavigator /></Provider>
  );
};


export default App;
