import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const CommonStyles = StyleSheet.create({
    hrLine: {
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        width: width - 30,
        marginTop: 20,
    },
});

export default CommonStyles;
