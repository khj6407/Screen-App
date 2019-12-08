import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { publicColors } from "../assets/colors";
const { width } = Dimensions.get("window");

class ComInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.ph}
        secureTextEntry={this.props.st}
      />
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: width / 1.3,
    height: 50,
    borderColor: publicColors.BORDER_COLOR,
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 10
  }
});

export default ComInput;
