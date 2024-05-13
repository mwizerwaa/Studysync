import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SplashScreen3 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.splashScreen1Icon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <Text style={[styles.studySync, styles.textFlexBox]}>STUDY SYNC</Text>
      <Text style={[styles.text, styles.textFlexBox]}>{` `}</Text>
      <Image
        style={[styles.splashScreen1Child, styles.splashScreen1ChildLayout]}
        contentFit="cover"
        source={require("../assets/group-129.png")}
      />
      <View
        style={[styles.exploreAVastArrayOfCourseWrapper, styles.exploreLayout]}
      >
        <Text
          style={[styles.exploreAVast, styles.skip2Typo]}
        >{`Explore a vast array of courses right at your fingertips.
. `}</Text>
      </View>
      <Pressable
        style={styles.maskGroup51}
        onPress={() => navigation.navigate("SplashScreen2")}
      >
        <View style={styles.skipPosition}>
          <View style={styles.skipPosition}>
            <Image
              style={[styles.skipBackgroundIcon, styles.skipPosition]}
              contentFit="cover"
              source={require("../assets/skip-background1.png")}
            />
            <Text style={[styles.skip2, styles.skip2Typo]}>Skip</Text>
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.splashScreen1Item, styles.splashScreen1ItemPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-94.png")}
      />
      <Text style={styles.yourPersonalLearning}>
        Your personal learning companion
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  splashScreen1ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  exploreLayout: {
    height: 84,
    width: 313,
    left: "50%",
  },
  skip2Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  skipPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  splashScreen1ItemPosition: {
    marginLeft: -155,
    position: "absolute",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    width: 133,
    height: 63,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  studySync: {
    marginLeft: -114,
    top: 429,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.irishGroverRegular,
    left: "50%",
  },
  text: {
    top: 535,
    left: 36,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.pottaOneRegular,
  },
  splashScreen1Child: {
    height: "3.5%",
    width: "26.67%",
    top: "93.5%",
    right: "36.67%",
    bottom: "3%",
    left: "36.67%",
    position: "absolute",
  },
  exploreAVast: {
    marginLeft: -156.5,
    top: 0,
    fontSize: FontSize.size_base,
    height: 84,
    width: 313,
    left: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  exploreAVastArrayOfCourseWrapper: {
    top: 592,
    marginLeft: -155,
    position: "absolute",
  },
  skipBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  skip2: {
    height: "52.51%",
    width: "64.45%",
    top: "29.73%",
    left: "18.63%",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  maskGroup51: {
    height: "3.24%",
    width: "12.97%",
    top: "6.88%",
    right: "7.97%",
    bottom: "89.89%",
    left: "79.06%",
    position: "absolute",
  },
  splashScreen1Item: {
    top: 129,
    width: 310,
    height: 247,
    left: "50%",
  },
  yourPersonalLearning: {
    height: "11.61%",
    width: "69.75%",
    top: "59.63%",
    left: "15%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  splashScreen1Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default SplashScreen3;
