import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.account}
      locations={[0, 0.43, 1]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <Text
        style={[styles.mugeniBlandineInformation, styles.account2FlexBox]}
      >{`MUGENI Blandine
Information Systems 
YEAR 4
220002646
mugblandine@gmail.com

`}</Text>
      <View style={styles.footer}>
        <View style={[styles.footerhome, styles.footerhomeLayout]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
          <View style={styles.search}>
            <Text style={styles.search1}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.iconsearch, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch.png")}
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
              style={[styles.home1FillIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/home-1-fill.png")}
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
              style={[styles.iconfootercourseoff, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconfootercourseoff1.png")}
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
              source={require("../assets/iconfooternotificationoff.png")}
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
            <Text style={[styles.account1, styles.homeTypo]}>Account</Text>
            <Image
              style={[
                styles.iconfooteraccountoff,
                styles.iconfooteraccountoffPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff3.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.avatarIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={styles.title}>
        <Text style={[styles.account2, styles.footerhomeLayout]}>Account</Text>
      </View>
      <View style={styles.cells}>
        <View style={[styles.cell, styles.cellPosition1]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <Text style={styles.editAccount}>Edit Account</Text>
          <Image
            style={[styles.epArrowUp11, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/eparrowup-1-1.png")}
          />
        </View>
        <Pressable
          style={[styles.cell1, styles.cellPosition]}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <Text style={styles.settingsAndPrivacy}>Settings and Privacy</Text>
          <Image
            style={[styles.epArrowUp111, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/eparrowup-1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.cell2, styles.cellPosition]}
          onPress={() => navigation.navigate("AskHelpScreen")}
        >
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <Text style={[styles.help, styles.helpTypo]}>Help</Text>
          <Image
            style={[styles.epArrowUp112, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/eparrowup-1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.cell3, styles.cellPosition1]}
          onPress={() => navigation.navigate("FAQScreen")}
        >
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <Text style={[styles.faqs, styles.helpTypo]}>FAQs</Text>
          <Image
            style={[styles.epArrowUp113, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/eparrowup-1-1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.icon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/icon6.png")}
      />
      <Image
        style={[styles.accountChild, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-193.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  account2FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  footerhomeLayout: {
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  cellPosition1: {
    right: "3.03%",
    width: "96.97%",
    height: "20.92%",
    left: "0%",
    position: "absolute",
  },
  arrowLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  cellPosition: {
    left: "3.03%",
    width: "96.97%",
    height: "20.92%",
    right: "0%",
    position: "absolute",
  },
  helpTypo: {
    width: "20.63%",
    height: "50.55%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mugeniBlandineInformation: {
    marginLeft: -92,
    top: 209,
    left: "50%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    width: 184,
    height: 100,
  },
  footerhomeBackgroundIcon: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  search1: {
    height: "23.03%",
    width: "90.36%",
    top: "76.97%",
    left: "9.64%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
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
    fontSize: FontSize.size_2xs,
    top: "73.64%",
    height: "26.2%",
    left: "0%",
    width: "100%",
    color: Color.colorBlack,
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
  account1: {
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
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  footer: {
    height: "13.38%",
    top: "86.5%",
    bottom: "0.13%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  avatarIcon: {
    height: "10.94%",
    width: "17.06%",
    top: "9.13%",
    right: "41.56%",
    bottom: "79.94%",
    left: "41.39%",
  },
  account2: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    top: "0%",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  title: {
    height: "4.5%",
    width: "37.78%",
    top: "2.5%",
    right: "58.61%",
    bottom: "93%",
    left: "3.61%",
    position: "absolute",
  },
  editAccount: {
    height: "48.35%",
    width: "34%",
    top: "15.38%",
    left: "8.75%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  epArrowUp11: {
    top: 11,
    left: 266,
  },
  cell: {
    bottom: "79.08%",
    top: "0%",
  },
  settingsAndPrivacy: {
    width: "55.22%",
    left: "5.31%",
    top: "26.37%",
    height: "50.55%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  epArrowUp111: {
    top: 12,
    left: 255,
  },
  cell1: {
    top: "24.83%",
    bottom: "54.25%",
  },
  help: {
    left: "5.22%",
    top: "26.37%",
  },
  epArrowUp112: {
    top: 6,
    left: 256,
  },
  cell2: {
    top: "53.79%",
    bottom: "25.29%",
  },
  faqs: {
    top: "19.78%",
    left: "7.81%",
  },
  epArrowUp113: {
    top: 9,
    left: 263,
  },
  cell3: {
    top: "79.08%",
    bottom: "0%",
  },
  cells: {
    height: "27.19%",
    width: "91.67%",
    top: "47.13%",
    right: "1.39%",
    bottom: "25.69%",
    left: "6.94%",
    position: "absolute",
  },
  icon: {
    height: "2.46%",
    width: "5.33%",
    top: "19.38%",
    right: "47.17%",
    bottom: "78.16%",
    left: "47.5%",
  },
  accountChild: {
    height: "0.24%",
    width: "6.83%",
    top: "88.13%",
    right: "10.11%",
    bottom: "11.64%",
    left: "83.06%",
  },
  account: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Account;
