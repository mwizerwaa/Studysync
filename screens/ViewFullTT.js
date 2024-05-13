import * as React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ViewFullTT = () => {
  return (
    <ImageBackground
      style={styles.viewFullTt}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Text style={styles.urCalendar}>UR CALENDAR</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  urCalendar: {
    position: "absolute",
    top: 231,
    left: 73,
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
    width: 242,
    height: 148,
  },
  viewFullTt: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ViewFullTT;
