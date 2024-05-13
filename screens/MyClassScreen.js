import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MyClassScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myClassScreen}>
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-31.png")}
      />
      <View style={[styles.footer, styles.childShadowBox]}>
        <View style={[styles.footerhome, styles.footerhomePosition]}>
          <Image
            style={[
              styles.footerhomeBackgroundIcon,
              styles.iconsearchChildLayout,
            ]}
            contentFit="cover"
            source={require("../assets/footerhome-background1.png")}
          />
          <View style={styles.search}>
            <Text style={[styles.search1, styles.searchClr]}>Search</Text>
            <Image
              style={[styles.searchChild, styles.iconsearchChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.iconsearch, styles.iconsearchChildLayout]}
              contentFit="cover"
              source={require("../assets/iconsearch14.png")}
            />
          </View>
          <View style={[styles.footeroff, styles.homeLayout]}>
            <Image
              style={styles.footeronBackgroundIcon}
              contentFit="cover"
              source={require("../assets/footeron-background3.png")}
            />
            <Text style={[styles.home, styles.homeLayout]}>Home</Text>
            <Image
              style={[styles.home1FillIcon, styles.iconsearchChildLayout]}
              contentFit="cover"
              source={require("../assets/home-1-fill4.png")}
            />
          </View>
          <View style={[styles.footeroff1, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon,
                styles.iconsearchChildLayout,
              ]}
              contentFit="cover"
              source={require("../assets/footeron-background.png")}
            />
            <Text style={[styles.myClass, styles.searchClr]}>MY Class</Text>
            <Image
              style={[styles.mdiGoogleClassroom1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mdigoogleclassroom-1.png")}
            />
          </View>
          <View style={styles.footeroff2}>
            <Image
              style={[
                styles.footeroffBackgroundIcon1,
                styles.iconsearchChildLayout,
              ]}
              contentFit="cover"
              source={require("../assets/footeroff-background1.png")}
            />
            <Text style={[styles.schedule, styles.classesTypo]}>Schedule</Text>
            <Image
              style={[styles.uilSchedule1Icon, styles.uilSchedule1IconPosition]}
              contentFit="cover"
              source={require("../assets/uilschedule-11.png")}
            />
            <Image
              style={[styles.footeroffChild, styles.iconsearchChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-195.png")}
            />
          </View>
          <View style={[styles.footeroff3, styles.footeroffPosition]}>
            <Image
              style={[
                styles.footeroffBackgroundIcon2,
                styles.iconsearchChildLayout,
              ]}
              contentFit="cover"
              source={require("../assets/footeroff-background2.png")}
            />
            <Image
              style={[
                styles.iconfooteraccountoff,
                styles.iconsearchChildLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconfooteraccountoff10.png")}
            />
            <Text style={[styles.assignment, styles.searchClr]}>
              Assignment
            </Text>
            <Image
              style={[styles.materialSymbolsLightAssignIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/materialsymbolslightassignmentaddoutline-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.classes, styles.classesTypo]}>Classes</Text>
      <View style={[styles.class1, styles.classChildLayout]}>
        <View style={[styles.class1Child, styles.classChildLayout]} />
        <Pressable
          style={styles.details}
          onPress={() => navigation.navigate("LessonsScreen")}
        >
          <Text style={styles.detailsTypo}>Details</Text>
        </Pressable>
        <View style={styles.year4InformationSystemsWrapper}>
          <Text style={styles.informationTypo}>YEAR 4 INFORMATION SYSTEMS</Text>
        </View>
      </View>
      <View style={[styles.class2, styles.classChildLayout]}>
        <View style={[styles.class2Child, styles.classChildLayout]} />
        <Text style={[styles.details2, styles.detailsTypo]}>Details</Text>
        <Text style={[styles.year3Information, styles.informationTypo]}>
          YEAR 3 INFORMATION SYSTEMS
        </Text>
      </View>
      <View style={[styles.class3, styles.classChildLayout]}>
        <View style={[styles.class3Child, styles.classChildLayout]} />
        <Text style={[styles.details2, styles.detailsTypo]}>Details</Text>
        <Text style={[styles.year3Information, styles.informationTypo]}>
          YEAR 1 INFORMATION SYSTEMS
        </Text>
      </View>
      <View style={[styles.resourcesSeacrch, styles.childShadowBox]}>
        <View style={styles.resourcesSeacrchChild} />
        <Text style={[styles.searchForA, styles.searchClr]}>
          Search for a class..
        </Text>
        <Image
          style={[styles.iconsearch1, styles.iconsearchChildLayout]}
          contentFit="cover"
          source={require("../assets/iconsearch15.png")}
        />
      </View>
      <Image
        style={[styles.gravityUiDots91Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/gravityuidots9-1.png")}
      />
      <Image
        style={styles.ionArrowUpOutline1Icon}
        contentFit="cover"
        source={require("../assets/ionarrowupoutline-12.png")}
      />
      <Image
        style={[styles.carbonNotification1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/carbonnotification-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  footerhomePosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  iconsearchChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  searchClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    width: 52,
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
  classesTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  uilSchedule1IconPosition: {
    top: 16,
    position: "absolute",
  },
  classChildLayout: {
    height: 89,
    width: 336,
    position: "absolute",
  },
  detailsTypo: {
    color: Color.colorLimegreen,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  informationTypo: {
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconPosition: {
    top: 80,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    left: "50%",
    width: 133,
    overflow: "hidden",
    height: 63,
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
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
    left: 8,
    width: 36,
    height: 49,
    top: 0,
    position: "absolute",
  },
  home: {
    top: 49,
    color: Color.colorDarkslategray_200,
    height: 14,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    top: 14,
    width: 52,
    height: 63,
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
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
    left: 14,
    width: 27,
    height: 28,
    overflow: "hidden",
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
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_100,
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
    left: "0%",
    bottom: "0%",
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
  classes: {
    top: 71,
    left: 115,
    fontSize: FontSize.size_6xl,
  },
  class1Child: {
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
    backgroundColor: Color.colorWhite,
  },
  details: {
    left: 120,
    top: 55,
    position: "absolute",
  },
  year4InformationSystemsWrapper: {
    top: 6,
    left: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  class1: {
    top: 241,
    left: 13,
  },
  class2Child: {
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
    backgroundColor: Color.colorWhite,
  },
  details2: {
    top: 45,
    left: 127,
    position: "absolute",
  },
  year3Information: {
    top: 16,
    position: "absolute",
    left: 11,
  },
  class2: {
    top: 338,
    left: 13,
  },
  class3Child: {
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
    backgroundColor: Color.colorWhite,
  },
  class3: {
    top: 427,
    left: 12,
  },
  resourcesSeacrchChild: {
    height: "105.71%",
    width: "100.66%",
    top: "-2.86%",
    right: "-0.33%",
    bottom: "-2.86%",
    left: "-0.33%",
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
  },
  searchForA: {
    height: "47.71%",
    width: "68.17%",
    top: "27.14%",
    left: "6.58%",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  iconsearch1: {
    height: "45.43%",
    width: "3.92%",
    top: "28.57%",
    right: "6.11%",
    bottom: "26%",
    left: "89.97%",
  },
  resourcesSeacrch: {
    top: 143,
    left: 30,
    width: 301,
    height: 35,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  gravityUiDots91Icon: {
    left: 297,
  },
  ionArrowUpOutline1Icon: {
    top: 76,
    width: 49,
    height: 33,
    left: 13,
    overflow: "hidden",
    position: "absolute",
  },
  carbonNotification1Icon: {
    left: 258,
  },
  myClassScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MyClassScreen;
