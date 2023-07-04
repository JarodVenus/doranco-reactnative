import { Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profil from "./Profil";
import ModifPwd from "./ModifPwd";

const Stack = createNativeStackNavigator();

const ProfilNavig = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Profil" component={Profil} options={{headerShown: false}} />
      <Stack.Screen name="ModifPwd" component={ModifPwd} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default ProfilNavig;


