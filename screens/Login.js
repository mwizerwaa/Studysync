import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-31.png")}
      />
      <View style={styles.bg}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg9.png")}
        />
        <View style={[styles.text, styles.textLayout1]}>
          <Text style={[styles.orLoginWith, styles.logInPosition]}>
            Or login with
          </Text>
          <Image
            style={[styles.textChild, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-12.png")}
          />
          <Image
            style={[styles.textItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-13.png")}
          />
        </View>
        <View style={styles.text1}>
          <Text style={[styles.dontHaveAnContainer, styles.logInPosition]}>
            <Text style={styles.dontHaveAnAccount}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </View>
        <View style={[styles.button, styles.textLayout1]}>
          <View style={[styles.buttonprimary, styles.buttonprimaryPosition]}>
            <Image
              style={[
                styles.buttonprimaryBackgroundIcon,
                styles.buttonprimaryPosition,
              ]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background7.png")}
            />
            <View style={styles.logInWrapper}>
              <Text style={[styles.logIn, styles.logInPosition]}>Log In</Text>
            </View>
          </View>
        </View>
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
              source={require("../assets/bg10.png")}
            />
            <View style={[styles.title, styles.titlePosition]}>
              <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
                Password
              </Text>
            </View>
            <Image
              style={[styles.iconpreviewCloseOne, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconpreviewcloseone3.png")}
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
              source={require("../assets/bg11.png")}
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
          source={require("../assets/platformgoogle-shapeoriginal-coloredtrue1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textLayout1: {
    width: "86.97%",
    position: "absolute",
  },
  logInPosition: {
    textAlign: "left",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textLayout: {
    bottom: "58.02%",
    top: "38.89%",
    height: "3.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    position: "absolute",
  },
  buttonprimaryPosition: {
    right: "0%",
    position: "absolute",
  },
  forgetPasswordTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
    height: "100%",
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
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    left: "50%",
    width: 133,
    height: 63,
    overflow: "hidden",
    position: "absolute",
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
  logIn: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    left: "0%",
    width: "100%",
  },
  logInWrapper: {
    height: "48.02%",
    width: "24.25%",
    top: "28.06%",
    right: "37.84%",
    bottom: "23.92%",
    left: "37.91%",
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
    right: "7.58%",
    bottom: "23.18%",
    left: "86.82%",
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
    right: "1.94%",
    left: "1.67%",
    bottom: "0%",
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Login;
