import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GroupChat = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.groupChat}
      locations={[0, 0.23, 0.88]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <View style={styles.groupChatHeader}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Groups")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-213.png")}
          />
          <Text style={styles.isYear4}>IS YEAR 4</Text>
          <Text style={styles.people54Active}>People 54 Active 40</Text>
        </View>
        <Image
          style={styles.tablerVideo1Icon}
          contentFit="cover"
          source={require("../assets/tablervideo-1.png")}
        />
        <Image
          style={styles.materialSymbolsCallOutlineIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscalloutline-1.png")}
        />
        <Image
          style={styles.iconsearch}
          contentFit="cover"
          source={require("../assets/iconsearch4.png")}
        />
      </View>
      <View style={styles.resourcesSeacrch}>
        <View style={styles.resourcesSeacrchChild} />
        <Text style={styles.message}>Message....</Text>
        <Image
          style={[styles.cilSend1Icon, styles.cilSend1IconLayout]}
          contentFit="cover"
          source={require("../assets/cilsend-1.png")}
        />
        <Image
          style={[styles.iconoirEmoji1, styles.cilSend1IconLayout]}
          contentFit="cover"
          source={require("../assets/iconoiremoji-1.png")}
        />
        <Image
          style={styles.mdiAttachmentVertical1Icon}
          contentFit="cover"
          source={require("../assets/mdiattachmentvertical-1.png")}
        />
      </View>
      <View style={styles.chats}>
        <View style={[styles.dianeParent, styles.parentShadowBox]}>
          <Text style={[styles.diane, styles.dianeTypo]}>Diane</Text>
          <Text style={[styles.helloEveryone, styles.hiiTypo]}>
            Hello Everyone !!
          </Text>
          <Text style={[styles.text, styles.textTypo]}>11:05</Text>
        </View>
        <View style={[styles.vanessaParent, styles.parentShadowBox]}>
          <Text style={[styles.vanessa, styles.dianeTypo]}>Vanessa</Text>
          <Text style={[styles.text1, styles.textTypo]}>11:05</Text>
          <Text style={[styles.hellooo, styles.hiiTypo]}>Hellooo!!</Text>
        </View>
        <View style={[styles.hiiWrapper, styles.wrapperShadowBox]}>
          <Text style={styles.hiiTypo}>{`Hii `}</Text>
        </View>
        <View style={[styles.iAmGoodHowAreYouWrapper, styles.wrapperShadowBox]}>
          <Text style={styles.hiiTypo}>{`I am good how are you? `}</Text>
        </View>
        <View
          style={[styles.howAreYouAllDoingWrapper, styles.wrapperShadowBox]}
        >
          <Text style={styles.hiiTypo}>How are you all doing?</Text>
        </View>
        <Image
          style={[styles.chatsChild, styles.chatsLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.chatsItem, styles.chatsLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cilSend1IconLayout: {
    bottom: "25.53%",
    width: "7.16%",
    height: "51.06%",
    top: "23.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentShadowBox: {
    height: 43,
    borderBottomLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  dianeTypo: {
    color: Color.colorMediumblue,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  hiiTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wrapperShadowBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderBottomLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
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
    position: "absolute",
  },
  chatsLayout: {
    height: 33,
    width: 33,
    borderRadius: 28,
    position: "absolute",
  },
  icon: {
    opacity: 0.9,
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 14,
    height: 23,
  },
  groupChild: {
    width: "33.15%",
    top: "0%",
    right: "66.85%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  isYear4: {
    top: "3.33%",
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: "35.91%",
    position: "absolute",
  },
  people54Active: {
    top: "60%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: "35.91%",
    position: "absolute",
  },
  ellipseParent: {
    width: 181,
    height: 60,
    marginLeft: 13,
  },
  tablerVideo1Icon: {
    width: 39,
    height: 37,
    marginLeft: 13,
    overflow: "hidden",
  },
  materialSymbolsCallOutlineIcon: {
    width: 24,
    height: 24,
    marginLeft: 13,
    overflow: "hidden",
  },
  iconsearch: {
    width: 18,
    height: 20,
    marginLeft: 13,
  },
  groupChatHeader: {
    top: 31,
    left: 7,
    width: 350,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
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
    position: "absolute",
  },
  resourcesSeacrchChild: {
    height: "104.26%",
    width: "100.6%",
    top: "-2.13%",
    right: "-0.3%",
    bottom: "-2.13%",
    left: "-0.3%",
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
  },
  message: {
    height: "46.81%",
    width: "55.22%",
    left: "20.6%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_100,
    top: "23.4%",
    textAlign: "left",
    position: "absolute",
  },
  cilSend1Icon: {
    right: "6.57%",
    left: "86.27%",
  },
  iconoirEmoji1: {
    right: "90.15%",
    left: "2.69%",
  },
  mdiAttachmentVertical1Icon: {
    top: "25.53%",
    right: "82.99%",
    bottom: "23.4%",
    left: "9.85%",
    width: "7.16%",
    height: "51.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  resourcesSeacrch: {
    top: 693,
    left: 15,
    width: 335,
    height: 47,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  diane: {
    left: 9,
  },
  helloEveryone: {
    top: 13,
    fontSize: FontSize.size_mini,
    position: "absolute",
    left: 9,
  },
  text: {
    top: 3,
    left: 108,
  },
  dianeParent: {
    width: 138,
    left: 37,
    height: 43,
    borderBottomLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    top: 0,
  },
  vanessa: {
    left: 5,
  },
  text1: {
    top: 2,
    left: 69,
  },
  hellooo: {
    top: 13,
    fontSize: FontSize.size_mini,
    position: "absolute",
    left: 5,
  },
  vanessaParent: {
    top: 60,
    left: 35,
    width: 97,
  },
  hiiWrapper: {
    top: 120,
    borderBottomRightRadius: Border.br_mini,
    padding: Padding.p_3xs,
    justifyContent: "center",
    left: 37,
  },
  iAmGoodHowAreYouWrapper: {
    top: 240,
    left: 150,
    borderTopLeftRadius: Border.br_mini,
  },
  howAreYouAllDoingWrapper: {
    top: 180,
    borderBottomRightRadius: Border.br_mini,
    padding: Padding.p_3xs,
    justifyContent: "center",
    left: 37,
  },
  chatsChild: {
    left: 2,
    top: 0,
    width: 33,
    borderRadius: 28,
  },
  chatsItem: {
    top: 63,
    left: 0,
  },
  chats: {
    top: 141,
    width: 351,
    height: 527,
    left: 5,
    position: "absolute",
  },
  groupChat: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupChat;
