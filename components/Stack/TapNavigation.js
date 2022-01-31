import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Categories from "../../screens/Categories";
import Cart from "../../screens/Cart";
import HomeScreen from "../Home/HomeScreen";
import ProfileRoute from "./TapNavigation/ProfileRoute";

const Tab = createBottomTabNavigator();

const TapNavigation = () => {
    return (
        <Tab.Navigator
            activeColor='#fff'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Categories'
                component={Categories}
                options={{
                    tabBarLabel: "Categories",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='bars' color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileRoute}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='account'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name='shoppingcart'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TapNavigation;
