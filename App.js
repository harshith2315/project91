import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import addingScreen from './screens/addingScreen'
import Homescreen from './screens/homeScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  getaddScreen = () => {
    console.log("get")
    this.props.navigation.navigate('Homescreen');
  }
  render(){
  return (
    <SafeAreaProvider>
     <AppContainer/>   
    </SafeAreaProvider> 
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  addingScreen: {screen: addingScreen},
  Homescreen: {screen: Homescreen},
},
);

const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
