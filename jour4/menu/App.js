import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Accueil from './Components/Accueil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilNavig from './Components/ProfilNavig';
import LogInNav from './Components/LogInNav';



const Menu = createBottomTabNavigator()

export default function App() {

  const profil = {
    nom : "Alain",
    logged : true
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Menu.Navigator initialRouteName='Accueil' screenOptions={{
          tabBarActiveBackgroundColor: "#eee",
          tabBarShowLabel: false,
          title: "InstaBook"
        }} >
          <Menu.Screen name="Accueil" component={Accueil}
            options={{
              tabBarIcon : function(){
              return <MaterialCommunityIcons name="home" color="black" size={30} />
            }
            }}
           />
           {profil.logged === true 
           ?
            <Menu.Screen name="ProfilNav" component={ProfilNavig} 
              options={{
                tabBarIcon : function(){
                return <MaterialCommunityIcons name="account" color="black" size={30} />
              }
              }}
            />
           :

            <Menu.Screen name="Connexion" component={LogInNav} 
              options={{
                tabBarIcon : function(){
                return <MaterialCommunityIcons name="lock-open" color="black" size={30} />
              }
              }}
            />
           }
        </Menu.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
