import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NotificationsPage = () => {
  return (
    <ImageBackground
      style={styles.notificationsPageIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Text style={styles.notifications}>Notifications</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewPosition2]}>
          <Text style={styles.today}>Today</Text>
          <View style={[styles.view1, styles.viewPosition1]}>
            <View style={[styles.rectangle, styles.viewPosition]} />
            <Image
              style={[styles.circleIcon, styles.circleIconPosition1]}
              contentFit="cover"
              source={require("../assets/circle.png")}
            />
            <Text style={styles.newCategoryCourse}>New Course Uploaded.!</Text>
            <Text style={[styles.newThe3d, styles.newTypo]}>
              New Course is Availailable
            </Text>
          </View>
          <View style={[styles.view2, styles.viewPosition1]}>
            <View style={[styles.rectangle, styles.viewPosition]} />
            <Image
              style={[styles.circleIcon, styles.circleIconPosition1]}
              contentFit="cover"
              source={require("../assets/circle1.png")}
            />
            <Text
              style={[styles.newCategoryCourse1, styles.todaysSpecialOffeTypo]}
            >
              Message from Lecture..!
            </Text>
            <Text
              style={[styles.newThe3d1, styles.newTypo]}
            >{`Change in scheduled class of 
Reasearch Methodology`}</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition]}>
            <View style={[styles.rectangle, styles.viewPosition]} />
            <Image
              style={[styles.circleIcon, styles.circleIconPosition1]}
              contentFit="cover"
              source={require("../assets/circle2.png")}
            />
            <Text
              style={[styles.todaysSpecialOffe, styles.youHaveMadePosition]}
            >
              Reminder!!
            </Text>
            <Text
              style={[styles.youHaveMade, styles.youHaveMadePosition]}
            >{`You Have to attempt a quiz 
today at 10:00 AM `}</Text>
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout]}>
          <Text style={[styles.yesterday, styles.yesterdayTypo]}>
            Yesterday
          </Text>
          <View style={[styles.view5, styles.viewPosition]}>
            <View style={[styles.rectangle, styles.viewPosition]} />
            <Image
              style={[styles.circleIcon3, styles.circleIconPosition]}
              contentFit="cover"
              source={require("../assets/circle3.png")}
            />
            <Text
              style={[styles.creditCardConnecte, styles.creditCardConnecteTypo]}
            >
              New Resource from Lec.!
            </Text>
            <Text style={[styles.creditCardHas, styles.hasTypo]}>
              You have a new resource Uploaded from your Lecture!
            </Text>
          </View>
        </View>
        <View style={[styles.view6, styles.viewLayout]}>
          <Text style={[styles.nov202022, styles.yesterdayTypo]}>
            April,20, 2024
          </Text>
          <View style={[styles.view5, styles.viewPosition]}>
            <View style={[styles.rectangle, styles.viewPosition]} />
            <Image
              style={[styles.circleIcon4, styles.circleIconPosition]}
              contentFit="cover"
              source={require("../assets/circle4.png")}
            />
            <Text
              style={[styles.accountSetupSucces, styles.creditCardConnecteTypo]}
            >
              Account Setup Successful.!
            </Text>
            <Text style={[styles.yourAccountHas, styles.hasTypo]}>
              Your Account has been Created.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewPosition2: {
    left: 0,
    width: 341,
  },
  viewPosition1: {
    left: "0%",
    right: "0%",
    height: "27.25%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  viewPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  circleIconPosition1: {
    left: "4.99%",
    right: "80.56%",
    width: "14.46%",
  },
  newTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "21.67%",
    marginTop: 5,
  },
  todaysSpecialOffeTypo: {
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_lgi,
    left: "21.7%",
    marginTop: -27,
    color: Color.colorGray_100,
    fontWeight: "600",
  },
  youHaveMadePosition: {
    width: "63.05%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  viewLayout: {
    height: 143,
    position: "absolute",
  },
  yesterdayTypo: {
    fontFamily: FontFamily.jostBold,
    marginTop: -71.5,
    fontWeight: "700",
    left: "0%",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  circleIconPosition: {
    bottom: "24%",
    top: "24%",
    height: "52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  creditCardConnecteTypo: {
    fontSize: FontSize.size_xl,
    marginTop: -31,
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray_100,
    fontWeight: "600",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  hasTypo: {
    marginTop: 2,
    color: Color.colorDimgray,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  notifications: {
    top: 55,
    left: 104,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.88%",
    width: "3.89%",
    top: "7.25%",
    right: "88.89%",
    bottom: "89.88%",
    left: "7.22%",
    opacity: 0.9,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  today: {
    marginTop: -176.5,
    width: "14.96%",
    left: "2.05%",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorAliceblue,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
  },
  circleIcon: {
    top: "21%",
    bottom: "27%",
    height: "52%",
    left: "4.99%",
    right: "80.56%",
    width: "14.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  newCategoryCourse: {
    width: "66.28%",
    left: "21.7%",
    marginTop: -27,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  newThe3d: {
    width: "68.62%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  view1: {
    top: "11.72%",
    bottom: "61.04%",
  },
  newCategoryCourse1: {
    width: "69.5%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  newThe3d1: {
    width: "69.44%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  view2: {
    top: "42.23%",
    bottom: "30.52%",
  },
  todaysSpecialOffe: {
    fontFamily: FontFamily.jostSemiBold,
    fontSize: FontSize.size_lgi,
    left: "21.7%",
    marginTop: -27,
    color: Color.colorGray_100,
    fontWeight: "600",
  },
  youHaveMade: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "21.67%",
    marginTop: 5,
  },
  view3: {
    top: "72.75%",
    height: "27.25%",
    bottom: "0%",
    overflow: "hidden",
  },
  view: {
    top: 0,
    height: 367,
    position: "absolute",
    left: 0,
  },
  yesterday: {
    width: "26.39%",
  },
  circleIcon3: {
    left: "4.99%",
    right: "80.56%",
    width: "14.46%",
  },
  creditCardConnecte: {
    width: "70.67%",
    left: "21.7%",
  },
  creditCardHas: {
    width: "65.4%",
    left: "21.7%",
  },
  view5: {
    height: "69.93%",
    top: "30.07%",
    overflow: "hidden",
  },
  view4: {
    top: 381,
    left: 0,
    width: 341,
  },
  nov202022: {
    width: "38.35%",
  },
  circleIcon4: {
    width: "14.45%",
    right: "80.53%",
    left: "5.01%",
  },
  accountSetupSucces: {
    width: "72.57%",
    left: "21.53%",
  },
  yourAccountHas: {
    width: "59.44%",
    left: "21.65%",
  },
  view6: {
    top: 538,
    left: 2,
    width: 339,
  },
  parent: {
    top: 91,
    left: 9,
    height: 688,
    width: 341,
    position: "absolute",
  },
  notificationsPageIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default NotificationsPage;
