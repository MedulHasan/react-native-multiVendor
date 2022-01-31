import { useMemo } from "react";

export const initialState = {
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

export const reducer = (prevState, action) => {
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
                userToken: null,
                isSignout: true,
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
