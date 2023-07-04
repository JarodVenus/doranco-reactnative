import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'

const CreateAccount = ({navigation , route}) => {
  return (
    <View style={styles.box}>
      <Text>Créer votre Compte !</Text>
      <Text>Entrez votre pseudo :</Text>
      <TextInput style={styles.input} placeholder="Pseudo original" />
      <Text>Entrez votre Email :</Text>
      <Text>{ JSON.stringify(route.params.query) }</Text>
      <TextInput style={styles.input} placeholder="Email@login.com" value={route.params.query} />
      <Text>Entrez votre mot de passe :</Text>
      <TextInput style={styles.input} placeholder="MotDePasse123 n'est pas un bon mot de passe" />
      <Button title="Créer mon compte !" onPress={() => {navigation.goBack("LogIn")}} />
    </View>
  )
}

export default CreateAccount

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
        padding: 10
      },
})