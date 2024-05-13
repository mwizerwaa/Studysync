import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Lesson1NotesScreen = () => {
  return <View style={styles.lesson1NotesScreen} />;
};

const styles = StyleSheet.create({
  lesson1NotesScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Lesson1NotesScreen;
