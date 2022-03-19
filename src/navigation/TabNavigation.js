import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Blank from "../screens/Blank";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#9E70A9",
        tabBarInactiveTintColor: "#222",
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   height: 80,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="search1" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Blank}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="hearto" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Blank}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="calendar" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Blank}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="user" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
