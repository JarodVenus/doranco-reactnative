import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Profil = ({navigation}) => {
  return (
    <View style={styles.box}>
      <View style={styles.box2}>
        <Text style={styles.titre}>Profil</Text>
        <Button
          title="Modifier mot de passe"
          onPress={() => {
            navigation.navigate("ModifPwd");
          }}
        />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titre: {
    fontSize: 30,
  },
  box2: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    gap: 200,
  },
});
