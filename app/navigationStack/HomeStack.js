import React from 'react';

import HomeScreen from '../screens/principal/HomeScreen';
import Intro from '../screens/principal/Intro';
import DetailScreen from '../screens/principal/DetailScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

  return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro" component={Intro} /> 
                <Stack.Screen name="Home" component={HomeScreen} /> 
                <Stack.Screen name="Detail" component={DetailScreen} /> 
            </Stack.Group>
        </Stack.Navigator>
  );
};

export default HomeStack;