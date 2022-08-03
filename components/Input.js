import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const UserInput = ({ name, setValue, value, autoCapitalize="none", keyboardType="default", secureTextEntry=false }) => {
  return (
    <View>
      <Text style={{ width: "100%", fontWeight: "600" }}>{name}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={"Enter " + name} 
        secureTextEntry={secureTextEntry} 
        autoCapitalize={autoCapitalize} 
        keyboardType={keyboardType} 
        value={value} 
        onChangeText={(text)=>setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 300,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8393a1",
    marginBottom: 20,
  },
});

export default UserInput;
