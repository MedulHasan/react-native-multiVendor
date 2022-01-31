import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registration' component={Registration} />
        </Stack.Navigator>
    );
};

export default RootStack;
