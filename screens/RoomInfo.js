import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RoomInfo = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.roomInfoIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Text style={styles.youJustScanned}>{`You just scanned 
 (ROOM NAME)`}</Text>
      <Text style={styles.hereIsYour}>{`Here is your searched
room detailes`}</Text>
      <View style={[styles.view, styles.viewPosition]}>
        <View style={[styles.rectangle, styles.backPosition]} />
        <Image
          style={[styles.circleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/circle5.png")}
        />
        <Text style={[styles.occupationStatus, styles.happeningTypo]}>
          Occupation Status
        </Text>
        <Text style={[styles.yes, styles.yesTypo]}>Yes</Text>
      </View>
      <View style={[styles.view1, styles.viewPosition]}>
        <View style={[styles.rectangle, styles.backPosition]} />
        <Image
          style={[styles.circleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/circle6.png")}
        />
        <Text style={[styles.happening, styles.happeningTypo]}>Happening</Text>
        <Text
          style={[styles.informationSystemYear, styles.yesTypo]}
        >{`Information System YEAR 4 
Final Project Presentation `}</Text>
      </View>
      <Pressable
        style={styles.buttonprimary}
        onPress={() => navigation.navigate("ViewRoom")}
      >
        <Image
          style={[styles.buttonprimaryBackgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/buttonprimary-background5.png")}
        />
        <View style={styles.backWrapper}>
          <Text style={[styles.back, styles.backTypo]}>BACK</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.viewFullTimetableContainer}
        onPress={() => navigation.navigate("ViewFullTT")}
      >
        <Text style={[styles.viewFullTimetable, styles.backTypo]}>
          View FULL TIMETABLE
        </Text>
      </Pressable>
      <View style={[styles.view2, styles.viewPosition]}>
        <View style={[styles.rectangle, styles.backPosition]} />
        <Image
          style={[styles.circleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/circle7.png")}
        />
        <Text style={[styles.happening, styles.happeningTypo]}>
          Allowed Personnel
        </Text>
        <Text
          style={[styles.informationSystemYear, styles.yesTypo]}
        >{`Year 4 IS students and lectures
All it may concern`}</Text>
        <Image
          style={styles.materialSymbolsPersonCheckIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolspersoncheck-1.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    left: "2.5%",
    right: "2.78%",
    width: "94.72%",
    height: "12.5%",
    position: "absolute",
    overflow: "hidden",
  },
  backPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  happeningTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "21.7%",
    top: "50%",
    width: "66.28%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  yesTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  backTypo: {
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorWhite,
  },
  youJustScanned: {
    top: 68,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 73,
    position: "absolute",
  },
  hereIsYour: {
    top: 167,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 73,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorAliceblue,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  circleIcon: {
    height: "52%",
    width: "14.46%",
    top: "21%",
    right: "80.56%",
    bottom: "27%",
    left: "4.99%",
  },
  occupationStatus: {
    marginTop: -27,
  },
  yes: {
    top: 57,
    left: 137,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  view: {
    top: "32.88%",
    bottom: "54.63%",
  },
  happening: {
    marginTop: -32,
  },
  informationSystemYear: {
    top: 47,
    left: 74,
    fontSize: FontSize.size_smi,
    width: 249,
    height: 25,
  },
  view1: {
    top: "48.13%",
    bottom: "39.38%",
  },
  buttonprimaryBackgroundIcon: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
  },
  back: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  backWrapper: {
    height: "47.89%",
    width: "52.52%",
    top: "27.43%",
    right: "22.27%",
    bottom: "24.68%",
    left: "25.21%",
    position: "absolute",
  },
  buttonprimary: {
    height: "5.93%",
    width: "33.06%",
    top: "87.38%",
    right: "33.61%",
    bottom: "6.7%",
    left: "33.33%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  viewFullTimetable: {
    fontSize: FontSize.size_lg,
    width: 192,
    height: 27,
  },
  viewFullTimetableContainer: {
    left: 84,
    top: 642,
    position: "absolute",
  },
  materialSymbolsPersonCheckIcon: {
    top: 30,
    left: 27,
    width: 33,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  view2: {
    top: "63.38%",
    bottom: "24.13%",
  },
  roomInfoIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default RoomInfo;
