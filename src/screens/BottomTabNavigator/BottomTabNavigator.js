import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../Search/Search';
import User from '../User/User';
import Home from '../Home/Home';
import Ticket from '../Ticket/Ticket';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 8,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.orange} : {},
                ]}>
                <Octicons name="video" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.orange} : {},
                ]}>
                <AntDesign name="search1" size={20} color={COLORS.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.orange} : {},
                ]}>
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={24}
                  color={COLORS.white}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.orange} : {},
                ]}>
                <AntDesign name="user" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});
