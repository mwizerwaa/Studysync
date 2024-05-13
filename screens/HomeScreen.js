import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PopUp from "../components/PopUp";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  const [pepiconsPopDotsY12Visible, setPepiconsPopDotsY12Visible] =
    useState(false);
  const navigation = useNavigation();

  const openPepiconsPopDotsY12 = useCallback(() => {
    setPepiconsPopDotsY12Visible(true);
  }, []);

  const closePepiconsPopDotsY12 = useCallback(() => {
    setPepiconsPopDotsY12Visible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.homeScreen}
        locations={[0, 0.96, 1]}
        colors={[
          "rgba(15, 81, 209, 0.97)",
          "rgba(255, 255, 255, 0.97)",
          "rgba(15, 81, 209, 0.97)",
        ]}
      >
        <View style={[styles.footer, styles.footerShadowBox]}>
          <View style={[styles.footerhome, styles.iconLayout]}>
            <Image
              style={[styles.footerhomeBackgroundIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/footerhome-background.png")}
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
              <Image
                style={[styles.footeronChild, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-19.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              <Image
                style={[styles.iconfooterhomeon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/iconfooterhomeon.png")}
              />
            </View>
            <Pressable
              style={[styles.footeroff, styles.footeroffPosition]}
              onPress={() => navigation.navigate("CoursesScreen")}
            >
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
                source={require("../assets/iconfootercourseoff.png")}
              />
            </Pressable>
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
            <View style={[styles.footeroff2, styles.footeroffPosition]}>
              <Image
                style={[
                  styles.footeroffBackgroundIcon2,
                  styles.backgroundIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/footeron-background.png")}
              />
              <Text style={[styles.course, styles.homeTypo]}>Account</Text>
              <Image
                style={[
                  styles.iconfooteraccountoff,
                  styles.iconfooteraccountoffPosition,
                ]}
                contentFit="cover"
                source={require("../assets/iconfooteraccountoff.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={[styles.hiBlandineLetsContainer, styles.searchForTypo]}>
            <Text style={styles.hiBlandine}>{`Hi, Blandine
`}</Text>
            <Text style={styles.letsStartLearning}>Let’s start learning</Text>
          </Text>
        </View>
        <Pressable
          style={styles.pepiconsPopDotsY12}
          onPress={openPepiconsPopDotsY12}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/pepiconspopdotsy-1-2.png")}
          />
        </Pressable>
        <Image
          style={styles.ggProfile1Icon}
          contentFit="cover"
          source={require("../assets/ggprofile-1.png")}
        />
        <View style={styles.homeHeader}>
          <View style={styles.offerLayout}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Image
              style={styles.paginationIcon}
              contentFit="cover"
              source={require("../assets/pagination.png")}
            />
            <Image
              style={[styles.path2Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-2.png")}
            />
            <Image
              style={[styles.path3Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-3.png")}
            />
            <Image
              style={[styles.offer1Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Image
              style={[styles.offer1Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <Image
              style={[styles.triangleIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/triangle.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/oval.png")}
            />
            <Text style={[styles.todaysSpecial, styles.welcomeBackClr]}>
              Today’s Special
            </Text>
            <Text
              style={[styles.getADiscount, styles.getTypo1]}
            >{`It is another day to expand your 
knowledge with us!!`}</Text>
            <Text
              style={[styles.welcomeBack, styles.welcomeBackClr]}
            >{`Welcome back, `}</Text>
          </View>
          <View style={[styles.offer2, styles.offerLayout]}>
            <View style={[styles.bg1, styles.bgPosition]} />
            <Image
              style={styles.paginationIcon1}
              contentFit="cover"
              source={require("../assets/pagination1.png")}
            />
            <Image
              style={[styles.path2Icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-21.png")}
            />
            <Image
              style={[styles.path3Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-3.png")}
            />
            <Image
              style={[styles.offer2Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Image
              style={[styles.offer2Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <Image
              style={[styles.triangleIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/triangle.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/oval.png")}
            />
            <Text style={[styles.todaysSpecial1, styles.todaysTypo]}>
              View pending activities
            </Text>
            <Text style={[styles.getADiscount1, styles.getADiscount1Position]}>
              See what is about to happen in near future(Quizzes,assignments,
              CATS)...
            </Text>
          </View>
          <View style={[styles.offer2, styles.offerLayout]}>
            <View style={[styles.bg2, styles.bgPosition]} />
            <Image
              style={[styles.paginationIcon2, styles.paginationIconPosition]}
              contentFit="cover"
              source={require("../assets/pagination2.png")}
            />
            <Image
              style={[styles.path2Icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-21.png")}
            />
            <Image
              style={[styles.path3Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-3.png")}
            />
            <Image
              style={[styles.offer2Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Image
              style={[styles.offer2Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <Image
              style={[styles.triangleIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/triangle1.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/oval1.png")}
            />
            <Text
              style={[styles.todaysSpecial2, styles.getADiscount1Position]}
            >{`Keep Growing `}</Text>
            <Text style={[styles.getADiscount2, styles.getTypo]}>
              Continue where you left off your learning pace..
            </Text>
          </View>
          <View style={[styles.offer2, styles.offerLayout]}>
            <View style={[styles.bg3, styles.bgPosition]} />
            <Image
              style={[styles.paginationIcon3, styles.paginationIconPosition]}
              contentFit="cover"
              source={require("../assets/pagination3.png")}
            />
            <Image
              style={[styles.path2Icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-21.png")}
            />
            <Image
              style={[styles.path3Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-3.png")}
            />
            <Image
              style={[styles.offer2Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Image
              style={[styles.offer2Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/oval1.png")}
            />
            <Text style={[styles.todaysSpecial3, styles.todaysTypo]}>
              Chat with your collegues
            </Text>
            <Text style={[styles.getADiscount3, styles.getPosition]}>
              Group collaboration and live sessions to help you expand your
              understanding
            </Text>
          </View>
          <View style={[styles.offer2, styles.offerLayout]}>
            <View style={[styles.bg4, styles.bgPosition]} />
            <Image
              style={[styles.paginationIcon4, styles.paginationIconPosition]}
              contentFit="cover"
              source={require("../assets/pagination4.png")}
            />
            <Image
              style={[styles.path2Icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-21.png")}
            />
            <Image
              style={[styles.path3Icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/path-3.png")}
            />
            <Image
              style={[styles.offer2Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Image
              style={[styles.offer2Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <Image
              style={[styles.triangleIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/triangle1.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/oval1.png")}
            />
            <Text style={[styles.todaysSpecial4, styles.todaysTypo]}>
              View new notifications
            </Text>
            <Text style={[styles.getADiscount2, styles.getTypo]}>
              Don’t miss anything. We are here to remind you!!
            </Text>
          </View>
        </View>
        <View style={[styles.resourcesSearch, styles.footerShadowBox]}>
          <View style={styles.resourcesSearchChild} />
          <Text style={[styles.searchFor, styles.searchForTypo]}>
            Search for...
          </Text>
          <Image
            style={[styles.iconsearch1, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/iconsearch1.png")}
          />
        </View>
        <View style={styles.homeHeader2}>
          <View style={[styles.recent, styles.allLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.recent1, styles.all1Position]}>Recent</Text>
          </View>
          <View style={[styles.courses, styles.allLayout]}>
            <Pressable
              style={styles.childShadowBox}
              onPress={() => navigation.navigate("CoursesScreen")}
            />
            <Text style={[styles.courses1, styles.all1Position]}>Courses</Text>
          </View>
          <View style={[styles.live, styles.allLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.live1, styles.all1Position]}>Live</Text>
          </View>
          <View style={[styles.chat, styles.allLayout]}>
            <Pressable
              style={styles.childShadowBox}
              onPress={() => navigation.navigate("Groups")}
            />
            <Text style={[styles.chat1, styles.all1Position]}>Chat</Text>
          </View>
          <View style={[styles.all, styles.allLayout]}>
            <View style={styles.childShadowBox} />
            <Pressable
              style={[styles.all1, styles.all1Position]}
              onPress={() => navigation.navigate("CoursesScreen")}
            >
              <Text style={styles.all2Typo}>All</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>

      <Modal
        animationType="fade"
        transparent
        visible={pepiconsPopDotsY12Visible}
      >
        <View style={styles.pepiconsPopDotsY12Overlay}>
          <Pressable
            style={styles.pepiconsPopDotsY12Bg}
            onPress={closePepiconsPopDotsY12}
          />
          <PopUp onClose={closePepiconsPopDotsY12} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  iconLayout: {
    height: "100%",
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  searchForTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  bgPosition: {
    borderRadius: Border.br_3xl,
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  childLayout: {
    left: "43.92%",
    right: "50.03%",
    width: "6.05%",
    height: "15.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemLayout: {
    left: "44.73%",
    right: "51.15%",
    width: "4.12%",
    height: "11.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBackClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  getTypo1: {
    height: 48,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  offerLayout: {
    height: 164,
    width: 347,
  },
  todaysTypo: {
    fontSize: FontSize.size_3xl,
    marginTop: -41,
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
  },
  getADiscount1Position: {
    width: "71.76%",
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  paginationIconPosition: {
    left: "38.62%",
    bottom: "8.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getTypo: {
    marginTop: -3,
    height: 48,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  getPosition: {
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  allLayout: {
    width: 62,
    height: 30,
    top: 0,
    position: "absolute",
  },
  all1Position: {
    top: 5,
    position: "absolute",
  },
  footerhomeBackgroundIcon: {
    top: "0%",
    height: "100%",
    width: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  search1: {
    height: "23.03%",
    width: "90.36%",
    top: "76.97%",
    left: "9.64%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
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
  footeronChild: {
    height: "3.04%",
    width: "54.11%",
    right: "39.83%",
    bottom: "96.96%",
    left: "6.06%",
    top: "0%",
  },
  home: {
    width: "99.57%",
    left: "0.43%",
    fontSize: FontSize.size_xs,
    color: Color.colorMediumslateblue_100,
  },
  iconfooterhomeon: {
    height: "33.07%",
    width: "56.93%",
    top: "23.48%",
    right: "32.47%",
    bottom: "43.45%",
    left: "10.61%",
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
    top: "73.64%",
    height: "26.2%",
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
    top: "0%",
    left: "0%",
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
  hiBlandine: {
    fontSize: 17,
  },
  letsStartLearning: {
    fontSize: FontSize.size_base,
  },
  hiBlandineLetsContainer: {
    color: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsRegular,
    height: 60,
    width: 161,
  },
  title: {
    top: 65,
    height: 60,
    width: 161,
    left: 11,
    position: "absolute",
  },
  pepiconsPopDotsY12Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  pepiconsPopDotsY12Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    overflow: "hidden",
  },
  pepiconsPopDotsY12: {
    top: 156,
    width: 38,
    height: 45,
    left: 11,
    position: "absolute",
  },
  ggProfile1Icon: {
    top: 78,
    left: 288,
    width: 46,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  bg: {
    backgroundColor: Color.colorMediumslateblue_200,
  },
  paginationIcon: {
    width: "21.24%",
    right: "39.28%",
    left: "39.48%",
    bottom: "8.9%",
    top: "86.59%",
    height: "4.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  path2Icon: {
    height: "42.68%",
    width: "46.97%",
    top: "57.32%",
    left: "53.03%",
    bottom: "0%",
    right: "0%",
  },
  path3Icon: {
    height: "40.24%",
    width: "43.23%",
    right: "56.77%",
    bottom: "59.76%",
    top: "0%",
    left: "0%",
  },
  offer1Child: {
    top: "0.18%",
    bottom: "84.09%",
  },
  offer1Item: {
    top: "13.48%",
    bottom: "75.49%",
  },
  triangleIcon: {
    width: "2.22%",
    top: "42.8%",
    right: "43.05%",
    bottom: "52.74%",
    left: "54.73%",
    height: "4.45%",
  },
  ovalIcon: {
    height: "5.55%",
    width: "11.12%",
    top: "17.2%",
    right: "31.93%",
    bottom: "77.26%",
    left: "56.95%",
  },
  todaysSpecial: {
    marginTop: -16,
    width: "50.43%",
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    left: "6.92%",
    top: "50%",
  },
  getADiscount: {
    marginTop: 11,
    width: "62.82%",
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
    left: "6.92%",
    top: "50%",
  },
  welcomeBack: {
    top: 31,
    left: 24,
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  bg1: {
    backgroundColor: "#aaf509",
  },
  paginationIcon1: {
    top: "88.41%",
    right: "39.19%",
    bottom: "7.13%",
    left: "38.04%",
    width: "22.77%",
    height: "4.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  path2Icon1: {
    height: "42.5%",
    width: "50.29%",
    top: "57.5%",
    left: "49.71%",
    bottom: "0%",
    right: "0%",
  },
  offer2Child: {
    top: "0.98%",
    bottom: "83.29%",
  },
  offer2Item: {
    top: "13.78%",
    bottom: "75.18%",
  },
  todaysSpecial1: {
    width: "74.93%",
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  getADiscount1: {
    marginTop: -3,
    height: 48,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  offer2: {
    marginLeft: 14,
  },
  bg2: {
    backgroundColor: "#09e7f5",
  },
  paginationIcon2: {
    top: "86.65%",
    right: "38.62%",
    left: "38.62%",
    width: "22.77%",
    height: "4.45%",
  },
  todaysSpecial2: {
    fontSize: FontSize.size_3xl,
    marginTop: -41,
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
  },
  getADiscount2: {
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    width: "62.82%",
  },
  bg3: {
    backgroundColor: "#09f53d",
  },
  paginationIcon3: {
    right: "38.62%",
    left: "38.62%",
    width: "22.77%",
    top: "86.59%",
    height: "4.51%",
  },
  todaysSpecial3: {
    width: "76.37%",
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  getADiscount3: {
    marginTop: -11,
    width: "76.08%",
    height: 48,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bg4: {
    backgroundColor: "#e2f509",
  },
  paginationIcon4: {
    width: "22.31%",
    right: "39.08%",
    top: "86.59%",
    height: "4.51%",
  },
  todaysSpecial4: {
    width: "73.2%",
    left: "6.63%",
    color: Color.colorWhite,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  homeHeader: {
    top: 221,
    left: -9,
    width: 375,
    height: 173,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 2,
    position: "absolute",
  },
  resourcesSearchChild: {
    height: "105.71%",
    width: "100.69%",
    top: "-2.86%",
    right: "-0.35%",
    bottom: "-2.86%",
    left: "-0.35%",
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
  },
  searchFor: {
    height: "47.71%",
    width: "68.17%",
    top: "27.14%",
    left: "6.57%",
    fontSize: FontSize.size_3xs,
    color: Color.colorLightsteelblue_100,
  },
  iconsearch1: {
    height: "45.43%",
    width: "3.91%",
    top: "28.57%",
    right: "6.12%",
    bottom: "26%",
    left: "89.97%",
  },
  resourcesSearch: {
    top: 159,
    left: 49,
    backgroundColor: Color.colorWhite,
    width: 289,
    height: 35,
  },
  childShadowBox: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    width: 62,
    height: 30,
    left: 0,
    top: 0,
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
  recent1: {
    left: 8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  recent: {
    left: 67,
  },
  courses1: {
    left: 5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  courses: {
    left: 134,
  },
  live1: {
    left: 18,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  live: {
    left: 201,
  },
  chat1: {
    left: 15,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  chat: {
    left: 268,
  },
  all2Typo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  all1: {
    left: 23,
  },
  all: {
    left: 0,
  },
  homeHeader2: {
    top: 410,
    left: 14,
    width: 330,
    height: 30,
    position: "absolute",
  },
  homeScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
