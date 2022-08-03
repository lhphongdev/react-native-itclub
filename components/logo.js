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

const Logo = ({name}) => {
return(
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>{name}</Text>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
      },
    logo: {
        width: 270,
        height: 150,
        marginBottom: 10,
        marginVertical: 60,
      },
      title: {
        fontSize: 27,
        color: "#2b3494",
        fontWeight: "bold",
        marginBottom: 30,
        alignContent: "center",
      },
});

export default Logo;