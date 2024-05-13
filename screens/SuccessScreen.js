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

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.successScreenIcon}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <View style={styles.overlayParent}>
        <View style={[styles.overlay, styles.buttonPosition]}>
          <View
            style={[
              styles.frameBackgroundParent,
              styles.frameBackgroundParentPosition,
            ]}
          >
            <Image
              style={[styles.frameBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/frame-background.png")}
            />
            <View style={styles.content}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon5.png")}
              />
              <View style={styles.title}>
                <Text style={[styles.success, styles.successTypo]}>
                  Success
                </Text>
              </View>
              <View style={styles.text}>
                <Text
                  style={[
                    styles.congratulationsYouHave,
                    styles.frameBackgroundParentPosition,
                  ]}
                >{`Congratulations, you have completed 
your registration!`}</Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonPosition]}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <View
                  style={[
                    styles.frameBackgroundParent,
                    styles.frameBackgroundParentPosition,
                  ]}
                >
                  <Image
                    style={[styles.frameBackgroundIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-128.png")}
                  />
                  <View
                    style={[styles.startLearningWrapper, styles.startPosition]}
                  >
                    <Text style={[styles.startLearning, styles.startPosition]}>
                      Start Learning
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <Text style={styles.studySync}>STUDY SYNC</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  frameBackgroundParentPosition: {
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  successTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "0%",
    height: "100%",
  },
  startPosition: {
    width: 121,
    left: "50%",
    position: "absolute",
  },
  frameBackgroundIcon: {
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  icon: {
    height: "27.73%",
    width: "24.7%",
    right: "40.7%",
    bottom: "72.27%",
    left: "34.6%",
  },
  success: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  title: {
    height: "10.4%",
    width: "25.86%",
    top: "36%",
    right: "39.98%",
    bottom: "53.61%",
    left: "34.16%",
    position: "absolute",
  },
  congratulationsYouHave: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightsteelblue_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    height: "15.59%",
    width: "89.17%",
    top: "50.31%",
    right: "8.49%",
    bottom: "34.1%",
    left: "2.35%",
    position: "absolute",
  },
  startLearning: {
    marginLeft: -60.4,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "0%",
    height: "100%",
  },
  startLearningWrapper: {
    height: "47.94%",
    marginLeft: -60.45,
    top: "25.58%",
    bottom: "26.48%",
  },
  frameBackgroundParent: {
    bottom: "0%",
    right: "0%",
  },
  button: {
    height: "21.68%",
    top: "78.32%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    bottom: "0%",
    right: "0%",
  },
  content: {
    height: "76.61%",
    width: "89.01%",
    top: "7.61%",
    right: "2.64%",
    bottom: "15.78%",
    left: "8.36%",
    position: "absolute",
  },
  overlay: {
    height: "77.23%",
    top: "22.77%",
    bottom: "0%",
    right: "0%",
  },
  studySync: {
    marginLeft: -104.55,
    top: 0,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.irishGroverRegular,
    left: "50%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  overlayParent: {
    height: "54.46%",
    width: "86.42%",
    top: "21.13%",
    right: "6.92%",
    bottom: "24.41%",
    left: "6.67%",
    position: "absolute",
  },
  successScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SuccessScreen;
