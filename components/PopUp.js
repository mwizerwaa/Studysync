import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PopUp = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.popup1}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={styles.popupElements}>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <View style={styles.popupElementsChild} />
        <Pressable
          style={styles.groupChat}
          onPress={() => navigation.navigate("Groups")}
        >
          <Text style={[styles.groupChat1, styles.aboutUsTypo]}>
            Group chat
          </Text>
        </Pressable>
        <View style={styles.popupElementsChild} />
        <Text style={[styles.notifications, styles.profileTypo]}>
          Notifications
        </Text>
        <View style={styles.popupElementsChild} />
        <Pressable
          style={styles.groupChat}
          onPress={() => navigation.navigate("Course1AboutScreen")}
        >
          <Text style={[styles.moreResources1, styles.profileTypo]}>
            More Resources
          </Text>
        </Pressable>
        <View style={styles.popupElementsChild} />
        <Pressable
          style={styles.groupChat}
          onPress={() => navigation.navigate("ViewFullTT")}
        >
          <Text style={[styles.viewTimetable1, styles.viewTypo]}>
            View Timetable
          </Text>
        </Pressable>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Pressable
          style={styles.groupChat}
          onPress={() => navigation.navigate("ViewRoom")}
        >
          <Text style={[styles.viewRoomInfo, styles.viewTypo]}>
            View Room Info
          </Text>
        </Pressable>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Text style={[styles.aboutUs, styles.aboutUsTypo]}>About US</Text>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-51.png")}
        />
        <Pressable
          style={styles.groupChat}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={[styles.logOut1, styles.profileTypo]}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileTypo: {
    height: 35,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xl,
  },
  aboutUsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xl,
  },
  viewTypo: {
    height: 36,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xl,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    left: 33,
    top: 24,
    width: 19,
    height: 19,
    position: "absolute",
  },
  profile: {
    width: 75,
  },
  popupElementsChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 350,
    height: 1,
    marginTop: 17,
  },
  groupChat1: {
    width: 161,
    height: 42,
  },
  groupChat: {
    marginTop: 17,
  },
  notifications: {
    width: 155,
    marginTop: 17,
  },
  moreResources1: {
    width: 195,
  },
  viewTimetable1: {
    width: 184,
  },
  lineIcon: {
    width: 349,
    height: 3,
    marginTop: 17,
  },
  viewRoomInfo: {
    width: 185,
  },
  aboutUs: {
    marginTop: 17,
  },
  logOut1: {
    width: 95,
  },
  popupElements: {
    top: 79,
    left: 0,
    alignItems: "center",
    position: "absolute",
    width: 323,
  },
  popup1: {
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(184, 184, 210, 0.8)",
    height: 643,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 323,
  },
});

export default PopUp;
