import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./navigation/TabNavigation";

class App extends React.Component {
  render() {
    return <TabNavigation style={styles.container} />;
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
