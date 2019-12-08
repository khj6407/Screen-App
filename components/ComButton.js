import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { publicColors } from "../assets/colors";
import { withNavigation } from "react-navigation";

const { width } = Dimensions.get("window");

const ComButton = ({ txt, nav, su }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={
        su
          ? () => nav.navigate({ routeName: "SignUp" })
          : () => alert("개발중임.!")
      }
    >
      <Text style={styles.btnTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

// class ComButton extends React.Component {
//   constructor(props) {
//     super(props); //나를 호출한 것중에 props만 사용하겠다
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => this.props.navigation.navigate({ routeName: "SignUp" })}
//       >
//         <Text style={styles.btnTxt}>{this.props.children}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

const styles = StyleSheet.create({
  btn: {
    width: width / 3,
    height: 40,
    backgroundColor: publicColors.CHECK_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  btnTxt: {
    color: "#fff",
    fontWeight: "bold"
  }
});
export default ComButton;
