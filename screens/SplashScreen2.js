import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const SplashScreen2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.splashScreen2Icon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <View style={styles.teenyiconsChatSolid1} />
      <Image
        style={[styles.splashScreen2Child, styles.wiStars11Position]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={styles.maskGroup50}>
        <View style={styles.text}>
          <Text
            style={[styles.easyAndFast, styles.easyFlexBox]}
          >{`Easy and fast learning at 
any time, any where to help you 
improve.`}</Text>
        </View>
        <View style={styles.title}>
          <Text
            style={[styles.quickAndEasy, styles.easyFlexBox]}
          >{`Quick and easy 
learning`}</Text>
        </View>
        <Pressable
          style={styles.skip}
          onPress={() => navigation.navigate("SplashScreen1")}
        >
          <View style={styles.skip1}>
            <Image
              style={styles.skipBackgroundIcon}
              contentFit="cover"
              source={require("../assets/skip-background.png")}
            />
            <Text style={styles.skip2}>Skip</Text>
          </View>
        </Pressable>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={styles.subtractIcon1}
          contentFit="cover"
          source={require("../assets/subtract1.png")}
        />
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.fluentDiamond20Filled1Icon}
          contentFit="cover"
          source={require("../assets/fluentdiamond20filled-1.png")}
        />
      </View>
      <Image
        style={[styles.splashScreen2Item, styles.splashLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <Image
        style={[styles.wiStars11, styles.wiStars11Position]}
        contentFit="cover"
        source={require("../assets/wistars-1-1.png")}
      />
      <Image
        style={styles.mageLightBulb1Icon}
        contentFit="cover"
        source={require("../assets/magelightbulb-1.png")}
      />
      <Image
        style={[styles.splashScreen2Inner, styles.splashLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-91.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wiStars11Position: {
    left: 37,
    position: "absolute",
  },
  easyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  vectorIconLayout: {
    bottom: "13.21%",
    top: "16.07%",
    width: "24.52%",
    height: "70.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  splashLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  teenyiconsChatSolid1: {
    top: 778,
    left: 129,
    width: 20,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen2Child: {
    top: 397,
    width: 2,
    height: 6,
  },
  easyAndFast: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    height: "13.74%",
    width: "80.28%",
    top: "86.26%",
    right: "2.29%",
    left: "17.43%",
    bottom: "0%",
    position: "absolute",
  },
  quickAndEasy: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_200,
  },
  title: {
    height: "12.6%",
    width: "63.92%",
    top: "70.22%",
    right: "14.55%",
    bottom: "17.18%",
    left: "21.54%",
    position: "absolute",
  },
  skipBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  skip2: {
    height: "52.35%",
    width: "64.41%",
    top: "29.98%",
    left: "18.56%",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  skip1: {
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  skip: {
    height: "7.64%",
    width: "12.81%",
    top: "3.44%",
    bottom: "88.92%",
    left: "87.19%",
    right: "0%",
    position: "absolute",
  },
  subtractIcon: {
    width: 81,
    height: 201,
  },
  subtractIcon1: {
    width: 103,
    height: 209,
  },
  maskGroup50: {
    height: "73.13%",
    width: "99.31%",
    top: "4.13%",
    right: "3.75%",
    bottom: "22.75%",
    left: "-3.06%",
    position: "absolute",
  },
  vectorIcon: {
    right: "75.48%",
    left: "0%",
  },
  vectorIcon1: {
    left: "75.48%",
    right: "0%",
  },
  fluentDiamond20Filled1Icon: {
    top: 0,
    left: 28,
    width: 25,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "3.5%",
    width: "21.75%",
    top: "93.75%",
    right: "39.64%",
    bottom: "2.75%",
    left: "38.61%",
    position: "absolute",
  },
  splashScreen2Item: {
    top: 128,
    right: 0,
    width: 179,
    height: 183,
  },
  wiStars11: {
    top: 77,
    width: 75,
    height: 72,
    overflow: "hidden",
  },
  mageLightBulb1Icon: {
    top: 163,
    left: 21,
    width: 45,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen2Inner: {
    top: 276,
    left: 0,
    width: 167,
    height: 180,
  },
  splashScreen2Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen2;
