import React, {useState} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from "../components/logo";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword || !phone) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }
    else if(!reg.test(email)){
      alert("Please enter valid email");
      setLoading(false);
      return;
    }
    else if(phone.length < 10 || phone.length > 10){
      alert("Invalid phone number");
      setLoading(false);
      return;
    }
    else if(password.length < 6){
      alert("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    else if(password !== confirmPassword){
      alert("Password does not match");
      setLoading(false);
      return;
    }
    

    try{
      alert("Register Success");
      navigation.navigate("LogIn");
    }
    catch(error){
      alert("Register Failed");
    }
    
  }

  const showPassword = () => {
    setHidePass(hidePass ? false : true);
  }
  const showPasswordConfirm = () => {
    setHideConfirmPass(hideConfirmPass ? false : true);
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Logo name="Register" />
      <UserInput name="Full name" value={name}  setValue={setName} autoCapitalize/>
      <UserInput name="Email" value={email}  setValue={setEmail}/>
      <UserInput name="Phone" value={phone}  setValue={setPhone} keyboardType="numeric"/>
      <UserInput name="Password" secureTextEntry={hidePass ? true : false} value={password}  setValue={setPassword} />
      {/* Hide/Show password button */}
      <View style={styles.logoInput}>
        <TouchableOpacity onPress={() => showPassword()}>
          <Text>{hidePass ? "Show" : "Hide"}</Text>

        </TouchableOpacity>
      </View>

      <UserInput name="Confirm Password" secureTextEntry={hideConfirmPass ? true : false} value={confirmPassword}  setValue={setConfirmPassword}/>
      {/* Hide/Show password button */}
      <View style={styles.logoInput}>
        <TouchableOpacity onPress={() => showPasswordConfirm()}>
          <Text>{hideConfirmPass ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
        <Text>{loading ? "Waiting..." : "Register"}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Have account?{" "}
        <Text
          onPress={() => navigation.navigate("LogIn")}
          style={{ color: "blue"}}
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
  logoInput: {
    position: "relative",
    top: -45,
    right: -130,
  },
  eye: {
    height: 20,
    width: 30,
  }
});

export default Register;
