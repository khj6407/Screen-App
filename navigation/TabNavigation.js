import { createBottomTabNavigator } from "react-navigation-tabs";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import { publicColors } from "../assets/colors";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

//만든 세개의 스크린을 import한다.

const TabNavigation = createBottomTabNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: { title: "Feeds" }
    },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: { title: "Stories" }
    },
    ThirdScreen: {
      screen: ThirdScreen,
      navigationOptions: { title: "User" }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: publicColors.BLACK,
        paddingBottom: Platform.OS === "ios" ? 20 : 18
      }
    }
  }
);

export default createAppContainer(TabNavigation);
