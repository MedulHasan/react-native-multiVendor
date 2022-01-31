import "react-native-gesture-handler";
import React, { useEffect, useMemo } from "react";
import {
    AsyncStorage,
    Alert,
    View,
    ActivityIndicator,
    SafeAreaView,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context/AuthContext";
import { initialState, reducer } from "./hooks/Authentication";
import RootStack from "./components/Stack/RootStack";
import DrawerStack from "./components/Stack/DrawerStack";

export default function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    let userToken;
    useEffect(async () => {
        try {
            userToken = await AsyncStorage.getItem("isLoggedIn");
        } catch (e) {}
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
    }, [userToken]);

    const authContext = useMemo(() => ({
        signIn: async (data) => {
            const validUserInfo = state.allUserInfo.find(
                (user) =>
                    user.email === data.email && user.password === data.password
            );
            if (validUserInfo === undefined) {
                Alert.alert("Invalid user!", "Email or password is Incorrect");
            } else {
                try {
                    await AsyncStorage.setItem("isLoggedIn", "1");
                    dispatch({ type: "SIGN_IN", token: "mmm" });
                } catch {}
            }
        },
        signOut: async () => {
            await AsyncStorage.removeItem("isLoggedIn");
            dispatch({ type: "SIGN_OUT" });
        },
        signUp: async (data) => {
            await AsyncStorage.setItem("isLoggedIn", "1");
            dispatch({ type: "SIGN_UP", token: "mmm", data: data });
        },
    }));

    if (state.isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return (
        <>
            <AuthContext.Provider value={authContext}>
                <NativeBaseProvider>
                    <SafeAreaView
                        style={{
                            flex: 1,
                        }}
                    >
                        <NavigationContainer>
                            {state.userToken ? <DrawerStack /> : <RootStack />}
                        </NavigationContainer>
                    </SafeAreaView>
                </NativeBaseProvider>
            </AuthContext.Provider>
        </>
    );
}
