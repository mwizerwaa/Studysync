import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const NoNotification = () => {
  return (
    <ImageBackground
      style={styles.noNotificationIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <View style={styles.maskGroup4}>
        <Text style={[styles.noNotificationsYet, styles.wellNofifyYouFlexBox]}>
          No Notifications yet!
        </Text>
        <Text
          style={[styles.wellNofifyYou, styles.wellNofifyYouFlexBox]}
        >{`We’ll nofify you once we have 
something for you `}</Text>
        <Image
          style={[styles.maskGroup4Child, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/frame-30.png")}
        />
        <Image
          style={[styles.illustrationIcon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/illustration.png")}
        />
      </View>
      <Image
        style={[styles.noNotificationChild, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-131.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wellNofifyYouFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  noNotificationsYet: {
    height: "10.71%",
    width: "93.33%",
    top: "72.78%",
    left: "3.18%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#dadaf7",
  },
  wellNofifyYou: {
    height: "16.07%",
    top: "83.93%",
    left: "0%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightsteelblue_100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
  maskGroup4Child: {
    height: "37.56%",
    width: "72.87%",
    top: "12.47%",
    right: "13.84%",
    bottom: "49.97%",
    left: "13.29%",
  },
  illustrationIcon: {
    height: "71.42%",
    width: "88.88%",
    top: "0%",
    right: "5.85%",
    bottom: "28.58%",
    left: "5.27%",
  },
  maskGroup4: {
    height: "36.88%",
    width: "71.67%",
    top: "20.5%",
    right: "12.5%",
    bottom: "42.63%",
    left: "15.83%",
    position: "absolute",
  },
  noNotificationChild: {
    height: "2.88%",
    width: "3.89%",
    top: "9.25%",
    right: "90.83%",
    bottom: "87.88%",
    left: "5.28%",
  },
  noNotificationIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default NoNotification;
