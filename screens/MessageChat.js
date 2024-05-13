import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const MessageChat = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.messageChat}
      locations={[0, 0.28, 0.88]}
      colors={["#7faafb", "#fff", "#bfd4fd"]}
    >
      <View style={styles.messageChatHeader}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Messages")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={styles.messageChatHeaderChild}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
        />
        <View style={styles.blandineMugeniParent}>
          <Text style={styles.blandineMugeni}>Blandine MUGENI</Text>
          <Text
            style={[styles.activeNow, styles.activeNowTypo]}
          >{`Active Now `}</Text>
        </View>
        <Image
          style={styles.tablerVideo1Icon}
          contentFit="cover"
          source={require("../assets/tablervideo-11.png")}
        />
        <Image
          style={styles.materialSymbolsCallOutlineIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscalloutline-11.png")}
        />
        <Image
          style={styles.iconsearch}
          contentFit="cover"
          source={require("../assets/iconsearch11.png")}
        />
      </View>
      <View style={[styles.helloJonathanWrapper, styles.wrapperShadowBox]}>
        <Text style={[styles.helloJonathan, styles.activeNowTypo]}>
          Hello Jonathan !!
        </Text>
      </View>
      <View style={styles.chats}>
        <View style={[styles.helloBlandineWrapper, styles.wrapperPosition]}>
          <Text style={[styles.helloJonathan, styles.activeNowTypo]}>
            Hello Blandine !!
          </Text>
        </View>
        <View style={[styles.iAmOkayWrapper, styles.wrapperPosition]}>
          <Text style={[styles.helloJonathan, styles.activeNowTypo]}>
            I am okay!!
          </Text>
        </View>
        <View style={[styles.howAreYouDoingWrapper, styles.wrapperPosition]}>
          <Text style={[styles.helloJonathan, styles.activeNowTypo]}>
            How are you doing?
          </Text>
        </View>
        <View style={[styles.iAmGoodHowAreYouWrapper, styles.wrapperShadowBox]}>
          <Text
            style={[styles.helloJonathan, styles.activeNowTypo]}
          >{`I am good how are you? `}</Text>
        </View>
      </View>
      <View style={styles.resourcesSeacrch}>
        <View style={styles.resourcesSeacrchChild} />
        <Text style={styles.message}>Message....</Text>
        <Image
          style={[styles.cilSend1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cilsend-1.png")}
        />
        <Image
          style={[styles.iconoirEmoji1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconoiremoji-1.png")}
        />
        <Image
          style={[styles.mdiAttachmentVertical1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mdiattachmentvertical-1.png")}
        />
      </View>
      <Image
        style={styles.messageChatChild}
        contentFit="cover"
        source={require("../assets/ellipse-221.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  activeNowTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
  },
  wrapperShadowBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderBottomLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
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
  wrapperPosition: {
    borderBottomRightRadius: Border.br_mini,
    left: 0,
    padding: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    borderBottomLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.16%",
    height: "51.06%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    opacity: 0.9,
    width: "100%",
  },
  vector: {
    width: 14,
    height: 23,
  },
  messageChatHeaderChild: {
    borderRadius: 28,
    width: 43,
    height: 43,
    marginLeft: 13,
  },
  blandineMugeni: {
    top: "0%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    position: "absolute",
  },
  activeNow: {
    top: "53.85%",
    fontSize: FontSize.size_xs,
    left: "0%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
  },
  blandineMugeniParent: {
    width: 121,
    height: 39,
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
  messageChatHeader: {
    top: 22,
    left: 10,
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
  helloJonathan: {
    fontSize: FontSize.size_mini,
  },
  helloJonathanWrapper: {
    top: 172,
    left: 207,
  },
  helloBlandineWrapper: {
    top: 0,
  },
  iAmOkayWrapper: {
    top: 209,
  },
  howAreYouDoingWrapper: {
    top: 108,
  },
  iAmGoodHowAreYouWrapper: {
    top: 166,
    left: 133,
  },
  chats: {
    top: 129,
    left: 17,
    width: 334,
    height: 548,
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
    bottom: "25.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.16%",
    height: "51.06%",
    top: "23.4%",
  },
  iconoirEmoji1: {
    right: "90.15%",
    left: "2.69%",
    bottom: "25.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.16%",
    height: "51.06%",
    top: "23.4%",
  },
  mdiAttachmentVertical1Icon: {
    top: "25.53%",
    right: "82.99%",
    bottom: "23.4%",
    left: "9.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.16%",
    height: "51.06%",
  },
  resourcesSeacrch: {
    top: 699,
    left: 13,
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
  messageChatChild: {
    top: 56,
    left: 72,
    width: 10,
    height: 10,
    position: "absolute",
  },
  messageChat: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default MessageChat;
