import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserInput from "../components/Input";
import Logo from "../components/logo";

const LogIn = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>  
      <Logo name="Log in" />
      <UserInput name="Email"/>
      <UserInput name="Password" password="true"/>
      <TouchableOpacity style={styles.submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Do not have account?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: "blue" }}
        >
          Sign Up
        </Text>
      </Text>
      <Text style={{ marginTop: 10, color: "red" }}>Forget Password</Text>
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
export default LogIn;
