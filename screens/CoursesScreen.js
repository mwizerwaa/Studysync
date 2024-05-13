import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const CoursesScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.coursesScreen}
      locations={[0, 0.41, 0.97, 1]}
      colors={["#0f51d1", "#fff", "#fff", "#0f51d1"]}
    >
      <Image
        style={[styles.pepiconsPopLineX3, styles.learningPosition]}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <View style={[styles.learning, styles.learningPosition]}>
        <View style={styles.learningLayout}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.learningItem, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-126.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay.png")}
          />
        </View>
        <View style={[styles.learning2, styles.learningLayout]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1261.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay.png")}
          />
        </View>
        <View style={[styles.learning2, styles.learningLayout]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1261.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay.png")}
          />
        </View>
        <View style={[styles.learning2, styles.learningLayout]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1261.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay.png")}
          />
        </View>
        <View style={[styles.learning2, styles.learningLayout]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1262.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay1.png")}
          />
        </View>
        <View style={[styles.learning2, styles.learningLayout]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
          <Text style={styles.researchMethodology}>{`Research 
Methodology`}</Text>
          <Image
            style={[styles.groupIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1262.png")}
          />
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
          <Text style={[styles.text, styles.minTypo]}>10/16</Text>
          <Image
            style={[styles.buttonplayIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/buttonplay1.png")}
          />
        </View>
      </View>
      <View style={[styles.myCoursesParent, styles.myCoursesParentLayout]}>
        <Text style={styles.myCourses}>My Courses</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={[styles.pepiconsPopDotsY12, styles.myCoursesParentLayout]}
          contentFit="cover"
          source={require("../assets/pepiconspopdotsy-1-21.png")}
        />
      </View>
      <View style={styles.learnedToday}>
        <Image
          style={[styles.learningChild, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-29.png")}
        />
        <Text style={[styles.learnedToday1, styles.minWrapperPosition]}>
          Learned today
        </Text>
        <View style={[styles.minWrapper, styles.minWrapperPosition]}>
          <Text style={[styles.min, styles.minTypo]}>46min</Text>
        </View>
        <Image
          style={[styles.learnedTodayItem, styles.learnedPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Image
          style={[styles.learnedTodayInner, styles.learnedPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-301.png")}
        />
      </View>
      <View style={[styles.footer, styles.footerPosition]}>
        <View style={[styles.footercourse, styles.footerPosition]}>
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/footercourse-background.png")}
          />
          <Image
            style={[styles.learningChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/union1.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-181.png")}
            />
            <Image
              style={[styles.iconsearch, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch2.png")}
            />
          </View>
          <Pressable
            style={[styles.footeron, styles.footeroffPosition]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
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
              source={require("../assets/iconfooterhomeoff.png")}
            />
          </Pressable>
          <View style={[styles.footeroff, styles.footeroffPosition]}>
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
              source={require("../assets/rectangle-191.png")}
            />
            <Text style={[styles.course, styles.homeTypo]}>Course</Text>
            <Image
              style={[
                styles.iconfootercourseon,
                styles.iconfootercourseonPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfootercourseon.png")}
            />
          </View>
          <View style={[styles.footeroff1, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon1,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background1.png")}
            />
            <Text style={[styles.account, styles.homeTypo]}>Account</Text>
            <Image
              style={[
                styles.iconfooteraccountoff,
                styles.iconfootercourseonPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.footeroff2}>
        <Image
          style={[styles.footeroffBackgroundIcon2, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/footeroff-background.png")}
        />
        <Text style={[styles.message, styles.search1Typo]}>Message</Text>
        <Image
          style={[styles.iconfooternotificationoff, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/iconfooternotificationoff1.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  learningPosition: {
    left: "50%",
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  completedTypo: {
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  minTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  learningLayout: {
    height: 200,
    width: 160,
  },
  myCoursesParentLayout: {
    height: 44,
    position: "absolute",
  },
  minWrapperPosition: {
    left: "4.78%",
    position: "absolute",
  },
  learnedPosition: {
    bottom: "17.69%",
    top: "76.04%",
    height: "6.26%",
    left: "4.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  footerPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  search1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  footeroffPosition: {
    top: "13.46%",
    height: "58.4%",
    bottom: "28.14%",
    position: "absolute",
  },
  backgroundIconPosition: {
    bottom: "8.89%",
    height: "91.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  homeTypo: {
    top: "74.4%",
    height: "25.6%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  iconfootercourseonPosition: {
    bottom: "41.27%",
    top: "21.69%",
    height: "37.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    width: 133,
    height: 63,
    overflow: "hidden",
  },
  learningChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  researchMethodology: {
    height: "26.25%",
    width: "68.13%",
    top: "13.7%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "11.88%",
    position: "absolute",
  },
  learningItem: {
    height: "3%",
    width: "76.88%",
    top: "52.5%",
    right: "11.56%",
    bottom: "44.5%",
    left: "11.56%",
    position: "absolute",
  },
  completed: {
    height: "9.85%",
    width: "42.5%",
    top: "60.2%",
    left: "11.88%",
    position: "absolute",
  },
  text: {
    height: "16.4%",
    width: "31.25%",
    top: "69.8%",
    left: "11.88%",
  },
  buttonplayIcon: {
    height: "24.1%",
    width: "27.5%",
    right: "6.88%",
    bottom: "6.1%",
    left: "65.63%",
    top: "69.8%",
    position: "absolute",
  },
  groupIcon: {
    height: "3.3%",
    width: "76.25%",
    top: "52.25%",
    right: "11.88%",
    bottom: "44.45%",
    left: "11.88%",
    position: "absolute",
  },
  learning2: {
    marginLeft: 15,
  },
  learning: {
    marginLeft: -180,
    top: 207,
    width: 360,
    height: 495,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  myCourses: {
    top: 8,
    left: 64,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    opacity: 0.9,
    height: "100%",
    width: "100%",
  },
  vector: {
    top: "31.82%",
    right: "95.53%",
    bottom: "15.91%",
    width: "4.47%",
    height: "52.27%",
    left: "0%",
    position: "absolute",
  },
  pepiconsPopDotsY12: {
    top: 0,
    left: 275,
    width: 38,
    overflow: "hidden",
  },
  myCoursesParent: {
    top: 58,
    left: 36,
    width: 309,
  },
  learnedToday1: {
    height: "18.79%",
    width: "25.96%",
    top: "20.88%",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  min: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  minWrapper: {
    height: "31.21%",
    width: "19.99%",
    top: "41.65%",
    right: "75.23%",
    bottom: "27.14%",
  },
  learnedTodayItem: {
    width: "90.44%",
    right: "4.78%",
  },
  learnedTodayInner: {
    width: "62.7%",
    right: "32.52%",
  },
  learnedToday: {
    height: "11.38%",
    width: "93.53%",
    top: "13.63%",
    right: "3.42%",
    bottom: "75%",
    left: "3.06%",
    position: "absolute",
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
    left: "42.94%",
    bottom: "28.14%",
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
    width: "45.94%",
    right: "44.49%",
    left: "9.57%",
  },
  account: {
    color: Color.colorBlack,
    left: "0%",
    width: "100%",
  },
  iconfooteraccountoff: {
    width: "33.33%",
    right: "51.59%",
    left: "15.07%",
  },
  footeroff1: {
    width: "19.17%",
    left: "80.83%",
    right: "0%",
    top: "13.46%",
    height: "58.4%",
  },
  footercourse: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  footer: {
    height: "14.21%",
    top: "85.79%",
    left: "0%",
  },
  footeroffBackgroundIcon2: {
    height: "91.01%",
    width: "44.65%",
    right: "43.8%",
    bottom: "8.99%",
    left: "11.55%",
    top: "0%",
    position: "absolute",
  },
  message: {
    height: "25.55%",
    top: "74.29%",
    color: Color.colorBlack,
    left: "0%",
    width: "100%",
  },
  iconfooternotificationoff: {
    height: "37.07%",
    width: "32.39%",
    top: "21.61%",
    right: "50.7%",
    bottom: "41.32%",
    left: "16.9%",
    position: "absolute",
  },
  footeroff2: {
    height: "7.93%",
    width: "19.72%",
    top: "88%",
    right: "17.22%",
    bottom: "4.08%",
    left: "63.06%",
    position: "absolute",
  },
  coursesScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default CoursesScreen;
