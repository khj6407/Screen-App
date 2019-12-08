import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComInput from "../components/ComInput";
import ComButton from "../components/ComButton";
import styled from "styled-components";

const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 40px;
`;

//none Class
//statless

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 10, height: 50 }}></View>
        <Title>Join Member</Title>
        <ComInput ph="email" />
        <ComInput ph="UserName" st={true} />
        <ComInput ph="password" st={true} />
        <ComInput ph="verify password" />
        <ComInput ph="mobile" />
        <ComButton txt="Join us" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
export default SignUp;
