import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LogIn = ({ navigation }) => {
    const [login, setLogin] = useState("")
  return (
    <View style={styles.box}>
      <Text>Veuillez vous connecter :</Text>
      <TextInput style={styles.input} placeholder="Email" value={login} onChangeText={(texte) => setLogin(texte)} />
      <TextInput style={styles.input} placeholder="Mot de passe" />
      <View style={{flexDirection: "row", gap: 20, justifyContent: "center" }}>
        <Button title="Se connecter" onPress={() => {}} />
        <Button
          title="Créer un compte"
          onPress={() => {
            navigation.navigate("CreateAccount", {query : login});
          }}
        />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    margin: 25,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
});
