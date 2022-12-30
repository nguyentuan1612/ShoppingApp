import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Screens/home/home';
import CartScreen from '../components/Screens/cart/cart';
import FavoriteScreen from '../components/Screens/favorite/favorite';
import UserScreen from '../components/Screens/user/user';
const Tab = createBottomTabNavigator();
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeIcon from 'react-native-vector-icons/SimpleLineIcons';
import FavoriteIcon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome';

const RootMain = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
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
            tabBarShowLabel:false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: '#00FF47',
            tabBarInactiveTintColor: 'white',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => {
                return <HomeIcon name="home" size={25} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={
              {
                tabBarIcon: ({color}) => {
                  return <FavoriteIcon name="favorite-outline" size={28} color={color} />;
                },
              }
            }
          />
          <Tab.Screen
            name="CartScreen"
            component={CartScreen}
            options={
              {
                tabBarIcon: ({color}) => {
                  return <CartIcon name="cart-outline" size={30} color={color} />;
                },
              }
            }
          />
          <Tab.Screen
            name="User"
            component={UserScreen}
            options={
              {
                tabBarIcon: ({color}) => {
                  return <UserIcon name="user-o" size={25} color={color} />;
                },
              }
            }
          />
        </Tab.Navigator>
      </SafeAreaProvider>
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
