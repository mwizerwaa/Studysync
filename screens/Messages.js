import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.messages}
      locations={[0, 0.23, 0.88]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <Image
        style={[styles.home1FillIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/home-1-fill2.png")}
      />
      <View style={styles.chats}>
        <Pressable
          style={styles.chatLayout}
          onPress={() => navigation.navigate("MessageChat")}
        >
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </Pressable>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
          <Image
            style={[styles.codiconCheckAll1, styles.codiconCheckAll1Layout]}
            contentFit="cover"
            source={require("../assets/codiconcheckall-1.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
        <View style={[styles.chat1, styles.chatLayout]}>
          <LinearGradient
            style={styles.chatChildShadowBox}
            locations={[0, 0.28]}
            colors={["#7faafb", "#fff"]}
          />
          <Image
            style={[styles.chatItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2132.png")}
          />
          <Text style={styles.jonathanAcoustic}>Jonathan acoustic</Text>
          <Text style={[styles.hhhhWeHava, styles.searchForTypo]}>
            hhhh we hava a class!!!!!
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-216.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>3</Text>
          </View>
          <Image
            style={[styles.chatInner, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
      </View>
      <View style={[styles.footer, styles.rectanglePosition1]}>
        <View style={[styles.footerhome, styles.rectanglePosition1]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.rectanglePosition1]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.rectanglePosition1]}
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
            <Pressable
              style={styles.iconsearch}
              onPress={() => navigation.navigate("Course1AboutScreen")}
            >
              <Image
                style={[styles.icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/iconsearch12.png")}
              />
            </Pressable>
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
              source={require("../assets/iconfootercourseoff4.png")}
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
            <Text style={[styles.message, styles.homeTypo]}>Message</Text>
            <Image
              style={[
                styles.iconfooternotificationoff,
                styles.iconfooteraccountoffPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooternotificationoff5.png")}
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
              source={require("../assets/iconfooteraccountoff8.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.todaysSpecialOffe}>Chats</Text>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.buttons, styles.buttonsBorder]}>
        <Pressable
          style={[styles.curriculum, styles.rectanglePosition]}
          onPress={() => navigation.navigate("Groups")}
        >
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.groups, styles.aboutTypo]}>Groups</Text>
          <Image
            style={[styles.heroiconsUserGroup1, styles.codiconCheckAll1Layout]}
            contentFit="cover"
            source={require("../assets/heroiconsusergroup-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.resources, styles.rectanglePosition1]}
          onPress={() => navigation.navigate("Course1ResourcesScreen")}
        >
          <View style={[styles.rectangle1, styles.rectanglePosition1]} />
          <Text style={[styles.about, styles.aboutTypo]}>Messages</Text>
          <Image
            style={[
              styles.tablerMessageCircleUser1Icon,
              styles.codiconCheckAll1Layout,
            ]}
            contentFit="cover"
            source={require("../assets/tablermessagecircleuser-1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[
          styles.tablerMessageCirclePlus1Icon,
          styles.resourcesSeacrchPosition,
        ]}
        contentFit="cover"
        source={require("../assets/tablermessagecircleplus-1.png")}
      />
      <View style={[styles.resourcesSeacrch, styles.resourcesSeacrchPosition]}>
        <View style={[styles.resourcesSeacrchChild, styles.buttonsBorder]} />
        <Text style={[styles.searchFor, styles.searchForTypo]}>
          Search for...
        </Text>
        <Image
          style={[styles.iconsearch1, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/iconsearch13.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonsLayout: {
    height: 62,
    left: 11,
  },
  searchForTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  textLayout: {
    width: 10,
    position: "absolute",
  },
  chatLayout: {
    height: 70,
    width: 360,
  },
  codiconCheckAll1Layout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition1: {
    bottom: "0%",
    right: "0%",
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
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  buttonsBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePosition: {
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    position: "absolute",
  },
  aboutTypo: {
    textAlign: "center",
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_lg,
    top: "50%",
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  resourcesSeacrchPosition: {
    top: 94,
    position: "absolute",
  },
  home1FillIcon: {
    height: "2.26%",
    width: "6.06%",
    top: "90.13%",
    right: "84.22%",
    bottom: "7.61%",
    left: "9.72%",
    position: "absolute",
  },
  chatChildShadowBox: {
    borderRadius: Border.br_xl,
    marginLeft: -180,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    top: 0,
    height: 70,
    width: 360,
    position: "absolute",
    backgroundColor: "transparent",
  },
  chatItem: {
    width: 62,
    top: 8,
    left: 11,
    position: "absolute",
  },
  jonathanAcoustic: {
    right: 83,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 159,
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
    top: 8,
    position: "absolute",
  },
  hhhhWeHava: {
    marginLeft: -88,
    top: 36,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray,
    width: 211,
    height: 21,
    left: "50%",
    fontFamily: FontFamily.poppinsRegular,
  },
  groupChild: {
    right: 0,
    top: 0,
    width: 25,
  },
  text: {
    left: 7,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    height: 23,
    top: 1,
    textAlign: "left",
  },
  ellipseParent: {
    top: 27,
    right: 13,
  },
  chatInner: {
    top: 52,
    left: 63,
    height: 10,
  },
  codiconCheckAll1: {
    top: 22,
    left: 322,
  },
  chat1: {
    marginTop: 7,
  },
  chats: {
    top: 252,
    height: 455,
    alignItems: "center",
    paddingHorizontal: 1,
    paddingVertical: Padding.p_8xs,
    width: 360,
    left: 0,
    position: "absolute",
  },
  footerhomeBackgroundIcon: {
    top: "0%",
    height: "100%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  search1: {
    height: "23.03%",
    width: "90.36%",
    top: "76.97%",
    left: "9.64%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
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
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconsearch: {
    left: "24.25%",
    top: "22.75%",
    right: "50.6%",
    bottom: "53.65%",
    width: "25.15%",
    height: "23.6%",
    position: "absolute",
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
    position: "absolute",
  },
  home: {
    width: "99.57%",
    left: "0.43%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_200,
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
    color: Color.colorDarkslategray_100,
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
    position: "absolute",
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
  message: {
    color: Color.colorIndigo,
    fontSize: FontSize.size_2xs,
    top: "73.64%",
    height: "26.2%",
    left: "0%",
    width: "100%",
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
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  footer: {
    height: "13.38%",
    top: "86.63%",
    left: "0%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  todaysSpecialOffe: {
    marginTop: -374,
    width: "46.67%",
    left: "26.11%",
    fontSize: FontSize.size_13xl,
    height: 44,
    top: "50%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.88%",
    width: "3.83%",
    top: "4.75%",
    right: "88.94%",
    bottom: "92.38%",
    left: "7.22%",
    opacity: 0.9,
    position: "absolute",
  },
  rectangle: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  groups: {
    marginTop: -11,
    width: "63.29%",
    left: "24.24%",
  },
  heroiconsUserGroup1: {
    top: 19,
    left: 17,
  },
  curriculum: {
    width: 170,
    height: 60,
    top: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    borderTopLeftRadius: Border.br_3xs,
  },
  rectangle1: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    top: "0%",
    height: "100%",
    left: "0%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  about: {
    marginTop: -12,
    width: "47.65%",
    left: "34.71%",
  },
  tablerMessageCircleUser1Icon: {
    top: 18,
    left: 24,
  },
  resources: {
    width: "50.3%",
    left: "49.7%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  buttons: {
    top: 161,
    borderColor: Color.colorGainsboro_100,
    width: 338,
    height: 62,
    left: 11,
    overflow: "hidden",
  },
  tablerMessageCirclePlus1Icon: {
    left: 300,
    width: 33,
    height: 36,
    overflow: "hidden",
  },
  resourcesSeacrchChild: {
    height: "105.71%",
    width: "100.78%",
    top: "-2.86%",
    right: "-0.39%",
    bottom: "-2.86%",
    left: "-0.39%",
    borderRadius: Border.br_7xs,
    borderColor: Color.colorWhite,
  },
  searchFor: {
    height: "47.71%",
    width: "68.16%",
    top: "27.14%",
    left: "6.56%",
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkslategray_100,
  },
  iconsearch1: {
    height: "45.43%",
    width: "3.91%",
    top: "28.57%",
    right: "6.13%",
    bottom: "26%",
    left: "89.96%",
    position: "absolute",
  },
  resourcesSeacrch: {
    left: 15,
    backgroundColor: Color.colorWhite,
    width: 256,
    height: 35,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupIcon: {
    height: "3.94%",
    width: "2.11%",
    top: "4.63%",
    right: "12.06%",
    bottom: "91.44%",
    left: "85.83%",
    position: "absolute",
  },
  messages: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Messages;
