import React,{useState} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserInput from "../components/Input";
import Logo from "../components/logo";

const LogIn = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const showPassword = () => {
    setHidePass(hidePass ? false : true);
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>  
      <Logo name="Log in" />
      <UserInput name="Email" value={email} setValue={setEmail}/>
      <UserInput name="Password" secureTextEntry={hidePass?true:false} value={password}  setValue={setPassword}/>
      <View style={styles.logoInput}>
        <TouchableOpacity onPress={() => showPassword()}>
        <Text>{hidePass?"Show":"Hide"}</Text>
        </TouchableOpacity>
      </View>
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
      <TouchableOpacity onPress={()=>Alert.alert(
        "Forgot password?",
        'You should relax and try to remember your password',
      )}>
       <Text style={{ marginTop: 10, color: "red" }}>Forget Password</Text>
      </TouchableOpacity>
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
  logoInput: {
    position: "relative",
    top: -45,
    right: -130,
  }
});
export default LogIn;
