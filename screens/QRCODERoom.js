import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const QRCODERoom = () => {
  return (
    <View style={styles.qrCoderoom}>
      <Image
        style={[styles.qrCodeIcon, styles.qrCodeIconPosition]}
        contentFit="cover"
        source={require("../assets/qr-code.png")}
      />
      <View style={[styles.backParent, styles.qrCodeIconPosition]}>
        <Text style={styles.back}>BACK</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeIconPosition: {
    left: 37,
    position: "absolute",
  },
  qrCodeIcon: {
    top: 214,
    width: 291,
    height: 266,
  },
  back: {
    top: 0,
    left: 78,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "63.89%",
    width: "9.72%",
    top: "8.33%",
    right: "90.28%",
    bottom: "27.78%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.9,
    position: "absolute",
    overflow: "hidden",
  },
  backParent: {
    top: 68,
    width: 144,
    height: 36,
  },
  subtractIcon: {
    width: 81,
    height: 201,
  },
  qrCoderoom: {
    borderRadius: Border.br_11xl,
    backgroundColor: "#edc8c1",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default QRCODERoom;
