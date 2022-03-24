import React from 'react';

import DrawerStack from './DrawerStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {    

  return(
    <NavigationContainer>
        <Stack.Navigator>
              {(
                <Stack.Group screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Principal" component={DrawerStack} />
                </Stack.Group>
              )}
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default RootStack;