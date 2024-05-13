import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import ADD from "../components/ADD";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LessonsScreen = () => {
  const [zondiconsAddSolid1Visible, setZondiconsAddSolid1Visible] =
    useState(false);
  const [zondiconsAddSolid11Visible, setZondiconsAddSolid11Visible] =
    useState(false);
  const navigation = useNavigation();

  const openZondiconsAddSolid1 = useCallback(() => {
    setZondiconsAddSolid1Visible(true);
  }, []);

  const closeZondiconsAddSolid1 = useCallback(() => {
    setZondiconsAddSolid1Visible(false);
  }, []);

  const openZondiconsAddSolid11 = useCallback(() => {
    setZondiconsAddSolid11Visible(true);
  }, []);

  const closeZondiconsAddSolid11 = useCallback(() => {
    setZondiconsAddSolid11Visible(false);
  }, []);

  return (
    <>
      <View style={styles.lessonsScreen}>
        <View style={styles.heading}>
          <Text style={[styles.year4Is, styles.year4IsTypo]}>{`YEAR 4
 INFORMATION SYSTEMS`}</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Text style={[styles.setupYourGraphic, styles.graphicTypo]}>
            RESEARCH METHODOLOGY
          </Text>
          <Image
            style={[styles.child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-42.png")}
          />
          <Pressable
            style={styles.zondiconsAddSolid1}
            onPress={openZondiconsAddSolid1}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/zondiconsaddsolid-1.png")}
            />
          </Pressable>
          <Image
            style={styles.fill1Icon}
            contentFit="cover"
            source={require("../assets/fill-11.png")}
          />
        </View>
        <View style={[styles.view1, styles.viewPosition]}>
          <Text style={[styles.whyUsingGraphic, styles.graphicTypo]}>
            PROJECT MANAGEMENT
          </Text>
          <Image
            style={[styles.child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-42.png")}
          />
          <Pressable
            style={styles.zondiconsAddSolid1}
            onPress={openZondiconsAddSolid11}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/zondiconsaddsolid-1.png")}
            />
          </Pressable>
          <Pressable
            style={styles.fill1Icon}
            onPress={() => navigation.navigate("Lesson1AnnouncementCreation")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/fill-11.png")}
            />
          </Pressable>
        </View>
        <View style={styles.headingLinks}>
          <View style={[styles.lessons, styles.lessonsFlexBox]}>
            <Text style={[styles.lessons1, styles.year4IsTypo]}>LESSONS</Text>
          </View>
          <Pressable
            style={[styles.classList, styles.pendingShadowBox]}
            onPress={() => navigation.navigate("ClassList")}
          >
            <Text style={[styles.lessons1, styles.year4IsTypo]}>
              Class List
            </Text>
          </Pressable>
          <Pressable
            style={[styles.pending, styles.pendingShadowBox]}
            onPress={() => navigation.navigate("PendingScreen")}
          >
            <Text style={[styles.lessons1, styles.year4IsTypo]}>Pending</Text>
          </Pressable>
          <Pressable
            style={[styles.progress, styles.pendingShadowBox]}
            onPress={() => navigation.navigate("ProgressScreen")}
          >
            <Text style={[styles.lessons1, styles.year4IsTypo]}>Progress</Text>
          </Pressable>
        </View>
        <Image
          style={styles.ionArrowUpOutline1Icon}
          contentFit="cover"
          source={require("../assets/ionarrowupoutline-1.png")}
        />
        <View style={[styles.resourcesSeacrch, styles.pendingShadowBox]}>
          <View style={styles.resourcesSeacrchChild} />
          <Text style={styles.searchForA}>Search for a Lesson...</Text>
          <Image
            style={[styles.iconsearch, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/iconsearch15.png")}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={zondiconsAddSolid1Visible}
      >
        <View style={styles.zondiconsAddSolid1Overlay}>
          <Pressable
            style={styles.zondiconsAddSolid1Bg}
            onPress={closeZondiconsAddSolid1}
          />
          <ADD onClose={closeZondiconsAddSolid1} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={zondiconsAddSolid11Visible}
      >
        <View style={styles.zondiconsAddSolid11Overlay}>
          <Pressable
            style={styles.zondiconsAddSolid11Bg}
            onPress={closeZondiconsAddSolid11}
          />
          <ADD onClose={closeZondiconsAddSolid11} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  year4IsTypo: {
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
  },
  viewPosition: {
    left: "1.11%",
    right: "0.83%",
    width: "98.06%",
    height: "7.5%",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  graphicTypo: {
    color: Color.colorGray_100,
    marginTop: -12,
    textAlign: "left",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  lessonsFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  pendingShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  year4Is: {
    textAlign: "left",
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontWeight: "600",
  },
  heading: {
    marginTop: -354.5,
    width: "58.33%",
    right: "18.19%",
    left: "23.47%",
    paddingHorizontal: 9,
    paddingVertical: 16,
    flexDirection: "row",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  setupYourGraphic: {
    width: "64.25%",
    left: "8.5%",
  },
  child: {
    height: "1.33%",
    top: "97.83%",
    right: "0%",
    bottom: "0.83%",
    left: "0%",
    width: "100%",
  },
  zondiconsAddSolid1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  zondiconsAddSolid1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    overflow: "hidden",
  },
  zondiconsAddSolid1: {
    left: 302,
    top: 17,
    height: 24,
    width: 24,
    position: "absolute",
  },
  fill1Icon: {
    height: 30,
    width: 24,
  },
  view: {
    top: "48.38%",
    bottom: "44.13%",
  },
  whyUsingGraphic: {
    width: "58.1%",
    left: "8.78%",
  },
  zondiconsAddSolid11Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  zondiconsAddSolid11Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  view1: {
    top: "40.13%",
    bottom: "52.38%",
  },
  lessons1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  lessons: {
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  classList: {
    left: 87,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  pending: {
    left: 178,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  progress: {
    left: 261,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  headingLinks: {
    top: 151,
    left: 6,
    width: 348,
    height: 43,
    position: "absolute",
  },
  ionArrowUpOutline1Icon: {
    top: 69,
    left: 12,
    width: 49,
    height: 33,
    overflow: "hidden",
    position: "absolute",
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
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  iconsearch: {
    height: "45.43%",
    width: "3.92%",
    top: "28.57%",
    right: "6.11%",
    bottom: "26%",
    left: "89.97%",
  },
  resourcesSeacrch: {
    top: 230,
    left: 30,
    width: 301,
    height: 35,
  },
  lessonsScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LessonsScreen;
