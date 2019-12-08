// TabNavigation(화면 3개) + SignUp 가지고 App으로 가야지

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import SignUp from "../screens/SignUp";
import SignUp2 from "../screens/SignUp2";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp
    },
    SignUp2: {
      screen: SignUp2
    }
  },
  {
    headerMode: "screen",
    mode: "card" //card, modal
  }
);

export default createAppContainer(MainNavigation);
