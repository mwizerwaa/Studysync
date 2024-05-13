const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import CoursesScreen from "./screens/CoursesScreen";
import Course1AboutScreen from "./screens/Course1AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SuccessScreen from "./screens/SuccessScreen";
import SplashScreen from "./screens/SplashScreen";
import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen2 from "./screens/SplashScreen2";
import SplashScreen3 from "./screens/SplashScreen3";
import Account from "./screens/Account";
import PopUp from "./components/PopUp";
import NotificationsPage from "./screens/NotificationsPage";
import GroupChat from "./screens/GroupChat";
import Course1CurriculumScreen from "./screens/Course1CurriculumScreen";
import QRCODERoom from "./screens/QRCODERoom";
import AskHelpScreen from "./screens/AskHelpScreen";
import Groups from "./screens/Groups";
import RoomInfo from "./screens/RoomInfo";
import NoNotification from "./screens/NoNotification";
import Course1LEARNINGScreen from "./screens/Course1LEARNINGScreen";
import Course1ResourcesScreen from "./screens/Course1ResourcesScreen";
import MessageChat from "./screens/MessageChat";
import Messages from "./screens/Messages";
import InstructorsMessage from "./screens/InstructorsMessage";
import ViewFullTT from "./screens/ViewFullTT";
import ViewRoom from "./screens/ViewRoom";
import SettingsScreen from "./screens/SettingsScreen";
import FAQScreen from "./screens/FAQScreen";
import HomeScreen1 from "./screens/HomeScreen1";
import LessonsScreen from "./screens/LessonsScreen";
import PendingScreen from "./screens/PendingScreen";
import ClassList from "./screens/ClassList";
import Lesson1NotesScreen from "./screens/Lesson1NotesScreen";
import ProgressScreen from "./screens/ProgressScreen";
import Lesson1AssignmentCreation from "./screens/Lesson1AssignmentCreation";
import TimeTable from "./screens/TimeTable";
import MyClassScreen from "./screens/MyClassScreen";
import Lesson1ResourcesAddScreen from "./screens/Lesson1ResourcesAddScreen";
import Login from "./screens/Login";
import Lesson1QUIZCreation from "./screens/Lesson1QUIZCreation";
import Lesson1AnnouncementCreation from "./screens/Lesson1AnnouncementCreation";
import SearchScreen from "./screens/SearchScreen";
import ADD from "./components/ADD";
import AddLessonsAndLecturesForE from "./screens/AddLessonsAndLecturesForE";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Mulish-ExtraBold": require("./assets/fonts/Mulish-ExtraBold.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "IrishGrover-Regular": require("./assets/fonts/IrishGrover-Regular.ttf"),
    "PottaOne-Regular": require("./assets/fonts/PottaOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CoursesScreen"
              component={CoursesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Course1AboutScreen"
              component={Course1AboutScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessScreen"
              component={SuccessScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen2"
              component={SplashScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen3"
              component={SplashScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationsPage"
              component={NotificationsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupChat"
              component={GroupChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Course1CurriculumScreen"
              component={Course1CurriculumScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QRCODERoom"
              component={QRCODERoom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AskHelpScreen"
              component={AskHelpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Groups"
              component={Groups}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoomInfo"
              component={RoomInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoNotification"
              component={NoNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Course1LEARNINGScreen"
              component={Course1LEARNINGScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Course1ResourcesScreen"
              component={Course1ResourcesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MessageChat"
              component={MessageChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InstructorsMessage"
              component={InstructorsMessage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewFullTT"
              component={ViewFullTT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewRoom"
              component={ViewRoom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQScreen"
              component={FAQScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen1"
              component={HomeScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LessonsScreen"
              component={LessonsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PendingScreen"
              component={PendingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClassList"
              component={ClassList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lesson1NotesScreen"
              component={Lesson1NotesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProgressScreen"
              component={ProgressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lesson1AssignmentCreation"
              component={Lesson1AssignmentCreation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TimeTable"
              component={TimeTable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyClassScreen"
              component={MyClassScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lesson1ResourcesAddScreen"
              component={Lesson1ResourcesAddScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lesson1QUIZCreation"
              component={Lesson1QUIZCreation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lesson1AnnouncementCreation"
              component={Lesson1AnnouncementCreation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ADD"
              component={ADD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddLessonsAndLecturesForE"
              component={AddLessonsAndLecturesForE}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
