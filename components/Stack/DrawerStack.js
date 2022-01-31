import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TapNavigation from "./TapNavigation";
import DrawerContainer from "./DrawerContainer";
import Setting from "../../screens/Setting";
import Bookmark from "../../screens/Bookmark";

const Drawer = createDrawerNavigator();

const DrawerStack = () => (
    <Drawer.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContainer {...props} />}
    >
        <Drawer.Screen name='HomeScreen' component={TapNavigation} />
        <Drawer.Screen name='Setting' component={Setting} />
        <Drawer.Screen name='Bookmark' component={Bookmark} />
    </Drawer.Navigator>
);

export default DrawerStack;
