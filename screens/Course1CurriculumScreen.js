import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Course1CurriculumScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.course1CurriculumScreen}
      locations={[0, 0.65, 0.97, 1]}
      colors={["#0f51d1", "#fff", "#fff", "#0f51d1"]}
    >
      <Image
        style={[styles.course1CurriculumScreenChild, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-103.png")}
      />
      <View style={[styles.view, styles.viewPosition]}>
        <Text style={styles.networking}>NETWORKING</Text>
        <View style={styles.classhours}>
          <Image
            style={[styles.icon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/icon7.png")}
          />
          <Text style={[styles.class, styles.classTypo]}>21 Class</Text>
          <Text style={styles.text}>|</Text>
          <Image
            style={[styles.classhoursChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/group-51.png")}
          />
          <Text style={[styles.hours, styles.classTypo]}>42 Hours</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.curriculum}>
            <View style={[styles.rectangle, styles.rectangleShadowBox]} />
            <Text style={[styles.curriculcum, styles.aboutTypo]}>
              Course Outline
            </Text>
            <Image
              style={[styles.iconfootercourseoff, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/iconfootercourseoff2.png")}
            />
          </View>
          <Pressable
            style={[styles.resources, styles.rectangleShadowBox]}
            onPress={() => navigation.navigate("Course1ResourcesScreen")}
          >
            <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
            <Text style={[styles.about, styles.aboutTypo]}>Resources</Text>
            <Image
              style={styles.arcticonsAutotools1}
              contentFit="cover"
              source={require("../assets/arcticonsautotools-1.png")}
            />
          </Pressable>
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
      </View>
      <Pressable
        style={styles.chapters}
        onPress={() => navigation.navigate("Course1LEARNINGScreen")}
      >
        <View style={styles.viewLayout1}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 01 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingChild, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1263.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 02 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1264.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 03 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1264.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 04- `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1265.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 05 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1265.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 06 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1265.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={styles.heading}>
            <Text style={styles.section01Container}>
              <Text style={styles.lecture}>
                <Text style={styles.lecture1}>LECTURE</Text>
              </Text>
              <Text style={styles.introduction}>
                <Text style={styles.lecture}>{` 07 - `}</Text>
                <Text style={styles.introduction1}>Introduction</Text>
              </Text>
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.headingItem, styles.headingPosition]}
              contentFit="cover"
              source={require("../assets/group-1265.png")}
            />
            <Text style={styles.text2}>65%</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.circle, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval2.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>02</Text>
            </View>
            <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
              Chapter 2: Networking H..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.circle1, styles.circlePosition]}>
              <Image
                style={styles.ovalIcon}
                contentFit="cover"
                source={require("../assets/oval3.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>01</Text>
            </View>
            <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
              Chapter 1: Introductio..
            </Text>
            <Image
              style={[styles.child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/line-41.png")}
            />
          </View>
        </View>
      </Pressable>
      <View style={styles.footercourse}>
        <Image
          style={styles.ovalIcon}
          contentFit="cover"
          source={require("../assets/footercourse-background.png")}
        />
        <Image
          style={styles.ovalIcon}
          contentFit="cover"
          source={require("../assets/union3.png")}
        />
        <View style={styles.search}>
          <Text style={styles.search1}>Search</Text>
          <Image
            style={[styles.searchChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={[styles.iconsearch, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/iconsearch5.png")}
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
            style={[styles.iconfooterhomeoff, styles.childLayout]}
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
            style={[styles.footeroffChild, styles.childLayout]}
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
            source={require("../assets/iconfootercourseon2.png")}
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
            source={require("../assets/iconfooternotificationoff3.png")}
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
            source={require("../assets/iconfooteraccountoff4.png")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition: {
    width: "99.72%",
    left: "0%",
    right: "0.28%",
    top: "0%",
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
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  aboutTypo: {
    textAlign: "center",
    marginTop: -11,
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_mini,
    top: "50%",
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "32.69%",
    top: "26.92%",
    width: "3.89%",
    height: "40.38%",
    opacity: 0.9,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headingPosition: {
    left: "5.56%",
    right: "31.11%",
    top: "76.92%",
    width: "63.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout: {
    height: "32.24%",
    backgroundColor: Color.colorWhite,
    width: "99.72%",
    position: "absolute",
    overflow: "hidden",
  },
  circlePosition: {
    left: "6.94%",
    right: "80.28%",
    width: "12.78%",
    height: "63.88%",
    position: "absolute",
    overflow: "hidden",
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
  graphicTypo: {
    fontSize: FontSize.size_base,
    left: "19.72%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  viewLayout1: {
    height: 152,
    width: 361,
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
  course1CurriculumScreenChild: {
    height: "28%",
    bottom: "72%",
    left: "0%",
    right: "0.28%",
    top: "0%",
    width: "99.72%",
  },
  networking: {
    height: "21.2%",
    width: "61.56%",
    top: "10.58%",
    left: "22.84%",
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    height: "93.88%",
    width: "10.84%",
    right: "89.16%",
    bottom: "6.12%",
    left: "0%",
    top: "0%",
  },
  class: {
    width: "26.65%",
    left: "15.98%",
  },
  text: {
    marginTop: -8.7,
    width: "2.35%",
    left: "48.55%",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
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
    top: "44.23%",
    right: "26.18%",
    bottom: "41.63%",
    left: "23.96%",
    position: "absolute",
  },
  rectangle: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    left: "0%",
    width: "100%",
  },
  curriculcum: {
    width: "63.29%",
    left: "24.24%",
  },
  iconfootercourseoff: {
    height: "38.5%",
    width: "9.12%",
    top: "28.83%",
    right: "82.59%",
    bottom: "32.67%",
    left: "8.29%",
  },
  curriculum: {
    top: 1,
    left: 0,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 170,
    height: 60,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  rectangle1: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderColor: Color.colorAliceblue,
    borderWidth: 2,
    borderStyle: "solid",
    left: "0%",
    width: "100%",
  },
  about: {
    width: "47.65%",
    left: "35.88%",
  },
  arcticonsAutotools1: {
    top: 15,
    left: 26,
    width: 31,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  resources: {
    width: "50.3%",
    left: "49.7%",
  },
  buttons: {
    top: 137,
    left: 6,
    width: 338,
    height: 62,
    position: "absolute",
    overflow: "hidden",
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
    left: "5.57%",
    top: "33.65%",
    right: "90.53%",
    bottom: "53.08%",
    width: "3.9%",
    height: "13.27%",
    position: "absolute",
  },
  view: {
    height: "26%",
    bottom: "74%",
    left: "0%",
    right: "0.28%",
    top: "0%",
    position: "absolute",
  },
  lecture1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  lecture: {
    color: Color.colorGray_100,
  },
  introduction1: {
    color: Color.colorMediumslateblue_200,
  },
  introduction: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  section01Container: {
    marginTop: -12,
    width: "56.86%",
    left: "3.89%",
    fontSize: FontSize.size_mini,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    right: "7.5%",
    left: "88.61%",
  },
  headingChild: {
    height: "13.46%",
    bottom: "9.62%",
  },
  text2: {
    top: 36,
    left: 273,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  heading: {
    height: "34.21%",
    bottom: "65.79%",
    backgroundColor: Color.colorWhite,
    left: "0.28%",
    right: "0%",
    top: "0%",
    width: "99.72%",
    position: "absolute",
    overflow: "hidden",
  },
  ovalIcon: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text3: {
    left: "30.43%",
  },
  circle: {
    top: "25.92%",
    bottom: "10.2%",
  },
  setupYourGraphic: {
    marginTop: -6.5,
  },
  child: {
    height: "1.43%",
    top: "97.96%",
    bottom: "0.61%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  view2: {
    top: "67.76%",
    left: "0.28%",
    height: "32.24%",
    bottom: "0%",
    right: "0%",
  },
  text4: {
    left: "32.61%",
  },
  circle1: {
    top: "17.35%",
    bottom: "18.78%",
  },
  whyUsingGraphic: {
    marginTop: -10.4,
  },
  view3: {
    top: "34.21%",
    bottom: "33.55%",
    left: "0%",
    right: "0.28%",
  },
  headingItem: {
    height: "12.69%",
    bottom: "10.38%",
  },
  view4: {
    marginTop: 15,
  },
  vectorIcon3: {
    right: "3.61%",
    left: "92.5%",
  },
  chapters: {
    height: "59.63%",
    width: "99.17%",
    top: "28.63%",
    bottom: "11.75%",
    left: "0.56%",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    right: "0.28%",
    position: "absolute",
  },
  search1: {
    height: "22.49%",
    width: "91.16%",
    top: "77.51%",
    left: "8.84%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  searchChild: {
    height: "70.5%",
    width: "68.92%",
    right: "31.08%",
    bottom: "29.5%",
    opacity: 0.05,
    left: "0%",
    top: "0%",
  },
  iconsearch: {
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
    top: "74.25%",
    height: "25.6%",
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
    color: Color.colorBlack,
    top: "74.25%",
    height: "25.6%",
    left: "0%",
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
    height: "14.21%",
    top: "85.5%",
    bottom: "0.29%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  course1CurriculumScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Course1CurriculumScreen;
