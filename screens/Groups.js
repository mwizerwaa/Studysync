import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Groups = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.groups}
      locations={[0, 0.27, 0.97]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <Image
        style={[styles.iconfooterhomeon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/iconfooterhomeon1.png")}
      />
      <View style={[styles.resourcesSeacrch, styles.resourcesShadowBox]}>
        <View style={[styles.resourcesSeacrchChild, styles.curriculumBorder]} />
        <Text style={styles.searchFor}>Search for...</Text>
        <Image
          style={[styles.iconsearch, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/iconsearch7.png")}
        />
      </View>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.footer, styles.rectanglePosition]}>
        <View style={[styles.footerhome, styles.rectanglePosition]}>
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.rectanglePosition]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <Image
            style={[styles.footerhomeBackgroundIcon, styles.rectanglePosition]}
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
              style={[styles.iconsearch1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch8.png")}
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
          </View>
          <View style={styles.footeroff}>
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
              source={require("../assets/iconfooteraccountoff6.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.buttons, styles.buttonsLayout]}>
        <View style={[styles.curriculum, styles.rectangleBg]}>
          <View style={[styles.rectangle, styles.rectangleBg]} />
          <Text style={[styles.groups1, styles.aboutTypo]}>Groups</Text>
          <Image
            style={[
              styles.heroiconsUserGroup1,
              styles.heroiconsUserGroup1Layout,
            ]}
            contentFit="cover"
            source={require("../assets/heroiconsusergroup-1.png")}
          />
        </View>
        <Pressable
          style={[styles.resources, styles.rectanglePosition]}
          onPress={() => navigation.navigate("Messages")}
        >
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.about, styles.aboutTypo]}>Messages</Text>
          <Image
            style={[
              styles.tablerMessageCircleUser1Icon,
              styles.heroiconsUserGroup1Layout,
            ]}
            contentFit="cover"
            source={require("../assets/tablermessagecircleuser-1.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.chat, styles.chatLayout]}
        onPress={() => navigation.navigate("GroupChat")}
      >
        <LinearGradient
          style={styles.chatChildShadowBox}
          locations={[0, 0.28]}
          colors={["#7faafb", "#fff"]}
        />
        <Image
          style={[styles.chatItem, styles.isYear4Position]}
          contentFit="cover"
          source={require("../assets/ellipse-2131.png")}
        />
        <Text
          style={[styles.isYear4, styles.isYear4Position]}
        >{`IS YEAR 4 `}</Text>
        <Text style={styles.mugeniBlandineHii}>
          MUGENI Blandine: Hii!! I am..
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
          style={[styles.chatItem, styles.isYear4Position]}
          contentFit="cover"
          source={require("../assets/ellipse-2131.png")}
        />
        <Text
          style={[styles.isYear4, styles.isYear4Position]}
        >{`IS YEAR 4 `}</Text>
        <Text style={styles.mugeniBlandineHii}>
          MUGENI Blandine: Hii!! I am..
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
      <View style={[styles.chat2, styles.chatLayout]}>
        <LinearGradient
          style={styles.chatChildShadowBox}
          locations={[0, 0.28]}
          colors={["#7faafb", "#fff"]}
        />
        <Image
          style={[styles.chatItem, styles.isYear4Position]}
          contentFit="cover"
          source={require("../assets/ellipse-2131.png")}
        />
        <Text
          style={[styles.isYear4, styles.isYear4Position]}
        >{`IS YEAR 4 `}</Text>
        <Text style={styles.mugeniBlandineHii}>
          MUGENI Blandine: Hii!! I am..
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
      <Text style={[styles.todaysSpecialOffe, styles.isYear4Clr]}>Chats</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  resourcesShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  curriculumBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  vectorPosition: {
    top: "4.63%",
    position: "absolute",
  },
  rectanglePosition: {
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
  buttonsLayout: {
    height: 62,
    left: 11,
  },
  rectangleBg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  aboutTypo: {
    textAlign: "center",
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  heroiconsUserGroup1Layout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  chatLayout: {
    height: 78,
    width: 359,
    left: 1,
    position: "absolute",
  },
  isYear4Position: {
    top: 8,
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
  isYear4Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconfooterhomeon: {
    height: "2.59%",
    width: "7.31%",
    top: "90.5%",
    right: "83.53%",
    bottom: "6.91%",
    left: "9.17%",
    position: "absolute",
  },
  resourcesSeacrchChild: {
    height: "105.71%",
    width: "100.69%",
    top: "-2.86%",
    right: "-0.35%",
    bottom: "-2.86%",
    left: "-0.35%",
    borderRadius: Border.br_7xs,
    borderColor: Color.colorWhite,
    position: "absolute",
  },
  searchFor: {
    height: "47.71%",
    width: "68.17%",
    top: "27.14%",
    left: "6.57%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  iconsearch: {
    height: "45.43%",
    width: "3.91%",
    top: "28.57%",
    right: "6.12%",
    bottom: "26%",
    left: "89.97%",
    position: "absolute",
  },
  resourcesSeacrch: {
    top: 91,
    left: 36,
    backgroundColor: Color.colorWhite,
    width: 289,
    height: 35,
    position: "absolute",
  },
  icon: {
    opacity: 0.9,
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "7.5%",
    right: "88.67%",
    bottom: "92.5%",
    width: "3.83%",
    height: "2.88%",
  },
  groupIcon: {
    height: "3.94%",
    width: "2.11%",
    right: "10.67%",
    bottom: "91.44%",
    left: "87.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  footerhomeBackgroundIcon: {
    top: "0%",
    left: "0%",
    height: "100%",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
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
  iconsearch1: {
    height: "23.6%",
    width: "25.15%",
    top: "22.75%",
    right: "50.6%",
    bottom: "53.65%",
    left: "24.25%",
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
    fontSize: FontSize.size_2xs,
    top: "73.64%",
    height: "26.2%",
    left: "0%",
    width: "100%",
    color: Color.colorDarkslategray_100,
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
    bottom: "27.94%",
    top: "13.55%",
    height: "58.5%",
    position: "absolute",
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
    left: "0%",
    height: "100%",
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
  rectangle: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
  groups1: {
    marginTop: -11,
    width: "63.29%",
    left: "24.24%",
  },
  heroiconsUserGroup1: {
    top: 19,
    left: 17,
  },
  curriculum: {
    left: 0,
    borderColor: Color.colorGainsboro_100,
    width: 170,
    height: 60,
    top: 1,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangle1: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderColor: Color.colorAliceblue,
    borderWidth: 2,
    top: "0%",
    left: "0%",
    height: "100%",
    borderStyle: "solid",
    right: "0%",
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
  buttons: {
    top: 151,
    width: 338,
    position: "absolute",
    overflow: "hidden",
    height: 62,
    left: 11,
  },
  chatChildShadowBox: {
    width: 356,
    borderRadius: Border.br_xl,
    marginLeft: -179.5,
    left: "50%",
    height: 78,
    top: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: "transparent",
  },
  chatItem: {
    width: 62,
    height: 62,
    left: 11,
  },
  isYear4: {
    right: 83,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 159,
    height: 28,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "600",
    top: 8,
  },
  mugeniBlandineHii: {
    marginLeft: -87.5,
    top: 36,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray,
    width: 195,
    height: 21,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    right: 0,
  },
  text: {
    left: 8,
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
  chat: {
    top: 263,
  },
  chat1: {
    top: 351,
  },
  chat2: {
    top: 439,
  },
  todaysSpecialOffe: {
    marginTop: -375,
    width: "46.67%",
    fontSize: FontSize.size_13xl,
    height: 44,
    color: Color.colorBlack,
    top: "50%",
    left: "24.72%",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groups: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Groups;
