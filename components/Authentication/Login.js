import React, { useContext, useState } from "react";
import { styles } from "../Authentication/style";
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    AsyncStorage,
    KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { internalStyles } from "./Registration";

const Login = ({ state }) => {
    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);

    let regEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;

    const [data, setData] = useState({
        email: "",
        password: "",
        errorEmailText: "",
        isValidUser: true,
        errorPasswordText: "",
        isValidPassword: true,
    });

    const handleEmailChange = (text) => {
        if (text.length === 0) {
            setData({
                ...data,
                email: text,
                errorEmailText: "Email address must be enter",
                isValidUser: false,
            });
        } else if (regEmail.test(text) === false) {
            setData({
                ...data,
                email: text,
                errorEmailText: "Enter valid email address",
                isValidUser: false,
            });
        } else if (regEmail.test(text) === true) {
            setData({
                ...data,
                errorEmailText: "",
                email: text,
                isValidUser: true,
            });
        }
    };
    const handlePasswordChange = (text) => {
        if (text.length >= 6) {
            setData({ ...data, password: text, isValidPassword: true });
        } else {
            setData({
                ...data,
                password: text,
                errorPasswordText: "Password must be 6 char logh",
                isValidPassword: false,
            });
        }
    };
    const loginFunction = async () => {
        if (data.email === "" && data.password === "") {
            setData({
                ...data,
                errorEmailText: "Email address must be enter",
                errorPasswordText: "Password must be enter",
                isValidUser: false,
                isValidPassword: false,
            });
        } else if (!data.email) {
            setData({
                ...data,
                errorEmailText: "Email address must be enter",
                errorPasswordText: "",
                isValidUser: false,
                isValidPassword: true,
            });
        } else if (!data.password) {
            setData({
                ...data,
                errorEmailText: "",
                errorPasswordText: "Password must be enter",
                isValidPassword: false,
                isValidUser: true,
            });
        } else {
            signIn(data);
        }
    };

    return (
        <KeyboardAvoidingView
            style={[internalStyles.container, styles.container]}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login To My App</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Email'
                    onChangeText={(text) => handleEmailChange(text)}
                    onEndEditing={(e) => handleEmailChange(e.nativeEvent.text)}
                />
                <Text style={styles.errorMsg}>
                    {data.isValidUser ? "" : data.errorEmailText}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Password'
                    secureTextEntry
                    onChangeText={(text) => handlePasswordChange(text)}
                    onEndEditing={(e) =>
                        handlePasswordChange(e.nativeEvent.text)
                    }
                />
                <Text style={styles.errorMsg}>
                    {data.isValidPassword ? "" : data.errorPasswordText}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={loginFunction}
                    >
                        <Text style={styles.btnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => navigation.navigate("Registration")}
                    >
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
