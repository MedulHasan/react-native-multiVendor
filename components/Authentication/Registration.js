import React, { useContext, useState } from "react";
import { styles } from "../Authentication/style";
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";
import { AuthContext } from "../../context/AuthContext";

const Registration = ({ navigation }) => {
    const { signUp } = useContext(AuthContext);
    const initialUserInfo = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorNameText: "",
        isValidName: true,
        errorEmailText: "",
        isValidEmail: true,
        errorPasswordText: "",
        isValidPassword: true,
        errorConfirmPasswordText: "",
        isValidConfirmPassword: true,
    };
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    let regEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const handleName = (text) => {
        if (text.length < 3) {
            setUserInfo({
                ...userInfo,
                name: text,
                isValidName: false,
                errorNameText: "Name must be enter",
            });
        } else {
            setUserInfo({
                ...userInfo,
                name: text,
                isValidName: false,
                errorNameText: "",
            });
        }
    };
    const handleEmail = (text) => {
        if (text.length === 0) {
            setUserInfo({
                ...userInfo,
                email: text,
                errorEmailText: "Email address must be enter",
                isValidEmail: false,
            });
        } else if (regEmail.test(text) === false) {
            setUserInfo({
                ...userInfo,
                email: text,
                errorEmailText: "Enter valid email address",
                isValidEmail: false,
            });
        } else if (regEmail.test(text) === true) {
            setUserInfo({
                ...userInfo,
                email: text,
                errorEmailText: "",
                isValidEmail: true,
            });
        }
    };

    const handlePassword = (text) => {
        if (text.length >= 6) {
            setUserInfo({
                ...userInfo,
                password: text,
                errorPasswordText: "",
                isValidPassword: true,
            });
        } else {
            setUserInfo({
                ...userInfo,
                password: text,
                errorPasswordText: "Password must be 6 char long",
                isValidPassword: false,
            });
        }
    };
    const handleConfirmPassword = (text) => {
        if (userInfo.password === text) {
            if (text.length >= 6) {
                setUserInfo({
                    ...userInfo,
                    confirmPassword: text,
                    errorConfirmPasswordText: "",
                    isValidConfirmPassword: true,
                });
            } else {
                setUserInfo({
                    ...userInfo,
                    confirmPassword: text,
                    errorConfirmPasswordText: "Password must be 6 char long",
                    isValidConfirmPassword: false,
                });
            }
        } else {
            setUserInfo({
                ...userInfo,
                confirmPassword: text,
                errorConfirmPasswordText:
                    "password and confirm password must be match",
                isValidConfirmPassword: false,
            });
        }
    };

    const handleSignUp = () => {
        if (
            userInfo.name === "" &&
            userInfo.email === "" &&
            userInfo.password === "" &&
            userInfo.confirmPassword === ""
        ) {
            setUserInfo({
                ...userInfo,
                errorNameText: "Name must be required",
                isValidName: false,
                errorEmailText: "Email must be required",
                isValidEmail: false,
                errorPasswordText: "Password must be required",
                isValidPassword: false,
                errorConfirmPasswordText: "Confirm password must be required",
                isValidConfirmPassword: false,
            });
        } else if (
            userInfo.errorNameText === "" &&
            userInfo.errorEmailText === "" &&
            userInfo.errorPasswordText === "" &&
            userInfo.errorConfirmPasswordText === ""
        ) {
            signUp(userInfo);
        }
    };
    return (
        <KeyboardAvoidingView
            style={[internalStyles.container, styles.container]}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Welcome to Our App</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Name'
                    onChangeText={(name) => handleName(name)}
                    onEndEditing={(e) => handleName(e.nativeEvent.text)}
                />
                <Text style={styles.errorMsg}>
                    {userInfo.isValidName ? "" : userInfo.errorNameText}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Email'
                    onChangeText={(email) => handleEmail(email)}
                    onEndEditing={(e) => handleEmail(e.nativeEvent.text)}
                />
                <Text style={styles.errorMsg}>
                    {userInfo.isValidEmail ? "" : userInfo.errorEmailText}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Password'
                    secureTextEntry
                    onChangeText={(password) => handlePassword(password)}
                    onEndEditing={(e) => handlePassword(e.nativeEvent.text)}
                />
                <Text style={styles.errorMsg}>
                    {userInfo.isValidPassword ? "" : userInfo.errorPasswordText}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirm Password'
                    secureTextEntry
                    onChangeText={(confirmPassword) =>
                        handleConfirmPassword(confirmPassword)
                    }
                    onEndEditing={(e) =>
                        handleConfirmPassword(e.nativeEvent.text)
                    }
                />
                <Text style={styles.errorMsg}>
                    {userInfo.isValidConfirmPassword
                        ? ""
                        : userInfo.errorConfirmPasswordText}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.btnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export const internalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
});

export default Registration;
