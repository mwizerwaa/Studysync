import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <View style={styles.footer}>
        <View style={[styles.footerhome, styles.footerhomePosition]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/footerhome-background2.png")}
          />
          <Pressable
            style={styles.search}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Text style={[styles.search1, styles.homeTypo]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-184.png")}
            />
            <Image
              style={[styles.iconsearch, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch14.png")}
            />
          </Pressable>
          <View style={styles.footeron}>
            <Image
              style={styles.footeronBackgroundIcon}
              contentFit="cover"
              source={require("../assets/footeron-background2.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.footeronChild, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-194.png")}
            />
            <Image
              style={[styles.home1FillIcon, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/home-1-fill3.png")}
            />
          </View>
          <Pressable
            style={styles.footeroff}
            onPress={() => navigation.navigate("MyClassScreen")}
          >
            <Image
              style={[styles.footeroffBackgroundIcon, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.myClass, styles.homeTypo]}>MY Class</Text>
            <Image
              style={[styles.mdiGoogleClassroom1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mdigoogleclassroom-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.footeroff1, styles.footeroffLayout]}
            onPress={() => navigation.navigate("TimeTable")}
          >
            <Image
              style={[
                styles.footeroffBackgroundIcon1,
                styles.footeroffIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.schedule, styles.homeTypo]}>Schedule</Text>
            <Image
              style={[styles.uilSchedule1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/uilschedule-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.footeroff2, styles.footeroffLayout]}
            onPress={() => navigation.navigate("LessonsScreen")}
          >
            <Image
              style={[
                styles.footeroffBackgroundIcon2,
                styles.footeroffIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
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
          </Pressable>
        </View>
      </View>
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
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 14,
    overflow: "hidden",
    position: "absolute",
  },
  footeroffLayout: {
    height: "58.41%",
    position: "absolute",
  },
  footeroffIconPosition: {
    bottom: "8.96%",
    height: "91.04%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
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
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    width: 36,
    height: 57,
    zIndex: 0,
  },
  home: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    width: 52,
    height: 16,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  footeronChild: {
    height: "3.14%",
    width: "53.97%",
    right: "39.85%",
    bottom: "96.86%",
    left: "6.19%",
    zIndex: 2,
    top: "0%",
  },
  home1FillIcon: {
    height: "28.92%",
    width: "47%",
    top: "34.38%",
    right: "43.91%",
    bottom: "36.7%",
    left: "9.09%",
    zIndex: 3,
  },
  footeron: {
    marginTop: -39.5,
    marginLeft: -156,
    top: "50%",
    left: "50%",
    alignItems: "center",
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
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  mdiGoogleClassroom1Icon: {
    left: 11,
  },
  footeroff: {
    height: "58.5%",
    width: "16.94%",
    right: "58.33%",
    bottom: "27.94%",
    left: "24.72%",
    top: "13.55%",
    position: "absolute",
  },
  footeroffBackgroundIcon1: {
    width: "57.64%",
    right: "27.45%",
    left: "14.91%",
  },
  schedule: {
    height: "25.6%",
    top: "74.4%",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  uilSchedule1Icon: {
    left: 12,
  },
  footeroff1: {
    width: "15.28%",
    top: "13.08%",
    right: "23.33%",
    bottom: "28.5%",
    left: "61.39%",
  },
  footeroffBackgroundIcon2: {
    width: "47.31%",
    right: "29.4%",
    left: "23.28%",
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
    left: 0,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  materialSymbolsLightAssignIcon: {
    left: 23,
  },
  footeroff2: {
    width: "18.61%",
    right: "3.06%",
    left: "78.33%",
    top: "13.55%",
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
  homeScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default HomeScreen1;
