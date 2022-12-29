import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'
import LoginScreens from './src/components/loginScreens';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Login' component={LoginScreens}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App