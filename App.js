import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RootMain from './src/root/rootMain';
import LoginScreens from './src/components/Screens/login/loginScreens';
import ShowProductScreen from './src/components/Screens/home/showProduct/showProduct';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreens} />
            <Stack.Screen name="RootMain" component={RootMain} />
            <Stack.Screen name="showProduct" component={ShowProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
