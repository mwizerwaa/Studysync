import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Course1LEARNINGScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.course1LearningScreen}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.course1LearningScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-103.png")}
      />
      <LinearGradient
        style={styles.lineargradient}
        locations={[0, 0.87]}
        colors={["#438ccf", "#fff"]}
      >
        <Text style={styles.networking}>NETWORKING</Text>
        <View style={styles.lecturesMenu}>
          <Text style={styles.lecture1}>Lecture 1</Text>
        </View>
        <View style={[styles.dropdown, styles.dropdownLayout]}>
          <View style={[styles.dropdownChild, styles.vectorIconLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
      </LinearGradient>
      <Pressable
        style={[styles.chapters, styles.notesPosition]}
        onPress={() => navigation.navigate("Course1LEARNINGScreen")}
      />
      <View style={[styles.notes, styles.notesPosition]}>
        <Text style={styles.theContainerLayout}>
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
        <Text
          style={[styles.theImportanceOfContainer1, styles.theContainerLayout]}
        >
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
        <Text
          style={[styles.theImportanceOfContainer1, styles.theContainerLayout]}
        >
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
        <Text
          style={[styles.theImportanceOfContainer1, styles.theContainerLayout]}
        >
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
        <Text
          style={[styles.theImportanceOfContainer1, styles.theContainerLayout]}
        >
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
        <Text
          style={[styles.theImportanceOfContainer1, styles.theContainerLayout]}
        >
          <Text
            style={[styles.theImportanceOf, styles.textTypo]}
          >{`1.5 The Importance of Networking
`}</Text>
          <Text style={styles.theDataAnalystsAtDataCrun}>
            <Text
              style={styles.theDataAnalysts}
            >{`The data analysts at Data Crunchers work hard to create stories and reports from their clients’ data. Analysts rely heavily on visualization techniques to make the information relevant and actionable. Visualizations are a way to display data in a manner that is easily understood. The most common ways to represent data visually are charts and graphs.  
There are many types of charts used to present information graphically. It is crucial to ensure that the type of visualization used best illustrates the pattern, problem, or trend that needs highlighting; not all types of visualizations are appropriate for all kinds of data. `}</Text>
            <Text style={styles.textTypo}> </Text>
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dropdownLayout: {
    height: 27,
    width: 28,
  },
  vectorIconLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.9,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  notesPosition: {
    left: "0.83%",
    width: "99.17%",
    alignItems: "center",
    right: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  theContainerLayout: {
    width: 350,
    textAlign: "left",
    color: Color.colorBlack,
  },
  course1LearningScreenChild: {
    height: "28%",
    bottom: "72%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.28%",
    right: "0%",
    top: "0%",
    width: "99.72%",
    position: "absolute",
    overflow: "hidden",
  },
  networking: {
    height: "21.21%",
    width: "61.56%",
    top: "19.75%",
    left: "23.68%",
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  lecture1: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  lecturesMenu: {
    top: 88,
    left: 22,
    borderRadius: Border.br_3xs,
    width: 315,
    height: 41,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  dropdownChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    height: 27,
    width: 28,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  vectorIcon: {
    height: "62.96%",
    width: "54.29%",
    top: "20.37%",
    right: "24.29%",
    bottom: "16.67%",
    left: "21.43%",
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  dropdown: {
    top: 94,
    left: 292,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    opacity: 0.9,
  },
  vector: {
    left: "6.13%",
    top: "22.93%",
    right: "89.97%",
    bottom: "59.49%",
    width: "3.9%",
    height: "17.58%",
    position: "absolute",
  },
  lineargradient: {
    height: "19.63%",
    bottom: "80.38%",
    backgroundColor: "transparent",
    left: "0.28%",
    right: "0%",
    top: "0%",
    width: "99.72%",
    position: "absolute",
  },
  chapters: {
    height: "80.38%",
    top: "19.63%",
    bottom: "0%",
  },
  theImportanceOf: {
    fontSize: FontSize.size_xs,
  },
  theDataAnalysts: {
    fontFamily: FontFamily.poppinsRegular,
  },
  theDataAnalystsAtDataCrun: {
    fontSize: FontSize.size_3xs,
  },
  theImportanceOfContainer1: {
    marginTop: 22,
  },
  notes: {
    height: "78.13%",
    top: "21.5%",
    bottom: "0.38%",
    backgroundColor: Color.colorWhite,
    padding: Padding.p_8xs,
  },
  course1LearningScreen: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Course1LEARNINGScreen;
