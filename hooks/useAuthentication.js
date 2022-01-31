import { useEffect, useMemo, useReducer } from "react";

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    allUserInfo: [
        {
            name: "Admin",
            email: "admin@techvill.net",
            password: "123456",
            confirmPassword: "123456",
        },
    ],
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
        case "SIGN_IN":
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
            };
        case "SIGN_OUT":
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
            };
        case "SIGN_UP":
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
                allUserInfo: [...prevState.allUserInfo, action.data],
            };
    }
};

const useAuthentication = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

    return {
        state,
        authContext,
    };
};

export default useAuthentication();
