import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import BottomTabNavigator from './src/screens/BottomTabNavigator/BottomTabNavigator';
import Search from './src/screens/Search/Search';
import User from './src/screens/User/User';
import Ticket from './src/screens/Ticket/Ticket';
import MovieDetail from './src/screens/MovieDetail/MovieDetail';
import AuthNavigator from './src/routes/AuthNavigator';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    // <AuthProvider>
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
