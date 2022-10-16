import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import AppScreen from "./screens/AppScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowImageScreen from "./screens/ShowImageScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return  (
      <NavigationContainer >
          <Stack.Navigator  screenOptions={{
              headerShown: false
          }}>
              <Stack.Screen name="App" component={AppScreen} />
              <Stack.Screen name="ShowImage" component={ShowImageScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor:'darkslategrey'
  },
    itemContainer:{
        borderRadius:8,
        margin:5,
        backgroundColor:'white'
    }
});
