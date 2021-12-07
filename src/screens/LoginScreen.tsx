import Constants from "expo-constants";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Header } from "../components/Header";
import { PasswordInput } from "../components/PasswordInput";

export function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Header>
        <Text>Welcome to STARPORT</Text>
      </Header>
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            label="Email"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <PasswordInput
            label="Password"
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        </View>
        <Button mode="contained">Login</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  content: {
    flexGrow: 3,
    padding: 10,
  },
  input: {
    marginBottom: 20,
  },
});
