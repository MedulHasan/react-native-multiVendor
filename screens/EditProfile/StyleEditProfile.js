import { StyleSheet } from "react-native";

const EditProfileStyle = StyleSheet.create({
    profilePic: {
        position: "relative",
    },
    editProfilePic: {
        position: "absolute",
        top: "57%",
        left: "58%",
        backgroundColor: "#EFEFEF",
        borderRadius: 50,
        padding: 5,
    },
    basicInformation: {
        marginTop: 20,
    },
});

export default EditProfileStyle;
