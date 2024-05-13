import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AskHelpScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.askHelpScreen}
      locations={[0, 0.5, 1]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <View style={styles.askHelpScreenChild} />
      <Text style={[styles.whatCanWe, styles.sendTypo]}>
        What can we help you?
      </Text>
      <View style={[styles.footer, styles.footerShadowBox]}>
        <View style={[styles.footerhome, styles.footerhomePosition]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.courseClr]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.iconsearch, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch6.png")}
            />
          </View>
          <View style={[styles.footeron, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeronBackgroundIcon,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.home1FillIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/home-1-fill1.png")}
            />
          </View>
          <View style={[styles.footeroff, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.course, styles.homeTypo]}>Course</Text>
            <Image
              style={[styles.iconfootercourseoff, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconfootercourseoff3.png")}
            />
          </View>
          <View style={[styles.footeroff1, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon1,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.course, styles.homeTypo]}>Message</Text>
            <Image
              style={[
                styles.iconfooternotificationoff,
                styles.iconfooteraccountoffPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooternotificationoff4.png")}
            />
          </View>
          <Pressable
            style={[styles.footeroff2, styles.footeroffPosition]}
            onPress={() => navigation.navigate("Account")}
          >
            <Image
              style={[
                styles.footeroffBackgroundIcon2,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.account, styles.homeTypo]}>Account</Text>
            <Image
              style={[
                styles.iconfooteraccountoff,
                styles.iconfooteraccountoffPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff5.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.footerShadowBox]}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Image
          style={[styles.footerhomeBackgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/buttonprimary-background4.png")}
        />
        <View style={styles.sendWrapper}>
          <Text style={[styles.send, styles.footerhomePosition]}>SEND</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  footerShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  footerhomePosition: {
    top: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  courseClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
  },
  footeroffPosition: {
    bottom: "27.94%",
    top: "13.55%",
    height: "58.5%",
    position: "absolute",
  },
  backgroundIconPosition: {
    bottom: "9.11%",
    height: "90.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    top: "73.64%",
    height: "26.2%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconfooteraccountoffPosition: {
    bottom: "41.53%",
    top: "21.57%",
    height: "36.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  askHelpScreenChild: {
    marginLeft: -154,
    top: 140,
    left: "50%",
    backgroundColor: Color.colorGainsboro_200,
    width: 308,
    height: 227,
    position: "absolute",
  },
  whatCanWe: {
    top: 221,
    left: 37,
    fontStyle: "italic",
    fontFamily: FontFamily.poppinsItalic,
    color: "#858597",
    width: 296,
  },
  footerhomeBackgroundIcon: {
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
  },
  search1: {
    height: "23.03%",
    width: "90.36%",
    top: "76.97%",
    left: "9.64%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  searchChild: {
    height: "70.37%",
    width: "75.15%",
    right: "24.85%",
    bottom: "29.63%",
    opacity: 0.05,
    top: "0%",
    left: "0%",
  },
  iconsearch: {
    height: "23.6%",
    width: "25.15%",
    top: "22.75%",
    right: "50.6%",
    bottom: "53.65%",
    left: "24.25%",
  },
  search: {
    height: "66.54%",
    width: "18.44%",
    top: "5.42%",
    right: "38.61%",
    bottom: "28.04%",
    left: "42.94%",
    position: "absolute",
  },
  footeronBackgroundIcon: {
    width: "68.61%",
    right: "31.39%",
    left: "0%",
  },
  home: {
    width: "99.57%",
    left: "0.43%",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
  },
  home1FillIcon: {
    height: "28.91%",
    width: "47.84%",
    top: "24.76%",
    right: "44.16%",
    bottom: "46.33%",
    left: "8.01%",
  },
  footeron: {
    width: "12.83%",
    right: "78.89%",
    left: "8.28%",
  },
  footeroffBackgroundIcon: {
    width: "51.97%",
    right: "42.79%",
    left: "5.25%",
  },
  course: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: "0%",
    width: "100%",
  },
  iconfootercourseoff: {
    height: "30.83%",
    width: "25.25%",
    top: "25.24%",
    right: "57.05%",
    bottom: "43.93%",
    left: "17.7%",
  },
  footeroff: {
    width: "16.94%",
    right: "58.33%",
    left: "24.72%",
  },
  footeroffBackgroundIcon1: {
    width: "47.31%",
    right: "40.45%",
    left: "12.24%",
  },
  iconfooternotificationoff: {
    width: "34.33%",
    right: "47.76%",
    left: "17.91%",
  },
  footeroff1: {
    width: "18.61%",
    right: "18.33%",
    left: "63.06%",
  },
  footeroffBackgroundIcon2: {
    width: "55.61%",
    right: "32.81%",
    left: "11.58%",
  },
  account: {
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_2xs,
    top: "73.64%",
    height: "26.2%",
    left: "0%",
    width: "100%",
  },
  iconfooteraccountoff: {
    width: "40.35%",
    right: "41.4%",
    left: "18.25%",
  },
  footeroff2: {
    width: "15.83%",
    right: "3.33%",
    left: "80.83%",
  },
  footerhome: {
    height: "100%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  footer: {
    height: "13.38%",
    top: "86.63%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  send: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    height: "100%",
    top: "0%",
    width: "100%",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  sendWrapper: {
    height: "47.89%",
    width: "52.54%",
    top: "2.11%",
    right: "19.7%",
    bottom: "50%",
    left: "27.76%",
    position: "absolute",
  },
  buttonprimary: {
    height: "5.93%",
    width: "41.03%",
    top: "48.63%",
    right: "3.42%",
    bottom: "45.45%",
    left: "55.56%",
  },
  askHelpScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default AskHelpScreen;
