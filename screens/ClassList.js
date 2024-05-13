import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ClassList = () => {
  return <View style={styles.classList} />;
};

const styles = StyleSheet.create({
  classList: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default ClassList;
