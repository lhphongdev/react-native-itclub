import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Logo from "../components/logo";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Logo name="Register" />
      <UserInput name="FullName" />
      <UserInput name="Email" />
      <UserInput name="Password" password="true"/>
      <UserInput name="Confirm Password" password="true"/>
      <TouchableOpacity style={styles.submit}>
        <Text>Register</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Have account?{" "}
        <Text
          onPress={() => navigation.navigate("LogIn")}
          style={{ color: "blue" }}
        >
          Login
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  submit: {
    backgroundColor: "#FF9900",
    height: 40,
    justifyContent: "center",
    borderRadius: 24,
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
});
export default Register;
