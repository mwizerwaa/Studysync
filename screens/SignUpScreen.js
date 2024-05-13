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

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.signupScreenIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.signupScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={styles.signupScreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={styles.maskGroup23}>
        <View style={styles.bg}>
          <Image
            style={[styles.bgChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-8.png")}
          />
          <View style={styles.password}>
            <View style={[styles.formpassword, styles.text2Layout]}>
              <Image
                style={[styles.bgChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/formpassword-background1.png")}
              />
              <Image
                style={styles.bgIcon}
                contentFit="cover"
                source={require("../assets/bg3.png")}
              />
              <View style={[styles.title, styles.titleLayout]}>
                <Text style={[styles.confirmPassword, styles.byCreatingAnTypo]}>
                  Confirm Password
                </Text>
              </View>
              <Image
                style={[styles.iconpreviewCloseOne, styles.iconpreviewPosition]}
                contentFit="cover"
                source={require("../assets/iconpreviewcloseone1.png")}
              />
            </View>
          </View>
          <View style={[styles.formemail, styles.emailPosition]}>
            <Image
              style={[styles.bgChild, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/formemail-background1.png")}
            />
            <Image
              style={[styles.bgIcon1, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/bg4.png")}
            />
            <Image
              style={[styles.iconcheck, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconcheck.png")}
            />
            <View style={[styles.email, styles.titleLayout]}>
              <Text style={[styles.cooperKristingmailcom, styles.signUpClr]}>
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.formpassword, styles.text2Layout]}>
              <Image
                style={[styles.bgChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/formemail-background1.png")}
              />
              <Image
                style={[styles.bgIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/bg5.png")}
              />
              <Image
                style={[styles.iconcheck, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/iconcheck.png")}
              />
              <View style={[styles.title1, styles.titleLayout]}>
                <Text style={[styles.confirmPassword, styles.byCreatingAnTypo]}>
                  Full Names
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.email1, styles.emailPosition]}>
            <View style={[styles.formpassword, styles.text2Layout]}>
              <Image
                style={[styles.formemailBackgroundIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/formemail-background2.png")}
              />
              <Image
                style={[styles.bgIcon3, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/bg6.png")}
              />
              <Image
                style={[styles.iconcheck2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/iconcheck1.png")}
              />
              <View style={styles.title2}>
                <Text style={[styles.confirmPassword, styles.byCreatingAnTypo]}>
                  Reg Number
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.text}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={[styles.alreadyHaveAn, styles.logInTypo1]}
          >{`Already have an account？ `}</Text>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </Pressable>
        <View style={styles.text1}>
          <View style={[styles.text2, styles.text2Layout]}>
            <Text
              style={[styles.byCreatingAn, styles.logInTypo1]}
            >{`By creating an account you have to agree
with our them & condication.`}</Text>
          </View>
          <Image
            style={[styles.elementscheckboxoffIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/elementscheckboxoff.png")}
          />
        </View>
        <View style={styles.button}>
          <Pressable
            style={styles.buttonprimaryPosition}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Image
              style={[
                styles.buttonprimaryBackgroundIcon,
                styles.buttonprimaryPosition,
              ]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background2.png")}
            />
            <View style={[styles.creatAccountWrapper, styles.creatPosition]}>
              <Text style={[styles.creatAccount, styles.creatPosition]}>
                Creat account
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.password1, styles.emailPosition]}>
          <View style={[styles.formpassword, styles.text2Layout]}>
            <Image
              style={[styles.bgChild, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/formpassword-background2.png")}
            />
            <Image
              style={[styles.bgIcon4, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg7.png")}
            />
            <View style={styles.title3}>
              <Text style={[styles.confirmPassword, styles.byCreatingAnTypo]}>
                Password
              </Text>
            </View>
            <Image
              style={[styles.iconpreviewCloseOne1, styles.iconpreviewPosition]}
              contentFit="cover"
              source={require("../assets/iconpreviewcloseone2.png")}
            />
          </View>
        </View>
        <View style={[styles.email2, styles.emailPosition]}>
          <View style={[styles.formpassword, styles.text2Layout]}>
            <Image
              style={[styles.formemailBackgroundIcon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/formemail-background3.png")}
            />
            <Image
              style={[styles.bgIcon5, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg8.png")}
            />
            <Image
              style={[styles.iconcheck3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconcheck2.png")}
            />
            <View style={[styles.email3, styles.email3Layout]}>
              <Text style={[styles.cooperKristingmailcom, styles.signUpClr]}>
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.title4, styles.email3Layout]}>
              <Text style={[styles.confirmPassword, styles.byCreatingAnTypo]}>
                Your Email
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.title5, styles.title5Position]}>
          <Text style={[styles.signUp, styles.title5Position]}>Sign Up</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Layout: {
    height: "100%",
    top: "0%",
  },
  titleLayout: {
    height: "29.19%",
    position: "absolute",
  },
  byCreatingAnTypo: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
  },
  iconpreviewPosition: {
    bottom: "23.05%",
    top: "53.74%",
    height: "23.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  emailPosition: {
    left: "3.32%",
    position: "absolute",
  },
  iconPosition1: {
    top: "30.54%",
    height: "69.46%",
    bottom: "0%",
  },
  signUpClr: {
    color: Color.colorWhite,
    height: "100%",
  },
  iconPosition: {
    left: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  logInTypo1: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  buttonprimaryPosition: {
    marginLeft: -150.9,
    width: 302,
    left: "50%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  creatPosition: {
    width: 144,
    left: "50%",
    position: "absolute",
  },
  email3Layout: {
    height: "28.38%",
    position: "absolute",
  },
  title5Position: {
    width: 213,
    left: "50%",
    top: "0%",
    position: "absolute",
  },
  signupScreenChild: {
    top: 56,
    left: -10,
    width: 400,
    height: 186,
    position: "absolute",
  },
  signupScreenItem: {
    top: 397,
    left: 37,
    width: 2,
    height: 6,
    position: "absolute",
  },
  bgChild: {
    maxHeight: "100%",
    borderRadius: Border.br_xl,
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  bgIcon: {
    top: "30.69%",
    bottom: "-0.15%",
    height: "69.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  confirmPassword: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title: {
    width: "39.15%",
    top: "1.5%",
    right: "60.85%",
    bottom: "69.31%",
    left: "0%",
  },
  iconpreviewCloseOne: {
    width: "5.61%",
    right: "7.58%",
    left: "86.82%",
  },
  formpassword: {
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  password: {
    width: "95.32%",
    top: "56.81%",
    right: "2.22%",
    bottom: "32.17%",
    left: "2.46%",
    height: "11.02%",
    position: "absolute",
  },
  bgIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  iconcheck: {
    height: "13.92%",
    width: "4.33%",
    top: "58.38%",
    right: "8.11%",
    bottom: "27.69%",
    left: "87.56%",
    maxHeight: "100%",
  },
  cooperKristingmailcom: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  email: {
    width: "59.33%",
    top: "54.19%",
    right: "34.52%",
    bottom: "16.62%",
    left: "6.14%",
  },
  bgIcon2: {
    height: "68.86%",
    width: "95.01%",
    top: "30.39%",
    right: "4.99%",
    bottom: "0.75%",
    maxHeight: "100%",
    borderRadius: Border.br_xl,
    left: "0%",
  },
  title1: {
    width: "23.54%",
    top: "1.35%",
    right: "76.46%",
    bottom: "69.46%",
    left: "0%",
  },
  formemail: {
    top: "17.92%",
    bottom: "71.06%",
    right: "1.21%",
    width: "95.47%",
    left: "3.32%",
    height: "11.02%",
  },
  formemailBackgroundIcon2: {
    height: "99.26%",
    bottom: "0.74%",
    maxHeight: "100%",
    borderRadius: Border.br_xl,
    right: "0%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  bgIcon3: {
    height: "69.84%",
    marginLeft: -163.7,
    top: "30.16%",
    width: 327,
    borderRadius: Border.br_xl,
    bottom: "0%",
  },
  iconcheck2: {
    height: "13.82%",
    width: "4.35%",
    top: "57.95%",
    right: "8.09%",
    bottom: "28.23%",
    left: "87.57%",
    maxHeight: "100%",
  },
  title2: {
    height: "28.97%",
    width: "26.61%",
    top: "1.34%",
    right: "73.39%",
    bottom: "69.69%",
    left: "0%",
    position: "absolute",
  },
  email1: {
    height: "11.1%",
    width: "95.73%",
    top: "6.12%",
    right: "0.95%",
    bottom: "82.78%",
  },
  bg: {
    height: "89.79%",
    width: "99.86%",
    top: "10.21%",
    right: "0.14%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  alreadyHaveAn: {
    width: "90.05%",
    top: "18.93%",
    height: "81.07%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
  },
  logIn: {
    width: "19.76%",
    left: "80.24%",
    textDecoration: "underline",
    color: "#122ec2",
    fontSize: FontSize.size_xs,
    position: "absolute",
    height: "81.07%",
    top: "0%",
  },
  text: {
    height: "3.05%",
    width: "61.47%",
    top: "89.81%",
    right: "21.37%",
    bottom: "7.14%",
    left: "17.16%",
    position: "absolute",
  },
  byCreatingAn: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text2: {
    width: "86.96%",
    left: "13.04%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  elementscheckboxoffIcon: {
    height: "44.61%",
    width: "4.56%",
    top: "5.39%",
    right: "95.44%",
    bottom: "50%",
    maxHeight: "100%",
    left: "0%",
  },
  text1: {
    height: "4.95%",
    width: "93.6%",
    top: "82.4%",
    bottom: "12.65%",
    left: "6.4%",
    right: "0%",
    position: "absolute",
  },
  buttonprimaryBackgroundIcon: {
    maxHeight: "100%",
    borderRadius: Border.br_xl,
  },
  creatAccount: {
    marginLeft: -72,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    height: "100%",
    textAlign: "left",
    top: "0%",
  },
  creatAccountWrapper: {
    height: "48.48%",
    marginLeft: -53.9,
    top: "27.91%",
    bottom: "23.61%",
  },
  button: {
    height: "8.28%",
    marginLeft: -149.85,
    top: "72.5%",
    bottom: "19.21%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 302,
    left: "50%",
    position: "absolute",
  },
  bgIcon4: {
    marginLeft: -161.5,
    width: 323,
    top: "30.54%",
    height: "69.46%",
    bottom: "0%",
  },
  title3: {
    height: "29.34%",
    width: "27.24%",
    top: "0.9%",
    right: "72.76%",
    bottom: "69.76%",
    left: "0%",
    position: "absolute",
  },
  iconpreviewCloseOne1: {
    width: "5.6%",
    right: "7.59%",
    left: "86.81%",
  },
  password1: {
    height: "9.9%",
    width: "93.16%",
    top: "49.67%",
    right: "3.52%",
    bottom: "40.43%",
  },
  formemailBackgroundIcon3: {
    height: "97.23%",
    bottom: "2.77%",
    maxHeight: "100%",
    borderRadius: Border.br_xl,
    right: "0%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  bgIcon5: {
    height: "66.96%",
    marginLeft: -163.5,
    top: "32.9%",
    bottom: "0.15%",
    width: 325,
    borderRadius: Border.br_xl,
  },
  iconcheck3: {
    height: "13.54%",
    width: "4.32%",
    top: "56.62%",
    right: "8.1%",
    bottom: "29.84%",
    left: "87.58%",
    maxHeight: "100%",
  },
  email3: {
    width: "59.34%",
    top: "52.69%",
    right: "34.53%",
    bottom: "18.92%",
    left: "6.13%",
  },
  title4: {
    width: "23.53%",
    top: "1.31%",
    right: "76.47%",
    bottom: "70.31%",
    left: "0%",
  },
  email2: {
    height: "10.18%",
    top: "37.85%",
    bottom: "51.97%",
    right: "1.21%",
    width: "95.47%",
    left: "3.32%",
  },
  signUp: {
    marginLeft: -106.5,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    height: "100%",
  },
  title5: {
    height: "8.27%",
    marginLeft: -86.85,
    bottom: "91.73%",
  },
  maskGroup23: {
    height: "84.38%",
    width: "96.31%",
    top: "10.88%",
    right: "1.75%",
    bottom: "4.75%",
    left: "1.94%",
    position: "absolute",
  },
  signupScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUpScreen;
