import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../context/AuthContext";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Text } from "native-base";

const DrawerContainer = (props) => {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <Box
                            mx={3}
                            mt={3}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                source={require("../../assets/profile.jpg")}
                            />
                            <Box ml={5}>
                                <Text fontWeight={"bold"}>Tech Village</Text>
                                <Text>techvill@gmail.com</Text>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem
                        icon={(color) => (
                            <Entypo name='home' color={color} size={26} />
                        )}
                        label='Home'
                        onPress={() => navigation.navigate("Home")}
                    />
                    <DrawerItem
                        icon={(color) => (
                            <MaterialCommunityIcons
                                name='account'
                                color={color}
                                size={26}
                            />
                        )}
                        label='Profile'
                        onPress={() => navigation.navigate("Profile")}
                    />
                    <DrawerItem
                        icon={(color) => (
                            <AntDesign name='setting' color={color} size={26} />
                        )}
                        label='Setting'
                        onPress={() => navigation.navigate("Setting")}
                    />
                    <DrawerItem
                        icon={(color) => (
                            <Feather name='bookmark' color={color} size={26} />
                        )}
                        label='Bookmark'
                        onPress={() => navigation.navigate("Bookmark")}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={(color) => (
                        <MaterialIcons name='logout' color={color} size={26} />
                    )}
                    label='Sign Out'
                    onPress={signOut}
                />
            </Drawer.Section>
        </View>
    );
};

export default DrawerContainer;
