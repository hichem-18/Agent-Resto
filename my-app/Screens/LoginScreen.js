import React, { useState } from "react";
import axios from "axios";

import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://192.168.1.2:8000/vandor/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message === undefined) {
          const token = response.data;
          navigation.navigate("Orders", { token });
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.cont}>
        <Image
          source={require("../assets/cooking.png")}
          style={[{ width: 150, height: 160, marginTop: 140 }]}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Button
            containerStyle={styles.button}
            onPress={login}
            title="Login"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    backgroundColor: "white",
    //  alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    marginTop: 80,
  },
  button: {
    width: 250,
    marginTop: 20,
    borderRadius: 15,
    marginLeft: 30,
  },
  cont: {
    justifyContent: "center",
    alignItems: "center",
  },
});
