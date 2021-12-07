import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import type { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

type Props = Pick<TextInputProps, "style" | "label" | "value" | "onChangeText">;
export const PasswordInput: React.FC<Props> = (...props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const icon = (
    <TextInput.Icon name="eye" onPress={() => setIsVisible(!isVisible)} />
  );
  return <TextInput {...props} secureTextEntry={!isVisible} right={icon} />;
};

const styles = StyleSheet.create({});
