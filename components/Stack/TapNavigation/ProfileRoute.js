import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../screens/Profile/Profile";
import EditProfile from "../../../screens/EditProfile/EditProfile";

const Stack = createNativeStackNavigator();

const ProfileRoute = () => {
    return (
        <Stack.Navigator initialRouteName='RootProfile'>
            <Stack.Screen name='RootProfile' component={Profile} />
            <Stack.Screen name='edit-profile' component={EditProfile} />
        </Stack.Navigator>
    );
};

export default ProfileRoute;
