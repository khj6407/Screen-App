//1.react를 가져온다.
//2.사용할 component를 리액트 네이티에서 가져온다.
//3.화면을 그릴 class나 , function을 만들어준다.
//4.외부에서 사용할 수 있게 export 해준다.

import React from "react";
import { View, Text, StyleSheet } from "react-native";

//extends가 없으면 그냥 객체(object)를 의미함 -> 아무런 기능이 X
//어떠한 데이터 또는 '그' 무언가를 미리 만들어주는 공간
//실제 우리 눈에 보이는 모든 것.

class FirstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>I'm FirstScreen.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FirstScreen;
