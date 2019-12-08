import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";

class App extends React.Component {
  render() {
    return <MainNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
