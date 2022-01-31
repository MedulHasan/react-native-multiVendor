import {
    View,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import React from "react";
import {
    Avatar,
    Box,
    Input,
    Text,
    Button,
    FormControl,
    WarningOutlineIcon,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ProfileStyles } from "../Profile/ProfileStyle";
import EditProfileStyle from "./StyleEditProfile";
import CommonStyles from "../CommonStyles/CommonStyles";

const EditProfile = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
            <ScrollView>
                <View style={ProfileStyles.profileContainer}>
                    <View style={ProfileStyles.profilePic}>
                        <Avatar
                            source={require("../../assets/profile.jpg")}
                            size='2xl'
                            style={EditProfileStyle.profilePic}
                        />
                        <TouchableOpacity
                            style={EditProfileStyle.editProfilePic}
                        >
                            <MaterialIcons name='edit' size={25} />
                        </TouchableOpacity>
                        <View style={CommonStyles.hrLine} />
                    </View>
                    <View style={EditProfileStyle.basicInformation}>
                        <Text
                            mx='10'
                            mb='4'
                            fontSize={"xl"}
                            fontWeight={"bold"}
                        >
                            Basic Information
                        </Text>
                        <Box mx='10' mb={4}>
                            <Text mb='1'>Name</Text>
                            <Input size={"md"} placeholder='Name' w='100%' />
                        </Box>
                        <Box mx='10' mb={4}>
                            <FormControl isInvalid>
                                <Text mb='1'>Password</Text>
                                <Input
                                    size={"md"}
                                    placeholder='Password'
                                    w='100%'
                                    type='password'
                                />
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size='xs' />}
                                >
                                    Password must be contain 6 characters
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </Box>
                        <Box mx='10' mb={4}>
                            <FormControl isInvalid>
                                <Text mb='1'>Confirm Password</Text>
                                <Input
                                    size={"md"}
                                    placeholder='Confirm Password'
                                    w='100%'
                                    type='password'
                                />
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size='xs' />}
                                >
                                    Password must be contain 6 characters
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </Box>
                        <Button mx={10} w={140} ml={"auto"}>
                            Update Profile
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default EditProfile;
