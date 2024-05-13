import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Lesson1QUIZCreation = () => {
  return (
    <View style={styles.lesson1QuizCreation}>
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pepiconsPopLineX3: {
    position: "absolute",
    marginLeft: -67,
    top: 800,
    left: "50%",
    width: 133,
    height: 63,
    overflow: "hidden",
  },
  lesson1QuizCreation: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Lesson1QUIZCreation;
