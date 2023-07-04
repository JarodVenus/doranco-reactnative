import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';

const Stack = createNativeStackNavigator();

const LogInNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default LogInNav