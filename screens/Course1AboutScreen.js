import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Course1AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.course1AboutScreen}
      locations={[0, 0.41, 0.97, 1]}
      colors={["#0f51d1", "#fff", "#fff", "#0f51d1"]}
    >
      <Image
        style={[styles.course1AboutScreenChild, styles.rectangle1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Pressable
        style={styles.iconParkSolidBack1}
        onPress={() => navigation.navigate("CoursesScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconparksolidback-1.png")}
        />
      </Pressable>
      <View style={[styles.networkingParent, styles.view4Position]}>
        <Text style={styles.networking}>NETWORKING</Text>
        <View style={styles.classhours}>
          <Image
            style={[styles.icon1, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.class, styles.classTypo]}>21 Class</Text>
          <Text style={[styles.text, styles.textTypo]}>|</Text>
          <Image
            style={[styles.classhoursChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-5.png")}
          />
          <Text style={[styles.hours, styles.classTypo]}>42 Hours</Text>
        </View>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate("Course1CurriculumScreen")}
        >
          <View style={[styles.about, styles.aboutLayout]}>
            <View style={[styles.rectangle, styles.iconPosition]} />
            <Text style={[styles.about1, styles.curriculcumTypo]}>About</Text>
          </View>
          <Pressable
            style={[styles.curriculum, styles.aboutLayout]}
            onPress={() => navigation.navigate("Course1CurriculumScreen")}
          >
            <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
            <Text style={[styles.curriculcum, styles.curriculcumTypo]}>
              Course Outline
            </Text>
          </Pressable>
          <Pressable
            style={styles.curriculum1}
            onPress={() => navigation.navigate("Course1ResourcesScreen")}
          >
            <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
            <Text style={[styles.curriculcum1, styles.curriculcumTypo]}>
              Resources
            </Text>
          </Pressable>
        </Pressable>
        <Text
          style={[styles.thisLessonExplainsWhatNetw, styles.quizzesTypo]}
        >{`This lesson explains what networking is about and the devices used in it. It teaches you everything about Cisco, Security, Wireless and Linux. `}</Text>
        <View style={styles.mentor}>
          <Text style={[styles.instructor, styles.instructorTypo]}>
            Instructor
          </Text>
          <Image
            style={[styles.imageBgIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/image-bg.png")}
          />
          <Text style={[styles.williamSCunningha, styles.instructorClr]}>
            Dr. Frederic NZANYWAYINGOMA
          </Text>
          <Text style={[styles.graphicDesign, styles.textTypo]}>
            Networking
          </Text>
          <Image
            style={styles.fill1Icon}
            contentFit="cover"
            source={require("../assets/fill-1.png")}
          />
          <Image
            style={[styles.mentorChild, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/line-4.png")}
          />
        </View>
        <View style={styles.detailes}>
          <Text style={[styles.whatYoullGet, styles.view1Position]}>
            What You’ll Get
          </Text>
          <View style={styles.view}>
            <Image
              style={[styles.icon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
            <Text style={[styles.lessons, styles.lessonsTypo]}>
              15 Lecture’s Notes
            </Text>
          </View>
          <View style={[styles.view1, styles.view1Position]}>
            <Image
              style={[styles.icon3, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/icon2.png")}
            />
            <Text style={[styles.accessMobileDeskt, styles.quizzesTypo]}>
              Access Mobile, Desktop
            </Text>
          </View>
          <View style={[styles.view2, styles.viewPosition]}>
            <Image
              style={[styles.icon4, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
            <Text style={[styles.audioBook, styles.lessonsPosition]}>
              Books
            </Text>
            <Image
              style={styles.gameIconsBookshelf1}
              contentFit="cover"
              source={require("../assets/gameiconsbookshelf-1.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewPosition]}>
            <Image
              style={[styles.icon5, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
            <Text style={[styles.quizzes, styles.quizzesTypo]}>Quizzes</Text>
          </View>
          <View style={[styles.view4, styles.view4Position]}>
            <Image
              style={[styles.letsIconsGroup1, styles.view4Position]}
              contentFit="cover"
              source={require("../assets/letsiconsgroup-1.png")}
            />
            <Text style={[styles.audioBook1, styles.audioPosition]}>
              Group Assignment
            </Text>
          </View>
          <View style={styles.view5}>
            <Image
              style={[styles.letsIconsGroup1, styles.view4Position]}
              contentFit="cover"
              source={require("../assets/materialsymbolslightlivetvoutlinesharp-1.png")}
            />
            <Text style={[styles.audioBook2, styles.audioPosition]}>
              Live Sessions
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Course1LEARNINGScreen")}
        >
          <Image
            style={[styles.buttonprimaryBackgroundIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/buttonprimary-background.png")}
          />
          <Text style={[styles.startLearning, styles.lessonsTypo]}>
            <Text style={styles.start}>Start</Text>
            {` `}
            <Text style={styles.start}>Learning</Text>
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <View style={[styles.footercourse, styles.iconPosition]}>
          <Image
            style={[styles.buttonprimaryBackgroundIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/footercourse-background.png")}
          />
          <Image
            style={[styles.buttonprimaryBackgroundIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/union2.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.lessonsTypo]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-182.png")}
            />
            <Image
              style={[styles.iconsearch, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch3.png")}
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
              source={require("../assets/iconfooteraccountoff2.png")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rectangle1Position: {
    borderBottomRightRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
  },
  view4Position: {
    left: 0,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  classTypo: {
    color: Color.colorChocolate_100,
    fontFamily: FontFamily.mulishExtraBold,
    fontWeight: "800",
    marginTop: -6.5,
    fontSize: FontSize.size_2xs,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  aboutLayout: {
    width: 109,
    height: 52,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  curriculcumTypo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  quizzesTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  instructorTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jostSemiBold,
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
  },
  instructorClr: {
    color: Color.colorGray_100,
    position: "absolute",
  },
  view1Position: {
    left: "2.15%",
    position: "absolute",
  },
  lessonsTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  viewPosition: {
    left: "0.39%",
    position: "absolute",
    overflow: "hidden",
  },
  lessonsPosition: {
    marginTop: -9.4,
    fontSize: FontSize.size_sm,
    top: "50%",
    color: Color.colorBlack,
  },
  audioPosition: {
    marginTop: -9,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "left",
    color: Color.colorBlack,
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
  course1AboutScreenChild: {
    marginLeft: -182,
    borderBottomLeftRadius: 100,
    width: 362,
    height: 219,
    borderTopLeftRadius: Border.br_3xs,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconParkSolidBack1: {
    left: 10,
    top: 207,
    width: 46,
    height: 24,
    position: "absolute",
  },
  networking: {
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  icon1: {
    height: "93.68%",
    width: "10.83%",
    right: "89.17%",
    bottom: "6.32%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  class: {
    left: "15.98%",
  },
  text: {
    marginTop: -8.5,
    left: "48.52%",
    color: "#ea721c",
    fontSize: FontSize.size_sm,
  },
  classhoursChild: {
    height: "84.21%",
    width: "9.47%",
    top: "10.53%",
    right: "33.73%",
    bottom: "5.26%",
    left: "56.8%",
    position: "absolute",
  },
  hours: {
    left: "71.01%",
  },
  classhours: {
    width: 169,
    height: 19,
    marginTop: 25,
  },
  rectangle: {
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue,
    borderWidth: 2,
    right: "0%",
    top: "0%",
    height: "100%",
    borderTopLeftRadius: Border.br_3xs,
    width: "100%",
  },
  about1: {
    marginTop: -11,
    width: "45.87%",
    left: "27.52%",
    top: "50%",
  },
  about: {
    left: 1,
  },
  rectangle1: {
    right: "0%",
    left: "0%",
    borderBottomRightRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    width: "100%",
  },
  curriculcum: {
    height: "88.46%",
    width: "88.07%",
    top: "11.54%",
    left: "6.42%",
  },
  curriculum: {
    left: 231,
  },
  rectangle2: {
    width: "108.38%",
    right: "-2.82%",
    left: "-5.56%",
  },
  curriculcum1: {
    width: "63.33%",
    top: "28.85%",
    left: "17.09%",
  },
  curriculum1: {
    left: 114,
    width: 117,
    height: 52,
    top: 0,
    position: "absolute",
  },
  buttons: {
    width: 339,
    height: 52,
    marginTop: 25,
  },
  thisLessonExplainsWhatNetw: {
    width: 328,
    marginTop: 25,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
  },
  instructor: {
    marginTop: -57.5,
    width: "28.96%",
    left: "0.3%",
    color: Color.colorGray_100,
    position: "absolute",
  },
  imageBgIcon: {
    height: "46.96%",
    width: "15.01%",
    top: "33.91%",
    right: "84.99%",
    bottom: "19.13%",
    left: "0%",
    position: "absolute",
  },
  williamSCunningha: {
    marginTop: -18.5,
    width: "76.12%",
    left: "14.93%",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
  },
  graphicDesign: {
    marginTop: 12.5,
    width: "25.67%",
    left: "18.21%",
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
  },
  fill1Icon: {
    height: 30,
    width: 24,
  },
  mentorChild: {
    height: "0.87%",
    top: "99.13%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  mentor: {
    width: 335,
    height: 115,
    marginTop: 25,
    overflow: "hidden",
  },
  whatYoullGet: {
    marginTop: -148,
    width: "56.09%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jostSemiBold,
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
    color: Color.colorBlack,
  },
  icon2: {
    width: "12.29%",
    right: "87.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
  },
  lessons: {
    width: "77.91%",
    left: "18.4%",
    marginTop: -9.4,
    fontSize: FontSize.size_sm,
    top: "50%",
    color: Color.colorBlack,
  },
  view: {
    height: "7.03%",
    width: "70.9%",
    top: "15.54%",
    right: "26.76%",
    bottom: "77.43%",
    left: "2.34%",
    position: "absolute",
    overflow: "hidden",
  },
  icon3: {
    height: "97.91%",
    width: "6.59%",
    right: "93.41%",
    bottom: "2.09%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  accessMobileDeskt: {
    marginTop: -8.95,
    width: "69.78%",
    left: "14.21%",
    fontSize: FontSize.size_sm,
    top: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  view1: {
    height: "8.07%",
    width: "97.85%",
    top: "31.28%",
    bottom: "60.64%",
    right: "0%",
    overflow: "hidden",
  },
  icon4: {
    height: "72.37%",
    width: "21.04%",
    top: "10.96%",
    right: "78.96%",
    bottom: "16.67%",
    left: "0%",
    position: "absolute",
  },
  audioBook: {
    width: "36.01%",
    left: "31.6%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  gameIconsBookshelf1: {
    top: -1,
    left: 4,
    width: 20,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  view2: {
    height: "7.7%",
    width: "49.57%",
    top: "47.43%",
    right: "50.04%",
    bottom: "44.86%",
  },
  icon5: {
    width: "19.04%",
    right: "80.96%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
  },
  quizzes: {
    marginTop: -8.9,
    width: "45.67%",
    left: "29.33%",
    fontSize: FontSize.size_sm,
    top: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  view3: {
    height: "7.36%",
    width: "50.47%",
    top: "78.28%",
    right: "49.14%",
    bottom: "14.36%",
  },
  letsIconsGroup1: {
    width: 24,
    height: 24,
    top: 0,
    overflow: "hidden",
  },
  audioBook1: {
    width: "77.2%",
    left: "22.8%",
  },
  view4: {
    top: 185,
    width: 180,
    height: 24,
  },
  audioBook2: {
    width: "72.87%",
    left: "27.13%",
  },
  view5: {
    top: 272,
    left: 2,
    width: 136,
    height: 24,
    position: "absolute",
  },
  detailes: {
    width: 256,
    height: 296,
    marginTop: 25,
  },
  buttonprimaryBackgroundIcon: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  start: {
    color: Color.colorBlack,
  },
  startLearning: {
    height: "48%",
    marginLeft: -55.95,
    top: "25.44%",
    fontSize: FontSize.size_base,
    width: 126,
    left: "50%",
  },
  button: {
    width: 164,
    height: 62,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginTop: 25,
  },
  networkingParent: {
    top: 241,
    width: 358,
    height: 460,
    alignItems: "center",
    paddingHorizontal: 11,
    paddingVertical: Padding.p_5xs,
    borderTopRightRadius: Border.br_3xs,
    left: 0,
    borderTopLeftRadius: Border.br_3xs,
  },
  search1: {
    height: "22.49%",
    width: "91.16%",
    top: "77.51%",
    left: "8.84%",
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
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
    position: "absolute",
  },
  iconsearch: {
    height: "23.54%",
    width: "23.07%",
    top: "22.88%",
    right: "54.7%",
    bottom: "53.57%",
    left: "22.24%",
    position: "absolute",
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
    position: "absolute",
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
    position: "absolute",
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
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  footer: {
    height: "14.21%",
    top: "85.75%",
    bottom: "0.04%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  course1AboutScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Course1AboutScreen;
