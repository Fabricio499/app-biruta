import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MainView } from '../screens/mainview';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: "#F3F3F3" },
          tabBarInactiveTintColor: "#00ABE8",
          tabBarActiveTintColor: "#28587B",
        }}>
            <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cloud" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MainView"
        component={MainView}
        options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-on" color={color} size={size} />
          ),
        }}
      />
        </Tab.Navigator>
    )
}

export default TabNavigation;