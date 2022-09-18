import React from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cadastro" component={SettingsScreen} />
    </Tab.Navigator>
  );
}