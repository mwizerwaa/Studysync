import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const PendingScreen = () => {
  return <View style={styles.pendingScreen} />;
};

const styles = StyleSheet.create({
  pendingScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default PendingScreen;
