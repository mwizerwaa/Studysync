import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import PopUp from "../components/PopUp";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ViewRoom = () => {
  const [vectorIconVisible, setVectorIconVisible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon = useCallback(() => {
    setVectorIconVisible(true);
  }, []);

  const closeVectorIcon = useCallback(() => {
    setVectorIconVisible(false);
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.viewRoomIcon}
        resizeMode="cover"
        source={require("../assets/loginscreen.png")}
      >
        <Text style={[styles.viewRoomInfo, styles.scanTypo]}>
          View Room info Here
        </Text>
        <Pressable style={styles.vector} onPress={openVectorIcon}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.guidelinesParent, styles.scanQrCodeLayout]}>
          <Text
            style={[styles.guidelines, styles.scanTypo]}
          >{`Guidelines `}</Text>
          <Text
            style={[styles.scanQrCode, styles.scanQrCodeLayout]}
          >{`Scan QR CODE on the room
Click on the link to view it.
You can also view the room information on timetable.`}</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("QRCODERoom")}
        >
          <Image
            style={[styles.buttonprimaryBackgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/buttonprimary-background6.png")}
          />
          <Text style={[styles.scanQrCode1, styles.scanTypo]}>
            Scan QR CODE
          </Text>
          <Image
            style={styles.phScan1Icon}
            contentFit="cover"
            source={require("../assets/phscan-1.png")}
          />
        </Pressable>
      </ImageBackground>

      <Modal animationType="fade" transparent visible={vectorIconVisible}>
        <View style={styles.vectorIconOverlay}>
          <Pressable style={styles.vectorIconBg} onPress={closeVectorIcon} />
          <PopUp onClose={closeVectorIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  scanTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  scanQrCodeLayout: {
    width: 264,
    position: "absolute",
  },
  viewRoomInfo: {
    top: 121,
    left: 29,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    opacity: 0.9,
  },
  vector: {
    left: "8.06%",
    top: "8.13%",
    right: "88.06%",
    bottom: "89%",
    width: "3.89%",
    height: "2.88%",
    position: "absolute",
  },
  guidelines: {
    top: 0,
    left: 5,
    width: 128,
    height: 74,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  scanQrCode: {
    top: 38,
    left: 0,
    fontSize: FontSize.size_sm,
    height: 86,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  guidelinesParent: {
    top: 222,
    left: 40,
    height: 124,
  },
  buttonprimaryBackgroundIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  scanQrCode1: {
    height: "48.3%",
    marginLeft: -50.45,
    top: "25.04%",
    left: "50%",
    fontSize: FontSize.size_xl,
    width: 153,
    position: "absolute",
  },
  phScan1Icon: {
    top: 8,
    left: 14,
    width: 46,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  button: {
    height: "6.99%",
    width: "76.92%",
    top: "55.25%",
    right: "11.42%",
    bottom: "37.76%",
    left: "11.67%",
    position: "absolute",
  },
  viewRoomIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewRoom;
