import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Course1ResourcesScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.course1Resourcesscreen}
      locations={[0, 0.44, 0.94]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <Image
        style={[styles.course1ResourcesscreenChild, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-103.png")}
      />
      <LinearGradient
        style={[styles.lineargradient, styles.lineargradientPosition]}
        locations={[0, 0.87]}
        colors={["#438ccf", "#fff"]}
      >
        <Text style={[styles.networking, styles.networkingFlexBox]}>
          NETWORKING
        </Text>
        <View style={styles.classhours}>
          <Image
            style={[styles.icon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/icon8.png")}
          />
          <Text style={[styles.class, styles.classTypo]}>21 Class</Text>
          <Text style={styles.text}>|</Text>
          <Image
            style={[styles.classhoursChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-52.png")}
          />
          <Text style={[styles.hours, styles.classTypo]}>42 Hours</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.curriculum, styles.curriculumBg]}
            onPress={() => navigation.navigate("Course1CurriculumScreen")}
          >
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={[styles.curriculcum, styles.aboutTypo]}>
              Course Outline
            </Text>
            <Image
              style={[styles.iconfootercourseoff, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconfootercourseoff5.png")}
            />
          </Pressable>
          <View style={styles.resources}>
            <View style={[styles.rectangle1, styles.rectangle1Border]} />
            <Text style={[styles.about, styles.aboutTypo]}>Resources</Text>
            <Image
              style={[
                styles.arcticonsAutotools1,
                styles.arcticonsAutotools1Layout,
              ]}
              contentFit="cover"
              source={require("../assets/arcticonsautotools-11.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
      </LinearGradient>
      <View style={[styles.resourcesSeacrch, styles.curriculumBg]}>
        <View style={[styles.resourcesSeacrchChild, styles.childBorder]} />
        <Text style={[styles.searchForMore, styles.networkingFlexBox]}>
          Search for more resources....
        </Text>
        <Image
          style={[styles.iconsearch, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/iconsearch9.png")}
        />
      </View>
      <View style={styles.footer}>
        <View style={[styles.footercourse, styles.rectanglePosition]}>
          <Image
            style={[
              styles.footercourseBackgroundIcon,
              styles.rectanglePosition,
            ]}
            contentFit="cover"
            source={require("../assets/footercourse-background.png")}
          />
          <Image
            style={[
              styles.footercourseBackgroundIcon,
              styles.rectanglePosition,
            ]}
            contentFit="cover"
            source={require("../assets/union2.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-182.png")}
            />
            <Image
              style={[styles.iconsearch1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch10.png")}
            />
          </View>
          <View style={[styles.footeron, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeronBackgroundIcon,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background1.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.iconfooterhomeoff, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconfooterhomeoff1.png")}
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
              source={require("../assets/footeron-background1.png")}
            />
            <Image
              style={[styles.footeroffChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-192.png")}
            />
            <Text style={[styles.course, styles.homeTypo]}>Course</Text>
            <Image
              style={[
                styles.iconfootercourseon,
                styles.iconfootercourseonPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfootercourseon1.png")}
            />
          </Pressable>
          <View style={[styles.footeroff1, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon1,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background1.png")}
            />
            <Text style={[styles.message, styles.homeTypo]}>Message</Text>
            <Image
              style={[
                styles.iconfooternotificationoff,
                styles.iconfootercourseonPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooternotificationoff2.png")}
            />
          </View>
          <View style={[styles.footeroff2, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon2,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background1.png")}
            />
            <Text style={[styles.message, styles.homeTypo]}>Account</Text>
            <Image
              style={[
                styles.iconfooteraccountoff,
                styles.iconfootercourseonPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff7.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.courseResources, styles.search1Typo]}>
        COURSE RESOURCES
      </Text>
      <View style={[styles.groupButton, styles.groupLayout]}>
        <View style={[styles.groupButtonChild, styles.groupLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View
        style={[styles.course1ResourcesscreenItem, styles.rectangle1Border]}
      />
      <View style={[styles.view, styles.viewPosition]}>
        <View style={styles.circle}>
          <Image
            style={[
              styles.footercourseBackgroundIcon,
              styles.rectanglePosition,
            ]}
            contentFit="cover"
            source={require("../assets/oval4.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>01</Text>
        </View>
        <Text style={styles.whyUsingGraphic}>Photoshop app</Text>
        <Image
          style={[styles.child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/line-41.png")}
        />
        <Image
          style={[
            styles.materialSymbolsDownload1Icon,
            styles.arcticonsAutotools1Layout,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolsdownload-1.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewPosition]}>
        <View style={styles.circle}>
          <Image
            style={[
              styles.footercourseBackgroundIcon,
              styles.rectanglePosition,
            ]}
            contentFit="cover"
            source={require("../assets/oval4.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>02</Text>
        </View>
        <Text style={styles.whyUsingGraphic}>
          Networking for beginners(PDF)
        </Text>
        <Image
          style={[styles.child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/line-41.png")}
        />
        <Image
          style={[
            styles.materialSymbolsDownload1Icon,
            styles.arcticonsAutotools1Layout,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolsdownload-1.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineargradientPosition: {
    left: "0.28%",
    width: "99.72%",
    right: "0%",
    top: "0%",
  },
  networkingFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  classTypo: {
    color: Color.colorChocolate_100,
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_2xs,
    top: "50%",
    marginTop: -6.7,
    textAlign: "left",
    position: "absolute",
  },
  curriculumBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectanglePosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  aboutTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    top: "50%",
    fontWeight: "600",
    position: "absolute",
  },
  rectangle1Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  arcticonsAutotools1Layout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  childBorder: {
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
  },
  search1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  footeroffPosition: {
    bottom: "28.06%",
    top: "13.54%",
    height: "58.4%",
    position: "absolute",
  },
  backgroundIconPosition: {
    bottom: "8.89%",
    height: "91.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    top: "74.25%",
    height: "25.6%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  iconfootercourseonPosition: {
    bottom: "41.42%",
    top: "21.54%",
    height: "37.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 27,
    width: 28,
    position: "absolute",
  },
  viewPosition: {
    height: "6.13%",
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  textTypo: {
    marginTop: -9.65,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_sm,
    top: "50%",
    fontWeight: "600",
    position: "absolute",
  },
  course1ResourcesscreenChild: {
    height: "28%",
    bottom: "72%",
    left: "0.28%",
    width: "99.72%",
    right: "0%",
    top: "0%",
  },
  networking: {
    height: "21.2%",
    width: "61.56%",
    top: "10.58%",
    left: "22.56%",
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
  },
  icon: {
    height: "93.88%",
    width: "10.84%",
    right: "89.16%",
    bottom: "6.12%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  class: {
    width: "26.65%",
    left: "15.98%",
  },
  text: {
    marginTop: -8.7,
    width: "2.35%",
    left: "48.55%",
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    fontSize: FontSize.size_sm,
    color: Color.colorChocolate_100,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  classhoursChild: {
    height: "84.35%",
    width: "9.44%",
    top: "10.54%",
    right: "33.74%",
    bottom: "5.1%",
    left: "56.82%",
  },
  hours: {
    width: "28.99%",
    left: "71.01%",
  },
  classhours: {
    height: "14.13%",
    width: "49.86%",
    top: "42.79%",
    right: "24.79%",
    bottom: "43.08%",
    left: "25.35%",
    position: "absolute",
  },
  rectangle: {
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
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
  curriculcum: {
    marginTop: -10.75,
    width: "63.29%",
    left: "24.24%",
  },
  iconfootercourseoff: {
    height: "38.54%",
    width: "9.12%",
    top: "28.78%",
    right: "82.59%",
    bottom: "32.68%",
    left: "8.29%",
  },
  curriculum: {
    height: "99.19%",
    top: "0.81%",
    right: "49.4%",
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    backgroundColor: Color.colorWhite,
    width: "50.6%",
    left: "0%",
  },
  rectangle1: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderColor: Color.colorAliceblue,
    borderWidth: 2,
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
  },
  about: {
    marginTop: -10.6,
    width: "47.65%",
    left: "35.88%",
  },
  arcticonsAutotools1: {
    top: 15,
    left: 26,
    width: 31,
  },
  resources: {
    height: "98.71%",
    bottom: "1.29%",
    left: "49.4%",
    backgroundColor: Color.colorGainsboro_100,
    width: "50.6%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  buttons: {
    height: "29.81%",
    width: "93.59%",
    top: "61.63%",
    right: "3.34%",
    bottom: "8.56%",
    left: "3.06%",
    position: "absolute",
  },
  icon1: {
    opacity: 0.9,
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "5.01%",
    top: "31.73%",
    right: "91.09%",
    bottom: "55%",
    width: "3.9%",
    height: "13.27%",
    position: "absolute",
  },
  lineargradient: {
    height: "26%",
    bottom: "74%",
    position: "absolute",
    backgroundColor: "transparent",
  },
  resourcesSeacrchChild: {
    height: "107.14%",
    width: "100.69%",
    top: "-3.57%",
    right: "-0.35%",
    bottom: "-3.57%",
    left: "-0.35%",
    borderColor: Color.colorChocolate_100,
    position: "absolute",
  },
  searchForMore: {
    height: "47.86%",
    width: "68.17%",
    top: "27.14%",
    left: "6.57%",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightsteelblue_100,
  },
  iconsearch: {
    height: "45.36%",
    width: "3.91%",
    top: "28.57%",
    right: "6.12%",
    bottom: "26.07%",
    left: "89.97%",
  },
  resourcesSeacrch: {
    top: 254,
    left: 24,
    width: 289,
    height: 28,
  },
  footercourseBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  search1: {
    height: "22.49%",
    width: "91.16%",
    top: "77.51%",
    left: "8.84%",
    color: Color.colorBlack,
  },
  searchChild: {
    height: "70.5%",
    width: "68.92%",
    right: "31.08%",
    bottom: "29.5%",
    opacity: 0.05,
    left: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  iconsearch1: {
    height: "23.54%",
    width: "23.07%",
    top: "22.88%",
    right: "54.7%",
    bottom: "53.57%",
    left: "22.24%",
  },
  search: {
    height: "66.49%",
    width: "20.11%",
    top: "5.36%",
    right: "36.94%",
    bottom: "28.14%",
    left: "42.94%",
    position: "absolute",
  },
  footeronBackgroundIcon: {
    width: "50.96%",
    right: "49.04%",
    left: "0%",
  },
  home: {
    width: "99.68%",
    left: "0.32%",
    color: Color.colorBlack,
  },
  iconfooterhomeoff: {
    height: "33.28%",
    width: "33.6%",
    top: "23.49%",
    right: "58.52%",
    bottom: "43.22%",
    left: "7.88%",
  },
  footeron: {
    width: "17.28%",
    right: "74.44%",
    left: "8.28%",
  },
  footeroffBackgroundIcon: {
    width: "48.77%",
    right: "46.31%",
    left: "4.92%",
  },
  footeroffChild: {
    height: "3.01%",
    width: "38.46%",
    right: "52.31%",
    bottom: "96.99%",
    left: "9.23%",
    top: "0%",
    maxWidth: "100%",
  },
  course: {
    color: Color.colorMediumslateblue_100,
    left: "0%",
    width: "100%",
  },
  iconfootercourseon: {
    width: "35.38%",
    right: "53.85%",
    left: "10.77%",
  },
  footeroff: {
    width: "18.06%",
    right: "57.22%",
    left: "24.72%",
  },
  footeroffBackgroundIcon1: {
    width: "44.65%",
    right: "43.8%",
    left: "11.55%",
  },
  message: {
    left: "0%",
    color: Color.colorBlack,
    width: "100%",
  },
  iconfooternotificationoff: {
    width: "32.39%",
    right: "50.7%",
    left: "16.9%",
  },
  footeroff1: {
    width: "19.72%",
    right: "17.22%",
    left: "63.06%",
  },
  footeroffBackgroundIcon2: {
    width: "45.94%",
    right: "44.49%",
    left: "9.57%",
  },
  iconfooteraccountoff: {
    width: "33.33%",
    right: "51.59%",
    left: "15.07%",
  },
  footeroff2: {
    width: "19.17%",
    left: "80.83%",
    right: "0%",
  },
  footercourse: {
    position: "absolute",
  },
  footer: {
    height: "14.21%",
    top: "85.75%",
    bottom: "0.04%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  courseResources: {
    top: 320,
    left: 15,
    color: Color.colorGray_100,
  },
  groupButtonChild: {
    top: 0,
    left: 0,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
  },
  vectorIcon: {
    height: "52.59%",
    width: "54.29%",
    top: "22.22%",
    right: "24.29%",
    bottom: "25.19%",
    left: "21.43%",
    borderRadius: Border.br_7xs,
    opacity: 0.9,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupButton: {
    top: 315,
    left: 299,
  },
  course1ResourcesscreenItem: {
    top: 351,
    left: -1,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
  },
  text1: {
    left: "32.61%",
  },
  circle: {
    height: "63.88%",
    width: "12.78%",
    top: "16.33%",
    right: "84.72%",
    bottom: "19.8%",
    left: "2.5%",
    position: "absolute",
    overflow: "hidden",
  },
  whyUsingGraphic: {
    marginTop: -10.5,
    left: "19.72%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  child: {
    height: "1.43%",
    top: "97.96%",
    bottom: "0.61%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  materialSymbolsDownload1Icon: {
    top: 10,
    left: 300,
    width: 24,
  },
  view: {
    top: "43.88%",
    bottom: "50%",
  },
  text2: {
    left: "30.43%",
  },
  view1: {
    top: "49.88%",
    bottom: "44%",
  },
  course1Resourcesscreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Course1ResourcesScreen;
