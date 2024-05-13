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
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.splashScreen4Icon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <View style={styles.maskGroup49}>
        <View style={[styles.button, styles.buttonPosition]}>
          <Pressable
            style={styles.buttonprimary}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Image
              style={[styles.buttonprimaryBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background3.png")}
            />
            <View style={styles.signUpWrapper}>
              <Text style={[styles.signUp, styles.logInTypo]}>Sign up</Text>
            </View>
          </Pressable>
          <View
            style={[styles.buttonsecondary, styles.buttonsecondaryPosition]}
          >
            <Pressable
              style={[
                styles.buttonsecondaryBackground,
                styles.buttonsecondaryPosition,
              ]}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/buttonsecondary-background.png")}
              />
            </Pressable>
            <View style={styles.logInWrapper}>
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
            </View>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={[styles.getNotifiedAbout, styles.getFlexBox]}>
            Get notified about class changes, pending quizzes and and assignment
            updates from your lectures
          </Text>
        </View>
        <View style={[styles.title, styles.buttonsecondaryPosition]}>
          <Text
            style={[styles.getNotifiedAny, styles.getFlexBox]}
          >{`Get notified any where
you are about learning 
updates`}</Text>
        </View>
      </View>
      <Image
        style={styles.splashScreen4Child}
        contentFit="cover"
        source={require("../assets/rectangle-93.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonsecondaryPosition: {
    top: "0%",
    position: "absolute",
  },
  getFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    left: "50%",
    width: 133,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  buttonprimaryBackgroundIcon: {
    top: "0%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  signUp: {
    color: Color.colorWhite,
  },
  signUpWrapper: {
    height: "47.89%",
    width: "52.54%",
    top: "28.06%",
    right: "16.66%",
    bottom: "24.05%",
    left: "30.81%",
    position: "absolute",
  },
  buttonprimary: {
    height: "98.96%",
    width: "47.72%",
    top: "0.42%",
    right: "52.28%",
    bottom: "0.63%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    position: "absolute",
  },
  buttonsecondaryBackground: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  logIn: {
    color: Color.colorMediumslateblue_100,
  },
  logInWrapper: {
    height: "48.02%",
    width: "45.21%",
    top: "28.6%",
    right: "19.84%",
    bottom: "23.38%",
    left: "34.95%",
    position: "absolute",
  },
  buttonsecondary: {
    width: "47.88%",
    left: "52.12%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
  },
  button: {
    height: "14.08%",
    top: "85.92%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  getNotifiedAbout: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  text: {
    height: "27.3%",
    width: "71.57%",
    top: "43.31%",
    right: "14.22%",
    bottom: "29.39%",
    left: "14.22%",
    position: "absolute",
  },
  getNotifiedAny: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_200,
  },
  title: {
    height: "27.56%",
    width: "78.45%",
    right: "10.89%",
    bottom: "72.44%",
    left: "10.66%",
  },
  maskGroup49: {
    height: "42.54%",
    width: "85.97%",
    top: "44.2%",
    right: "7.08%",
    bottom: "13.26%",
    left: "6.94%",
    position: "absolute",
  },
  splashScreen4Child: {
    top: 65,
    left: 48,
    width: 263,
    height: 232,
    position: "absolute",
  },
  splashScreen4Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
