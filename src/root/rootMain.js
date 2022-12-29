import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Screens/home/home';
import CartScreen from '../components/Screens/cart/cart';
import FavoriteScreen from '../components/Screens/favorite/favorite';
import UserScreen from '../components/Screens/user/user';

const Tab = createBottomTabNavigator();
const RootMain = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#9775FA',
            borderRadius: 20,
            marginBottom: 7,
            marginHorizontal: 10,
          },

          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#00FF47',
          tabBarInactiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarIcon: ({color}) => {
            //   return <MaterialIcons name="home" size={30} color={color} />;
            // },
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            // tabBarIcon: ({color}) => {
            //   return <MaterialIcons name="favorite" size={30} color={color} />;
            // },
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            // tabBarIcon: ({color}) => {
            //   return (
            //     <MaterialIcons name="shopping-cart" size={30} color={color} />
            //   );
            // },
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            // tabBarIcon: ({color}) => {
            //   return (
            //     <MaterialIcons name="account-circle" size={30} color={color} />
            //   );
            // },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default RootMain;
