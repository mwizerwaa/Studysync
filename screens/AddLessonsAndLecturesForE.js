import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const AddLessonsAndLecturesForE = () => {
  return <View style={styles.addLessonsAndLecturesForE} />;
};

const styles = StyleSheet.create({
  addLessonsAndLecturesForE: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AddLessonsAndLecturesForE;
