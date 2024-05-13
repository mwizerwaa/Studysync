import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TimeTable = () => {
  return (
    <View style={styles.timetable}>
      <View style={styles.footer}>
        <View style={[styles.footerhome, styles.footerhomePosition]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.iconsearch, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch14.png")}
            />
          </View>
          <View style={styles.footeroff}>
            <Image
              style={styles.footeronBackgroundIcon}
              contentFit="cover"
              source={require("../assets/footeron-background3.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.home1FillIcon, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/home-1-fill4.png")}
            />
          </View>
          <View style={[styles.footeroff1, styles.footeroffPosition]}>
            <Image
              style={[styles.footeroffBackgroundIcon, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.myClass, styles.search1Typo]}>MY Class</Text>
            <Image
              style={[styles.mdiGoogleClassroom1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mdigoogleclassroom-1.png")}
            />
          </View>
          <View style={styles.footeroff2}>
            <Image
              style={[styles.footeroffBackgroundIcon1, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/footeroff-background1.png")}
            />
            <Text style={[styles.schedule, styles.scheduleTypo]}>Schedule</Text>
            <Image
              style={[styles.uilSchedule1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/uilschedule-11.png")}
            />
            <Image
              style={[styles.footeroffChild, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-195.png")}
            />
          </View>
          <View style={[styles.footeroff3, styles.footeroffPosition]}>
            <Image
              style={[styles.footeroffBackgroundIcon2, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/footeroff-background2.png")}
            />
            <Image
              style={[styles.iconfooteraccountoff, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff10.png")}
            />
            <Text style={[styles.assignment, styles.homeTypo]}>Assignment</Text>
            <Image
              style={[styles.materialSymbolsLightAssignIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/materialsymbolslightassignmentaddoutline-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.june82024, styles.scheduleTypo]}>JUNE 8, 2024</Text>
      <Image
        style={[styles.ionArrowUpOutline1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ionarrowupoutline-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerhomePosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  childIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  search1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  homeTypo: {
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  footeroffPosition: {
    top: "13.55%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 14,
    overflow: "hidden",
    position: "absolute",
  },
  scheduleTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  footerhomeBackgroundIcon: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  search1: {
    height: "23.03%",
    width: "90.36%",
    top: "76.97%",
    left: "9.64%",
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
    top: "31.18%",
    right: "50.15%",
    bottom: "45.22%",
    left: "24.7%",
  },
  search: {
    height: "66.54%",
    width: "18.44%",
    top: "5.42%",
    right: "38.61%",
    left: "42.94%",
    bottom: "28.04%",
    position: "absolute",
  },
  footeronBackgroundIcon: {
    top: 0,
    left: 8,
    width: 36,
    height: 49,
    position: "absolute",
  },
  home: {
    top: 49,
    color: Color.colorDarkslategray_200,
    height: 14,
    fontSize: FontSize.size_xs,
    width: 52,
  },
  home1FillIcon: {
    height: "31.43%",
    width: "46.42%",
    top: "26.98%",
    right: "38.3%",
    bottom: "41.59%",
    left: "15.28%",
  },
  footeroff: {
    left: 24,
    height: 63,
    width: 52,
    top: 14,
    position: "absolute",
  },
  footeroffBackgroundIcon: {
    height: "90.89%",
    width: "51.97%",
    right: "42.79%",
    bottom: "9.11%",
    left: "5.25%",
    top: "0%",
  },
  myClass: {
    height: "26.2%",
    top: "73.64%",
    left: "0%",
    width: "100%",
  },
  mdiGoogleClassroom1Icon: {
    left: 11,
  },
  footeroff1: {
    height: "58.5%",
    width: "16.94%",
    right: "58.33%",
    bottom: "27.94%",
    left: "24.72%",
  },
  footeroffBackgroundIcon1: {
    height: "90.96%",
    width: "57.62%",
    right: "27.46%",
    bottom: "9.04%",
    left: "14.92%",
    top: "0%",
  },
  schedule: {
    height: "25.62%",
    top: "74.38%",
    fontSize: FontSize.size_xs,
    left: "0%",
    width: "100%",
  },
  uilSchedule1Icon: {
    top: 16,
    left: 14,
    width: 27,
    height: 28,
  },
  footeroffChild: {
    height: "1.64%",
    width: "44.6%",
    right: "33.17%",
    bottom: "98.36%",
    left: "22.22%",
    top: "0%",
  },
  footeroff2: {
    height: "68.22%",
    width: "17.5%",
    top: "13.08%",
    right: "23.89%",
    bottom: "18.69%",
    left: "58.61%",
    position: "absolute",
  },
  footeroffBackgroundIcon2: {
    height: "91.04%",
    width: "47.31%",
    right: "29.4%",
    bottom: "8.96%",
    left: "23.28%",
    top: "0%",
  },
  iconfooteraccountoff: {
    height: "36.96%",
    width: "34.33%",
    top: "21.6%",
    right: "36.72%",
    bottom: "41.44%",
    left: "28.96%",
  },
  assignment: {
    top: 46,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    left: 0,
  },
  materialSymbolsLightAssignIcon: {
    left: 23,
  },
  footeroff3: {
    height: "58.41%",
    width: "18.61%",
    right: "3.06%",
    left: "78.33%",
    bottom: "28.04%",
  },
  footerhome: {
    top: "0%",
    position: "absolute",
  },
  footer: {
    height: "13.38%",
    top: "86.63%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  june82024: {
    top: 67,
    left: 79,
    fontSize: FontSize.size_13xl,
  },
  ionArrowUpOutline1Icon: {
    top: 71,
    left: 16,
    width: 49,
    height: 33,
  },
  timetable: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default TimeTable;
