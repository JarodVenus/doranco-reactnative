import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ModifPwd = ({navigation}) => {
  return (
    <View style={styles.box}>
      <Text>Tapez votre nouveau mot de passe :</Text>
      <TextInput placeholder="Nouveau mot de passe" />
      <Button title="Revenir en arrière" onPress={() => {navigation.goBack()}} />
    </View>
  )
}

export default ModifPwd

const styles = StyleSheet.create({
    box : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})