import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export const ProfileStyles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "#fff",
        minHeight: height,
    },
    profilePic: {
        alignItems: "center",
        marginTop: 20,
    },
    name: {
        fontSize: 20,
        marginTop: 15,
        fontWeight: "700",
    },
    email: {
        color: "#848484",
        fontSize: 15,
        marginTop: 5,
    },
    balanceButton: {
        marginTop: 30,
        borderRadius: 20,
        fontSize: 50,
    },
    yourRecorde: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 25,
    },
    recordes: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ProfileCategoryContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    ProfileCategory: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    SingleCategoryContainer: {
        backgroundColor: "#EFEFEF",
        padding: 15,
        borderRadius: 50,
    },
    ProfileCategoryIcon: {
        fontSize: 40,
    },
    ProfileCategoryText: {
        fontSize: 15,
    },
    ProfileNotification: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 20,
    },
    SingleNotificationContainer: {
        backgroundColor: "#FEC107",
        padding: 15,
        borderRadius: 50,
    },
});
