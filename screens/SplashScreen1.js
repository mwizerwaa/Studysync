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
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SplashScreen1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.splashScreen3Icon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Text style={[styles.transformIdleMoments, styles.knowledgeOnTheFlexBox]}>
        Transform Idle moments into learning opportunities.
      </Text>
      <Text style={[styles.knowledgeOnThe, styles.knowledgeOnTheFlexBox]}>
        Knowledge on the Go:
      </Text>
      <Image
        style={[styles.splashScreen3Child, styles.splashPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <View style={[styles.splashScreen3Item, styles.splashPosition]} />
      <Pressable
        style={[styles.getStarted, styles.splashPosition]}
        onPress={() => navigation.navigate("SplashScreen")}
      >
        <Text style={styles.getStarted1}>GET STARTED</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  knowledgeOnTheFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  splashPosition: {
    left: "50%",
    position: "absolute",
  },
  transformIdleMoments: {
    height: "10.05%",
    width: "79.72%",
    top: "64.8%",
    left: "10.25%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
  },
  knowledgeOnThe: {
    height: "11.61%",
    width: "69.75%",
    top: "53.08%",
    left: "13.58%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_200,
  },
  splashScreen3Child: {
    height: "29.74%",
    marginLeft: -157,
    top: "15.29%",
    bottom: "54.98%",
    maxHeight: "100%",
    width: 314,
  },
  splashScreen3Item: {
    height: "6.64%",
    marginLeft: -123,
    top: "84.5%",
    bottom: "8.86%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 243,
  },
  getStarted1: {
    marginLeft: -86,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: "#2659c0",
    textAlign: "left",
  },
  getStarted: {
    top: 685,
  },
  splashScreen3Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreen1;
