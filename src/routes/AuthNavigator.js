import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Ticket from '../screens/Ticket/Ticket';
import User from '../screens/User/User';
import MovieDetail from '../screens/MovieDetail/MovieDetail';
import BottomTabNavigator from '../screens/BottomTabNavigator/BottomTabNavigator';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const stack = createStackNavigator();
const AuthNavigator = () => {
  // const {user, loading} = useContext(AuthContext);
  // console.log('user here 1', user, loading);

  const user = true;
  const loading = false;

  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <stack.Screen name="Home" component={Home} />

          <stack.Screen name="Search" component={Search} />
          <stack.Screen name="Ticket" component={Ticket} />

          <stack.Screen name="User" component={User} />
          <stack.Screen name="MovieDetail" component={MovieDetail} />
        </>
      ) : (
        <>
          <stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <stack.Screen name="Home" component={Home} />

          <stack.Screen name="Search" component={Search} />
          <stack.Screen name="Ticket" component={Ticket} />

          <stack.Screen name="User" component={User} />
          <stack.Screen name="MovieDetail" component={MovieDetail} />
          {/* <stack.Screen name="Login" component={Login} /> */}
        </>
      )}
    </stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
