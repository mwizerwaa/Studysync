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
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.loginScreenIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.loginScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={styles.loginScreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={[styles.logIn, styles.logFlexBox]}>Log In</Text>
      <View style={styles.bg}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.text, styles.textLayout1]}>
          <Text style={[styles.orLoginWith, styles.orLoginWithTypo]}>
            Or login with
          </Text>
          <Image
            style={[styles.textChild, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
          <Image
            style={[styles.textItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
        </View>
        <Pressable
          style={styles.text1}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={[styles.dontHaveAnContainer, styles.orLoginWithTypo]}>
            <Text style={styles.dontHaveAnAccount}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.textLayout1]}
          onPress={() => navigation.navigate("SuccessScreen")}
        >
          <View style={[styles.buttonprimary, styles.buttonprimaryPosition]}>
            <Image
              style={[
                styles.buttonprimaryBackgroundIcon,
                styles.buttonprimaryPosition,
              ]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background1.png")}
            />
            <View style={styles.logInWrapper}>
              <Text style={[styles.logIn1, styles.iconPosition1]}>Log In</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.text3, styles.buttonprimaryPosition]}>
          <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
            Forget password?
          </Text>
        </View>
        <View style={[styles.password, styles.emailPosition]}>
          <View style={[styles.buttonprimary, styles.buttonprimaryPosition]}>
            <Image
              style={[
                styles.buttonprimaryBackgroundIcon,
                styles.buttonprimaryPosition,
              ]}
              contentFit="cover"
              source={require("../assets/formpassword-background.png")}
            />
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/bg1.png")}
            />
            <View style={[styles.title, styles.titlePosition]}>
              <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
                Password
              </Text>
            </View>
            <Image
              style={[styles.iconpreviewCloseOne, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconpreviewcloseone.png")}
            />
          </View>
        </View>
        <View style={[styles.email, styles.emailPosition]}>
          <View style={[styles.buttonprimary, styles.buttonprimaryPosition]}>
            <Image
              style={[
                styles.buttonprimaryBackgroundIcon,
                styles.buttonprimaryPosition,
              ]}
              contentFit="cover"
              source={require("../assets/formemail-background.png")}
            />
            <Image
              style={[styles.bgIcon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <View style={styles.email1}>
              <Text
                style={[
                  styles.cooperKristingmailcom,
                  styles.forgetPasswordTypo,
                ]}
              >
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.title1, styles.titlePosition]}>
              <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
                Your Email
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.platformgoogleShapeoriginaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/platformgoogle-shapeoriginal-coloredtrue.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textLayout1: {
    width: "86.97%",
    position: "absolute",
  },
  orLoginWithTypo: {
    fontSize: FontSize.size_xs,
    top: "0%",
    height: "100%",
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    bottom: "58.02%",
    top: "38.89%",
    height: "3.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  buttonprimaryPosition: {
    right: "0%",
    position: "absolute",
  },
  iconPosition1: {
    top: "0%",
    height: "100%",
    left: "0%",
  },
  forgetPasswordTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  emailPosition: {
    left: "3.05%",
    height: "11.02%",
    position: "absolute",
  },
  titlePosition: {
    bottom: "69.4%",
    top: "1.39%",
    height: "29.21%",
    left: "0%",
    position: "absolute",
  },
  iconPosition: {
    top: "30.6%",
    height: "69.4%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  loginScreenChild: {
    top: 56,
    left: -10,
    width: 400,
    height: 186,
    position: "absolute",
  },
  loginScreenItem: {
    top: 397,
    left: 37,
    width: 2,
    height: 6,
    position: "absolute",
  },
  logIn: {
    marginLeft: -72,
    top: 96,
    left: "50%",
    fontSize: 48,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  bgIcon: {
    width: "99.77%",
    right: "0.23%",
    borderRadius: Border.br_xl,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  orLoginWith: {
    width: "22.93%",
    left: "38.6%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  textChild: {
    width: "31.64%",
    right: "68.36%",
    left: "0%",
  },
  textItem: {
    width: "31.51%",
    right: "-0.03%",
    left: "68.52%",
  },
  text: {
    top: "54.21%",
    right: "3.34%",
    bottom: "43.03%",
    left: "9.68%",
    height: "2.76%",
  },
  dontHaveAn: {
    color: Color.colorDarkslategray_100,
  },
  text2: {
    color: Color.colorLightsteelblue_100,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkblue_100,
  },
  dontHaveAnContainer: {
    left: "0%",
    width: "100%",
  },
  text1: {
    width: "57.64%",
    top: "47.94%",
    right: "17.98%",
    bottom: "49.3%",
    left: "24.38%",
    height: "2.76%",
    position: "absolute",
  },
  buttonprimaryBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  logIn1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: "0%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  logInWrapper: {
    height: "48.02%",
    width: "24.25%",
    top: "28.06%",
    right: "37.81%",
    bottom: "23.92%",
    left: "37.94%",
    position: "absolute",
  },
  buttonprimary: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  button: {
    height: "9.47%",
    top: "36.29%",
    right: "6.63%",
    bottom: "54.24%",
    left: "6.4%",
  },
  forgetPassword: {
    color: Color.colorDarkslategray_100,
  },
  text3: {
    height: "3.22%",
    width: "43.05%",
    top: "30.95%",
    bottom: "65.83%",
    left: "56.95%",
  },
  title: {
    width: "20.79%",
    right: "79.21%",
  },
  iconpreviewCloseOne: {
    height: "23.18%",
    width: "5.61%",
    top: "53.63%",
    right: "7.61%",
    bottom: "23.18%",
    left: "86.79%",
    position: "absolute",
  },
  password: {
    width: "95.1%",
    top: "17.75%",
    right: "1.84%",
    bottom: "71.23%",
  },
  bgIcon2: {
    borderRadius: Border.br_xl,
  },
  cooperKristingmailcom: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  email1: {
    width: "59.33%",
    top: "54.1%",
    right: "34.55%",
    bottom: "16.69%",
    left: "6.11%",
    height: "29.21%",
    position: "absolute",
  },
  title1: {
    width: "23.54%",
    right: "76.46%",
  },
  email: {
    width: "95.24%",
    top: "3.37%",
    right: "1.7%",
    bottom: "85.6%",
  },
  platformgoogleShapeoriginaIcon: {
    height: "7.7%",
    width: "12.77%",
    top: "60.99%",
    right: "43.86%",
    bottom: "31.31%",
    left: "43.37%",
    position: "absolute",
  },
  bg: {
    height: "73.38%",
    width: "96.39%",
    top: "26.63%",
    right: "1.56%",
    left: "2.06%",
    bottom: "0%",
    position: "absolute",
  },
  loginScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreen;
