import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ADD = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.add}>
      <Pressable
        style={styles.quiz}
        onPress={() => navigation.navigate("Lesson1QUIZCreation")}
      >
        <Text style={styles.quiz1}>QUIZ</Text>
      </Pressable>
      <Pressable
        style={styles.notesShadowBox}
        onPress={() => navigation.navigate("Lesson1AssignmentCreation")}
      >
        <Text style={styles.quiz1}>ASSIGNMENT</Text>
      </Pressable>
      <Pressable
        style={styles.notesShadowBox}
        onPress={() => navigation.navigate("Lesson1NotesScreen")}
      >
        <Text style={styles.quiz1}>NOTES</Text>
      </Pressable>
      <Pressable
        style={styles.notesShadowBox}
        onPress={() => navigation.navigate("Lesson1ResourcesAddScreen")}
      >
        <Text style={styles.quiz1}>RESOURCE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  quiz1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  quiz: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  notesShadowBox: {
    marginTop: 1,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  add: {
    backgroundColor: Color.colorWhite,
    width: 90,
    padding: Padding.p_8xs,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ADD;
