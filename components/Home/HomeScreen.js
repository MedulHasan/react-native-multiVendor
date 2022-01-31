import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

const HomeScreen = ({ navigation }) => {
    const { signOut } = useContext(AuthContext);
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text> Welcome to our Home Screen - </Text>
        </View>
    );
};

export default HomeScreen;
