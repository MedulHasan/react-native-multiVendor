import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { ProfileStyles } from "./ProfileStyle";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CommonStyles from "../CommonStyles/CommonStyles";

const Profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={ProfileStyles.profileContainer}>
                <View style={ProfileStyles.profilePic}>
                    <Avatar
                        source={require("../../assets/profile.jpg")}
                        size='2xl'
                    />

                    <Text style={ProfileStyles.name}>Tech Village</Text>
                    <Text style={ProfileStyles.email}>
                        techvillage@gmail.com
                    </Text>
                    <TouchableOpacity
                        onPress={() => {}}
                        colorScheme='success'
                        style={ProfileStyles.balanceButton}
                    >
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                            Check Balance
                        </Text>
                    </TouchableOpacity>
                    <View style={ProfileStyles.yourRecorde}>
                        <View style={ProfileStyles.recordes}>
                            <Text>00</Text>
                            <Text>In your cart</Text>
                        </View>
                        <View style={ProfileStyles.recordes}>
                            <Text>08</Text>
                            <Text>In wishlist</Text>
                        </View>
                        <View style={ProfileStyles.recordes}>
                            <Text>89</Text>
                            <Text>Ordered</Text>
                        </View>
                    </View>
                    <View style={CommonStyles.hrLine} />
                    <View style={ProfileStyles.ProfileCategoryContainer}>
                        <View style={ProfileStyles.ProfileCategory}>
                            <View style={ProfileStyles.SingleCategoryContainer}>
                                <Entypo
                                    style={ProfileStyles.ProfileCategoryIcon}
                                    name='text-document'
                                    color='#4CB050'
                                />
                            </View>
                            <Text style={ProfileStyles.ProfileCategoryText}>
                                Orders
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={ProfileStyles.ProfileCategory}
                            onPress={() =>
                                navigation.navigate("Profile", {
                                    screen: "edit-profile",
                                })
                            }
                        >
                            <View style={ProfileStyles.SingleCategoryContainer}>
                                <FontAwesome5
                                    style={ProfileStyles.ProfileCategoryIcon}
                                    name='user-alt'
                                    color='#438AFE'
                                />
                            </View>
                            <Text style={ProfileStyles.ProfileCategoryText}>
                                Profile
                            </Text>
                        </TouchableOpacity>
                        <View style={ProfileStyles.ProfileCategory}>
                            <View style={ProfileStyles.SingleCategoryContainer}>
                                <Entypo
                                    style={ProfileStyles.ProfileCategoryIcon}
                                    name='location-pin'
                                    color='#FEC107'
                                />
                            </View>
                            <Text style={ProfileStyles.ProfileCategoryText}>
                                Address
                            </Text>
                        </View>
                    </View>
                    <View style={CommonStyles.hrLine} />
                </View>
                <View style={ProfileStyles.ProfileNotification}>
                    <View style={ProfileStyles.SingleNotificationContainer}>
                        <Ionicons
                            style={ProfileStyles.ProfileCategoryIcon}
                            name='ios-notifications-outline'
                            color='#fff'
                        />
                    </View>
                    <Text style={{ fontSize: 22, marginLeft: 20 }}>
                        Notification
                    </Text>
                </View>
                <View style={ProfileStyles.ProfileNotification}>
                    <View
                        style={[
                            ProfileStyles.SingleNotificationContainer,
                            { backgroundColor: "#4CB050" },
                        ]}
                    >
                        <MaterialCommunityIcons
                            style={ProfileStyles.ProfileCategoryIcon}
                            name='card-text-outline'
                            color='#fff'
                        />
                    </View>
                    <Text style={{ fontSize: 22, marginLeft: 20 }}>
                        Purchase History
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;
