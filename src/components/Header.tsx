import React from "react";
import type { ViewProps } from "react-native";
import { StyleSheet, View } from "react-native";
import { Headline } from "react-native-paper";

export const Header: React.FC<ViewProps> = ({ children }) => {
  return (
    <View style={[styles.headline]}>
      <Headline style={styles.text}>{children}</Headline>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  text: {
    flexGrow: 1,
    textAlign: "center",
    color: "#FFF",
  },
});
