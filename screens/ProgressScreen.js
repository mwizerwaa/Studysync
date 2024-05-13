import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ProgressScreen = () => {
  return <View style={styles.progressScreen} />;
};

const styles = StyleSheet.create({
  progressScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default ProgressScreen;
