import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Header } from "../components/Header";
import { PasswordInput } from "../components/PasswordInput";
import { AppRoutes } from "../navigation/AppRoutes";
import type { RootStackParamList } from "../navigation/Navigator";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  AppRoutes.LOGIN_SCREEN
>;

export function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginTap = () => {
    navigation.navigate(AppRoutes.STARSHIP_FEED_SCREEN);
  };

  const handleTermsTap = () => {
    navigation.navigate(AppRoutes.TERMS_SCREEN);
  };

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
        <Button mode="contained" onPress={handleLoginTap}>
          Login
        </Button>
        <Pressable onPress={handleTermsTap}>
          <Text style={styles.termsLink}>Terms and conditions</Text>
        </Pressable>
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
  termsLink: {
    color: "#a8a8a8",
    padding: 20,
    textAlign: "center",
  },
});
