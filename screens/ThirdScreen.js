//1.react를 가져온다.
//2.사용할 component를 리액트 네이티에서 가져온다.
//3.화면을 그릴 class나 , function을 만들어준다.
//4.외부에서 사용할 수 있게 export 해준다.

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { publicColors } from "../assets/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ComInput from "../components/ComInput";
import ComButton from "../components/ComButton";

//extends가 없으면 그냥 객체(object)를 의미함 -> 아무런 기능이 X
//어떠한 데이터 또는 '그' 무언가를 미리 만들어주는 공간
//실제 우리 눈에 보이는 모든 것.

const Title = styled.Text`
  font-size: 25px;
  color: #786fa6;
  margin-left: 13px;
`;

const Forget = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${publicColors.TEXT_COLOR};
`;

const CpTxt = styled.Text`
  font-size: 10px;
  color: ${publicColors.GRAY_COLOR};
`;

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box_1}>
        <MaterialCommunityIcons name="login" color={"#574b90"} size={32} />
        <Title> Sign In</Title>
      </View>

      <View style={styles.box_2}>
        <ComInput ph="Email" />
        <ComInput ph="Password" st={true} />
        <Forget>Forget your password?</Forget>

        <View style={styles.btnArea}>
          <ComButton txt="Sign Up" nav={navigation} su={true} />
          <View style={{ width: 10 }}></View>
          <ComButton txt="login" nav={navigation} su={false} />
        </View>
      </View>

      <View style={styles.box_3}>
        <CpTxt>@copyright by developer KHJ</CpTxt>
        <TouchableOpacity
          onPress={() => navigation.navigate({ routeName: "SignUp2" })}
        >
          <Text>ETC Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box_1: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box_2: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  box_3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnArea: {
    flexDirection: "row"
  }
});
export default ThirdScreen;
