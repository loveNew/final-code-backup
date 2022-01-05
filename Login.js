import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("BottomTab");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
        <ImageBackground source={bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({ email: text })}
              placeholder={" Email Id"}
              placeholderTextColor={"white"}
            />
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({ password: text })}
              placeholder={" Password"}
              placeholderTextColor={"white"}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },  
    upperContainer: {
      flex: 0.5,
      alignItems: "center",
      marginBottom:50
    },
    appIcon: {
      width: 250,
      height: 250,
      resizeMode: "contain",
      marginTop: 10,
    },
    appName: {
      width: 130,
      height: 130,
      resizeMode: "contain",
      marginBottom: 50,
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center",
    },
    textinput: {
      width: "60%",
      height: "15%",
      borderColor: "white",
      borderWidth: 3,
      borderRadius: 10,
      fontSize: 20,
      color: "white",
      fontFamily: "Rajdhani_600SemiBold",
      backgroundColor: "#5653D4",
      marginTop: 20,
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15,
      marginTop: 20 ,
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold",
    },
  });
  